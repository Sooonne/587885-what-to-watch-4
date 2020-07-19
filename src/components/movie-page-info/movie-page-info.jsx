import React from "react";
import propTypes from "prop-types";

const MoviePageInfo = ({movieCard}) => {
  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{movieCard.ratingScore}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">Very good</span>
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
  movieCard: propTypes.shape({
    title: propTypes.string.isRequired,
    genre: propTypes.string.isRequired,
    release: propTypes.number.isRequired,
    bg: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    director: propTypes.string.isRequired,
    starring: propTypes.arrayOf(propTypes.string.isRequired).isRequired,
    ratingScore: propTypes.number.isRequired,
    ratingCount: propTypes.number.isRequired
  }).isRequired,
};

export default MoviePageInfo;
