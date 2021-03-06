import React from "react";
import DEFAULT_PROPTYPES from "../../prop-type-units/prop-types-units.js";
import {getMovieTimeFormat} from "../../utils/const.js";

const MoviePageDetails = ({movieCard}) => {
  return (
    <React.Fragment>
      <div className="movie-card__text movie-card__row">
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Director</strong>
            <span className="movie-card__details-value">{movieCard.director}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Starring</strong>
            <span className="movie-card__details-value">
              {movieCard.starring.join(`\n`)}
            </span>
          </p>
        </div>

        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Run Time</strong>
            <span className="movie-card__details-value">{getMovieTimeFormat(movieCard.runTime)}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Genre</strong>
            <span className="movie-card__details-value">{movieCard.genre}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Released</strong>
            <span className="movie-card__details-value">{movieCard.release}</span>
          </p>
        </div>
      </div>

    </React.Fragment>
  );
};

MoviePageDetails.propTypes = {
  movieCard: DEFAULT_PROPTYPES.MOVIE_CARD
};

export default MoviePageDetails;

