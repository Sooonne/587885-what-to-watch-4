import React, {PureComponent} from "react";
import propTypes from "prop-types";
import {AddReview} from "../add-review/add-review.jsx";
import {MoviePage} from "../movie-page/movie-page.jsx";
import {connect} from "react-redux";
import DEFAULT_PROPTYPES from "../../prop-type-units/prop-types-units.js";
import {withRouter} from "react-router-dom";
import {getMovies} from "../../reducer/data/selector.js";

export class MovieRoute extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {movies, match: {params: {id}}, location: {pathname}} = this.props;
    const movieCard = movies.find((m) => m.id === +id);
    if (!movieCard) {
      return (
        <div>loading!</div>
      );
    }
    if (pathname.endsWith(`/review`)) {
      return (
        <AddReview
          movieCard = {movieCard}
        />
      );
    }
    return (
      <MoviePage
        movieCard = {movieCard}
        movies = {movies}
      />
    );
  }
}

MovieRoute.propTypes = {
  movies: propTypes.arrayOf(DEFAULT_PROPTYPES.MOVIE_CARD),
  match: propTypes.object.isRequired,
  history: propTypes.object.isRequired,
  location: propTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  movies: getMovies(state),
});

export default connect(mapStateToProps)(withRouter(MovieRoute));

