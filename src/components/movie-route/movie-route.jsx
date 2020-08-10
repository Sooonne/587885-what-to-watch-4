import React from "react";
import propTypes from "prop-types";
import AddReview from "../add-review/add-review.jsx";
import {MoviePage} from "../movie-page/movie-page.jsx";
import {connect} from "react-redux";
import DEFAULT_PROPTYPES from "../../prop-type-units/prop-types-units.js";
import {withRouter, Redirect} from "react-router-dom";
import {getMovies} from "../../reducer/data/selector.js";
import {getAuthorizationStatus} from "../../reducer/user/selector.js";
import {getSubmitStatus} from "../../reducer/data/selector.js";
import {AuthorizationStatus, AppRoute, SubmitStatus} from "../../utils/const.js";
import Loading from "../loading/loading.jsx";
import withReview from "../../hocs/with-review.jsx";

const AddReviewWrapper = withReview(AddReview);

export const MovieRoute = ({movies, match: {params: {id}}, location: {pathname}, authStatus, submitStatus}) => {
  const movieCard = movies.find((m) => m.id === +id);
  if (!movieCard) {
    return (
      <Loading/>
    );
  }
  if (pathname.endsWith(`/review`)) {
    if (authStatus === AuthorizationStatus.AUTH) {
      if (submitStatus === SubmitStatus.SUCCESS) {
        return (
          <Redirect to={`${AppRoute.MOVIE}/${id}`}/>
        );
      }


      return (
        <AddReviewWrapper
          movieCard = {movieCard}
        />
      );
    }
    return (
      <Redirect to={AppRoute.LOGIN}/>
    );

  }
  return (
    <MoviePage
      movieCard = {movieCard}
      movies = {movies}
    />
  );
};

MovieRoute.propTypes = {
  authStatus: propTypes.string.isRequired,
  movies: propTypes.arrayOf(DEFAULT_PROPTYPES.MOVIE_CARD),
  location: propTypes.shape({
    pathname: propTypes.string.isRequired,
  }),
  match: propTypes.shape({
    params: propTypes.shape({
      id: propTypes.string.isRequired
    })
  }),
  submitStatus: propTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  movies: getMovies(state),
  authStatus: getAuthorizationStatus(state),
  submitStatus: getSubmitStatus(state)
});

export default connect(mapStateToProps)(withRouter(MovieRoute));

