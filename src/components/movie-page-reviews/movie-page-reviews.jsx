import React, {PureComponent} from "react";
import propTypes from "prop-types";
import Review from "../review/review.jsx";
import DEFAULT_PROPTYPES from "../../prop-type-units/prop-types-units.js";
import {Operation as DataOperation} from '../../reducer/data/data.js';
import {getReviewes} from "../../reducer/data/selector.js";
import {connect} from "react-redux";
import {splitArray} from "../../utils/const.js";

export class MoviePageReviews extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {loadMovieReviewes, movieCard: {id}} = this.props;
    loadMovieReviewes(id);
  }

  render() {
    const {comments} = this.props;
    return (
      <React.Fragment>
        <div className="movie-card__reviews movie-card__row">
          <div className="movie-card__reviews-col">

            {splitArray(comments, 0, Math.round(comments.length / 2)).map((comment) => {
              return (
                <Review
                  key = {comment.id}
                  review = {comment}
                />
              );
            })}
          </div>

          <div className="movie-card__reviews-col">

            {splitArray(comments, Math.round(comments.length / 2 + 1), comments.length).map((comment) => {
              return (
                <Review
                  key = {comment.id}
                  review = {comment}
                />
              );
            })}

          </div>
        </div>
      </React.Fragment>
    );
  }
}

MoviePageReviews.propTypes = {
  comments: propTypes.arrayOf(DEFAULT_PROPTYPES.REVIEW).isRequired,
  movieCard: DEFAULT_PROPTYPES.MOVIE_CARD,
  loadMovieReviewes: propTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  comments: getReviewes(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadMovieReviewes(movieId) {
    dispatch(DataOperation.loadMovieReviewes(movieId));
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(MoviePageReviews);

