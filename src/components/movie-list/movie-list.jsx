import React, {PureComponent} from 'react';
import propTypes from 'prop-types';
import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';
import DEFAULT_PROPTYPES from "../../prop-type-units/prop-types-units.js";

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
    return (
      <React.Fragment>
        <div className="catalog__movies-list">
          {movies.map((movie) => {
            return (
              <SmallMovieCard
                key = {movie.id}
                movie = {movie}
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
};

export default MovieList;
