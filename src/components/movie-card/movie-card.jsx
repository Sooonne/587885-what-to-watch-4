import React from 'react';
import propTypes from "prop-types";

const MovieCard = ({movie, onMovieClick, onMovieCardHover}) => {
  const handleMovieClick = (evt) => {
    evt.preventDefault();
    onMovieClick(movie);
  };

  return (
    <article className="small-movie-card catalog__movies-card" onMouseOver={onMovieCardHover} onClick={handleMovieClick}>
      <div className="small-movie-card__image">
        {/* Сюда идет видос
        <img src={movie.img} alt={movie.title} width="280" height="175" />*/}
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{movie.title}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  movie: propTypes.shape({
    title: propTypes.string.isRequired,
    genre: propTypes.string.isRequired,
    release: propTypes.number.isRequired,
    bg: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    director: propTypes.string.isRequired,
    starring: propTypes.arrayOf(propTypes.string.isRequired).isRequired,
    ratingScore: propTypes.number.isRequired,
    ratingCount: propTypes.number.isRequired,
    src: propTypes.string.isRequired
  }),
  onMovieClick: propTypes.func.isRequired,
  onMovieCardHover: propTypes.func.isRequired,
};

export default MovieCard;
