import React from "react";
import propTypes from "prop-types";
import Review from "../review/review";
import DEFAULT_PROPTYPES from "../../prop-type-units/prop-types-units.jsx";

const splitArray = (array, firstSlice, lastSlice) => {
  return array.slice(firstSlice, lastSlice);
};

const MoviePageReviews = ({comments}) => {
  return (
    <React.Fragment>
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">

          {splitArray(comments, 0, Math.round(comments.length / 2)).map((comment, index) => {
            return (
              <Review
                key = {comments.id + index}
                review = {comment}
              />
            );
          })}

          <div className="movie-card__reviews-col">

            {splitArray(comments, Math.round(comments.length / 2 + 1), comments.length).map((comment, index) => {
              return (
                <Review
                  key = {comments.id + index}
                  review = {comment}
                />
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

MoviePageReviews.propTypes = {
  comments: propTypes.arrayOf(DEFAULT_PROPTYPES.REVIEW).isRequired
};

export default MoviePageReviews;

