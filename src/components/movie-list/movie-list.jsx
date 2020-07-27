import React, {PureComponent} from 'react';
import propTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card.jsx';
import DEFAULT_PROPTYPES from "../../prop-type-units/prop-types-units.js";
// import {Link} from 'react-router-dom';
// import {NavLink} from 'react-router-dom';

export class MovieList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeMovie: undefined,
    };

    this._handlerMovieCardFocus = this._handlerMovieCardFocus.bind(this);
  }

  _handlerMovieCardFocus(movie) {
    this.setState({activeMovie: movie});
  }

  render() {
    const {movies} = this.props;
    // console.log(movies);
    return (
      <React.Fragment>
        <div className="catalog__movies-list">
          {movies.map((movie) => {
            return (
              <MovieCard
                key = {movie.id}
                movie = {movie}
                // onMovieClick = {onMovieClick}
                onMovieCardHover = { () => {
                  this.setState({movie});
                }}
              />
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}


MovieList.propTypes = {
  movies: propTypes.arrayOf(DEFAULT_PROPTYPES.MOVIE_CARD),
  // onMovieClick: propTypes.func.isRequired
};

export default MovieList;
