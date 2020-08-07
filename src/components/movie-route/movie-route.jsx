import React, {PureComponent} from "react";
import propTypes from "prop-types";
import {AddReview} from "../add-review/add-review.jsx";
import {MoviePage} from "../movie-page/movie-page.jsx";
import {connect} from "react-redux";
import DEFAULT_PROPTYPES from "../../prop-type-units/prop-types-units.js";
import {withRouter} from "react-router-dom";
import {getMovies} from "../../reducer/data/selector.js";
import {getAuthorizationStatus} from "../../reducer/user/selector.js";
import {SignIn} from "../sign-in/sign-in.jsx";
import {AuthorizationStatus} from "../../utils/const.js";

export class MovieRoute extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {movies, match: {params: {id}}, location: {pathname}, authStatus} = this.props;
    const movieCard = movies.find((m) => m.id === +id);
    if (!movieCard) {
      return (
        <div>loading!</div>
      );
    }
    if (pathname.endsWith(`/review`)) {
      if (authStatus === AuthorizationStatus.AUTH) {
        return (
          <AddReview
            movieCard = {movieCard}
          />
        );
      }
      return (
        <SignIn/>
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
  authStatus: propTypes.string.isRequired,
  movies: propTypes.arrayOf(DEFAULT_PROPTYPES.MOVIE_CARD),
  match: propTypes.object.isRequired,
  history: propTypes.object.isRequired,
  location: propTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  movies: getMovies(state),
  authStatus: getAuthorizationStatus(state),
});

export default connect(mapStateToProps)(withRouter(MovieRoute));
