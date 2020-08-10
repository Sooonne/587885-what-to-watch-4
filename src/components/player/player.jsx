import React from "react";
import propTypes from "prop-types";
import DEFAULT_PROPTYPES from "../../prop-type-units/prop-types-units.js";
import {Link} from "react-router-dom";
import Loading from "../loading/loading.jsx";

export const Player = ({movies,
  match: {params: {id}}, duration, progress,
  leftTimeFormat,
  renderPLayOrPause,
  renderFullScreen,
  renderVideo}) => {
  const movie = movies.find((m) => m.id === +id);
  if (!movie) {
    return (
      <Loading/>
    );
  }
  return (
    <React.Fragment>
      <div className="player">
        {renderVideo(movie)}
        <Link className="player__exit" to={`/films/${movie.id}`}>Exit</Link>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value={progress} max={duration}></progress>
              <div className="player__toggler" style={{left: `${((progress / duration) * 100)}%`}}>Toggler</div>
            </div>
            <div className="player__time-value">{leftTimeFormat}</div>
          </div>

          <div className="player__controls-row">
            <button type="button" className="player__play" onClick={renderPLayOrPause}>
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#pause"></use>
              </svg>
              <span>Play</span>
            </button>
            <div className="player__name">{movie.title}</div>

            <button type="button" className="player__full-screen" onClick={renderFullScreen}>
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

};


Player.propTypes = {
  movies: propTypes.arrayOf(DEFAULT_PROPTYPES.MOVIE_CARD),
  match: propTypes.shape({
    params: propTypes.shape({
      id: propTypes.string.isRequired
    })
  }),
  duration: propTypes.number.isRequired,
  progress: propTypes.number.isRequired,
  leftTimeFormat: propTypes.string.isRequired,
  renderPLayOrPause: propTypes.func.isRequired,
  renderFullScreen: propTypes.func.isRequired,
  renderVideo: propTypes.func.isRequired
};

export default Player;
