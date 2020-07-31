import React, {PureComponent, createRef} from "react";
import propTypes from "prop-types";

export default class VideoPlayerFullScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      duration: 0,
      progress: 0
    };

    this._videoRef = createRef();
    this.isPlaying = this.props.isPlaying;
  }

  componentDidMount() {
    const {src} = this.props;
    const video = this._videoRef.current;
    if (video) {
      video.src = src;
      // video.poster = poster;
    }
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    if (video) {
      video.src = ``;
      // video.poster = ``;
    }
  }

  render() {
    const {src} = this.props;
    return (
      <React.Fragment>
        <video
          ref={this._videoRef}
          className="player__video"
          src = {src}
          // poster = {poster}
        >
        </video>
      </React.Fragment>
    );
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  }
}


VideoPlayerFullScreen.propTypes = {
  isPlaying: propTypes.bool.isRequired,
  src: propTypes.string.isRequired,
  // poster: propTypes.string.isRequired,
};
