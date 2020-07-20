import React from "react";
import propTypes from "prop-types";
import Review from "../review/review";

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
  comments: propTypes.shape([{
    id: propTypes.number.isRequired,
    user: propTypes.shape({
      id: propTypes.number.isRequired,
      name: propTypes.string.isRequired
    }),
    rating: propTypes.number.isRequired,
    comment: propTypes.string.isRequired,
    date: propTypes.string.isRequired
  }]).isRequired
};

export default MoviePageReviews;

