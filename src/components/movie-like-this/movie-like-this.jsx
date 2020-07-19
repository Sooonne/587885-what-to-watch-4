import React from "react";
import propTypes from "prop-types";
import MovieList from "../movie-list/movie-list.jsx";

const MAX_AMOUNT = 4;

// eslint-disable-next-line no-unused-vars
function compareRandom(a, b) {
  return Math.random() - 0.5;
}

const getSimilarFilmsByGenre = (allMovies, currentMovie) => {
  let filteredMovies = allMovies.filter((it) => {
    return it.genre === currentMovie.genre && it !== currentMovie;
  });
  filteredMovies.sort(compareRandom);
  filteredMovies.slice(0, MAX_AMOUNT);

  return filteredMovies;
};

const MovieLikeThis = ({movieCard, movies, onMovieClick}) => {

  return (
    <React.Fragment>
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>
        <MovieList
          movies = {getSimilarFilmsByGenre(movies, movieCard)}
          onMovieClick = {onMovieClick}
        />
      </section>
    </React.Fragment>
  );
};

MovieLikeThis.propTypes = {
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
  movies: propTypes.arrayOf(propTypes.shape({
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
  })),
  onMovieClick: propTypes.func.isRequired
};

export default MovieLikeThis;
