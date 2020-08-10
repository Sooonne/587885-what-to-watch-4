import React from 'react';
import propTypes from 'prop-types';
import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';
import DEFAULT_PROPTYPES from "../../prop-type-units/prop-types-units.js";

export const MovieList = ({movies}) => {
  return (
    <React.Fragment>
      <div className="catalog__movies-list">
        {movies.map((movie) => {
          return (
            <SmallMovieCard
              key = {movie.id}
              movie = {movie}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
};

MovieList.propTypes = {
  movies: propTypes.arrayOf(DEFAULT_PROPTYPES.MOVIE_CARD),
};

export default MovieList;
