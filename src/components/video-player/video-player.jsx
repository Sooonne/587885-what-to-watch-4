import React, {PureComponent, createRef} from 'react';
import propTypes from 'prop-types';

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();
    this.state = {
      isLoading: true,
    };
    this.isPlaying = this.props.isPlaying;

    this.timeout = null;
  }

  componentDidMount() {
    const {src, poster} = this.props;
    const video = this._videoRef.current;

    video.src = src;
    video.poster = poster;

    video.oncanplaythrough = () => {
      this.setState({
        isLoading: false,
      });
    };
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.oncanplaythrough = null;
    video.src = ``;
    video.poster = ``;


  }

  render() {
    return (
      <React.Fragment>
        <video
          width="280"
          height="175"
          ref={this._videoRef}
          // onMouseOver={(evt) => evt.target.play()}
          // onMouseOut={(evt) => evt.target.pause()}
          muted>
        </video>
      </React.Fragment>
    );
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {
      this._playTimeout = setTimeout(() => {
        video.play();
      }, 1000);
    } else {
      video.load();
      clearTimeout(this._playTimeout);
    }
  }
}


VideoPlayer.propTypes = {
  isPlaying: propTypes.bool.isRequired,
  src: propTypes.string.isRequired,
  poster: propTypes.string.isRequired,
};
