import React from "react";
import DEFAULT_PROPTYPES from "../../prop-type-units/prop-types-units.js";
import {getRating} from "../../utils/const.js";

const MoviePageInfo = ({movieCard}) => {
  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{movieCard.ratingScore}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getRating(movieCard.ratingScore)}</span>
          <span className="movie-rating__count">{movieCard.ratingCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        {movieCard.description}

        <p className="movie-card__director"><strong>{movieCard.director}</strong></p>

        <p className="movie-card__starring"><strong>{movieCard.starring.join(`, `)} and other</strong></p>
      </div>
    </React.Fragment>
  );
};

MoviePageInfo.propTypes = {
  movieCard: DEFAULT_PROPTYPES.MOVIE_CARD
};

export default MoviePageInfo;
