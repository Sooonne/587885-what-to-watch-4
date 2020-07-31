import React, {PureComponent, createRef} from "react";
import propTypes from "prop-types";
// import VideoPlayerFullScreen from "../video-player-full-screen/video-player-full-screen.jsx";
import DEFAULT_PROPTYPES from "../../prop-type-units/prop-types-units.js";
import {withRouter} from 'react-router-dom/cjs/react-router-dom.min';
import {connect} from "react-redux";
import {Link} from "react-router-dom";

export class Player extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();

    this.state = {
      duration: 0,
      progress: 0,
      isPlaying: true,
    };

    this._handlePlayOrPause = this._handlePlayOrPause.bind(this);
    this._handleFullScreen = this._handleFullScreen.bind(this);
  }

  componentDidMount() {
    const video = this._videoRef.current;
    if (video) {
      video.play();

      video.onloadedmetadata = () => this.setState({
        duration: video.duration,
      });

      video.ontimeupdate = () => this.setState({
        progress: Math.trunc(video.progress)
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

  render() {
    const {movies, match: {params: {id}}} = this.props;
    const movie = movies.find((m) => m.id === +id);
    // console.log(movie);
    // debugger;
    return (
      <div className="player">
        <video
          ref={this._videoRef}
          className="player__video"
          poster={movie.poster}
          src={movie.srcFull}
        >
        </video>
        <Link className="player__exit" to={`/movie/${movie.id}`}></Link>
        <button type="button" className="player__exit">Exit</button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value={this.state.progress} max={this.state.duration}></progress>
              <div className="player__toggler" style={{left: `${((this.state.progress / this.state.duration) * 100)}%`}}>Toggler</div>
            </div>
            <div className="player__time-value">{this.state.progress}</div>
          </div>

          <div className="player__controls-row">
            <button type="button" className="player__play">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <div className="player__name">{movie.title}</div>

            <button type="button" className="player__full-screen" onClick={this._handleFullScreenButtonClick}>
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}


Player.propTypes = {
  movies: propTypes.arrayOf(DEFAULT_PROPTYPES.MOVIE_CARD),
  match: propTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  movies: state.movies,
});

export default connect(mapStateToProps)(withRouter(Player));
