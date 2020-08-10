import React, {PureComponent, createRef} from "react";
import propTypes from "prop-types";
import DEFAULT_PROPTYPES from "../prop-type-units/prop-types-units.js";
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";
// import {Link} from "react-router-dom";
import {getMovies} from "../reducer/data/selector.js";
import {countLeftTimeformat} from "../utils/const.js";
// import Loading from "../loading/loading.jsx";

const withDurationPlayer = (Component) => {
  class WithDurationPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = createRef();

      this.state = {
        duration: 0,
        progress: 0,
        isPlaying: true,
        leftTimeFormat: `00:00:00`,
      };

      this._handlePlayOrPause = this._handlePlayOrPause.bind(this);
      this._handleFullScreen = this._handleFullScreen.bind(this);
      this._renderVideo = this._renderVideo.bind(this);
    }

    componentDidMount() {
      const video = this._videoRef.current;
      if (video) {
        video.play();

        video.onloadedmetadata = () => this.setState({
          duration: video.duration,
        });

        video.ontimeupdate = () => this.setState({
          progress: Math.trunc(video.currentTime)
        });
      }
    }

    componentWillUnmount() {
      const video = this._videoRef.current;

      video.src = ``;
      video.poster = ``;
      video.onloadedmetadata = null;
      video.ontimeupdate = null;
    }

    componentDidUpdate() {
      const {isPlaying} = this.state;
      const video = this._videoRef.current;
      this.setState({
        leftTimeFormat: countLeftTimeformat(video.currentTime, video.duration)
      });
      if (isPlaying) {
        video.play();
      } else {
        video.pause();
      }
    }

    _handlePlayOrPause() {
      const {isPlaying} = this.state;

      this.setState({
        isPlaying: !isPlaying,
      });
    }

    _handleFullScreen() {
      this._videoRef.current.requestFullscreen();
    }

    _renderVideo(movie) {
      return (
        <video
          ref={this._videoRef}
          className="player__video"
          poster={movie.poster}
          src={movie.srcFull}
        >
        </video>
      );

    }

    render() {
      const {movies, match} = this.props;
      const {duration, progress, isPlaying, leftTimeFormat} = this.state;

      return (
        <Component
          {...this.props}
          movies = {movies}
          match = {match}
          duration = {duration}
          progress = {progress}
          isPlaying = {isPlaying}
          leftTimeFormat = {leftTimeFormat}
          renderPLayOrPause = {this._handlePlayOrPause}
          renderFullScreen = {this._handleFullScreen}
          renderVideo = {this._renderVideo}

        />

      );
    }
  }

  WithDurationPlayer.propTypes = {
    movies: propTypes.arrayOf(DEFAULT_PROPTYPES.MOVIE_CARD),
    match: propTypes.object.isRequired,
  };

  const mapStateToProps = (state) => ({
    movies: getMovies(state),
  });

  return connect(mapStateToProps)(withRouter(WithDurationPlayer));
};

export default withDurationPlayer;
