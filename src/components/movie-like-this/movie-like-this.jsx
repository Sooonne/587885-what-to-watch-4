import React from "react";
import propTypes from "prop-types";
import {MovieList} from "../movie-list/movie-list.jsx";
import DEFAULT_PROPTYPES from "../../prop-type-units/prop-types-units.js";
import {getSimilarFilmsByGenre} from "../../utils/const.js";

const MovieLikeThis = ({movieCard, movies}) => {

  return (
    <React.Fragment>
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>
        <MovieList
          movies = {getSimilarFilmsByGenre(movies, movieCard)}
        />
      </section>
    </React.Fragment>
  );
};

MovieLikeThis.propTypes = {
  movieCard: DEFAULT_PROPTYPES.MOVIE_CARD,
  movies: propTypes.arrayOf(DEFAULT_PROPTYPES.MOVIE_CARD),
};

export default MovieLikeThis;
