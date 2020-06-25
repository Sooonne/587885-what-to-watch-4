import React from 'react';
import propTypes from "prop-types";

const MovieCard = ({movie, onMovieTitleClick, onMovieCardHover}) => {

  return (
    <article className="small-movie-card catalog__movies-card" onMouseOver={onMovieCardHover}>
      <div className="small-movie-card__image">
        <img src={movie.img} alt={movie.title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html" onMovieTitleClick={onMovieTitleClick}>{movie.title}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  movie: propTypes.shape({title: propTypes.string, img: propTypes.string}),
  onMovieTitleClick: propTypes.func.isRequired,
  onMovieCardHover: propTypes.func.isRequired,
};

export default MovieCard;
