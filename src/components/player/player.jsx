import React, {PureComponent, createRef} from "react";
import propTypes from "prop-types";
// import VideoPlayerFullScreen from "../video-player-full-screen/video-player-full-screen.jsx";
import DEFAULT_PROPTYPES from "../../prop-type-units/prop-types-units.js";
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {getMovies} from "../../reducer/data/selector.js";
import {countLeftTimeformat} from "../../utils/const.js";

export class Player extends PureComponent {
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

  // _countLeftTimeformat(progress, duration) {
  //   // const leftTime = this.state.duration - this.state.progress;
  //   const leftTime = duration - progress;

  //   const minutes = Math.trunc(leftTime / SEC_IN_MIN);
  //   const seconds = Math.trunc(leftTime % SEC_IN_MIN);
  //   const hours = Math.trunc(minutes / SEC_IN_MIN);
  //   return `${hours}:${minutes}:${seconds}`;
  // }

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
    const {movies, match: {params: {id}}} = this.props;
    const movie = movies.find((m) => m.id === +id);
    if (!movie) {
      return (
        <div>loading!</div>
      );
    }

    return (
      <React.Fragment>
        <div className="player">
          {this._renderVideo(movie)}
          <Link className="player__exit" to={`/movie/${movie.id}`}>Exit</Link>

          <div className="player__controls">
            <div className="player__controls-row">
              <div className="player__time">
                <progress className="player__progress" value={this.state.progress} max={this.state.duration}></progress>
                <div className="player__toggler" style={{left: `${((this.state.progress / this.state.duration) * 100)}%`}}>Toggler</div>
              </div>
              <div className="player__time-value">{this.state.leftTimeFormat}</div>
            </div>

            <div className="player__controls-row">
              <button type="button" className="player__play" onClick={this._handlePlayOrPause}>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#pause"></use>
                </svg>
                <span>Play</span>
              </button>
              <div className="player__name">{movie.title}</div>

              <button type="button" className="player__full-screen" onClick={this._handleFullScreen}>
                <svg viewBox="0 0 27 27" width="27" height="27">
                  <use xlinkHref="#full-screen"></use>
                </svg>
                <span>Full screen</span>
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}


Player.propTypes = {
  movies: propTypes.arrayOf(DEFAULT_PROPTYPES.MOVIE_CARD),
  match: propTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  movies: getMovies(state),
});

export default connect(mapStateToProps)(withRouter(Player));
