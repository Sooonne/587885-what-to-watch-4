import React, {PureComponent, createRef} from 'react';
import propTypes from 'prop-types';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();
    this.isPlaying = this.props.isPlaying;

    this.timeout = null;
  }

  componentDidMount() {
    const {src, poster} = this.props;
    const video = this._videoRef.current;
    if (video) {
      video.src = src;
      video.poster = poster;
      video.muted = true;
    }
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    if (video) {
      video.onplay = null;
      video.muted = null;
      video.src = ``;
      video.poster = ``;
    }
  }

  componentDidUpdate() {
    const video = this._videoRef.current;


    if (video) {
      if (this.props.isPlaying) {
        video.play();
      } else {
        video.load();
      }
    }
  }

  render() {
    const {src, poster} = this.props;
    return (
      <React.Fragment>
        <video
          width="280"
          height="175"
          ref={this._videoRef}
          src = {src}
          poster = {poster}
        >
        </video>
      </React.Fragment>
    );
  }
}


VideoPlayer.propTypes = {
  isPlaying: propTypes.bool.isRequired,
  src: propTypes.string.isRequired,
  poster: propTypes.string.isRequired,
};

export default VideoPlayer;
