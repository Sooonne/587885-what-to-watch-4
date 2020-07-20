import React from "react";
// import propTypes from "prop-types";
import DEFAULT_PROPTYPES from "../../prop-type-units/prop-types-units";

const Review = ({review}) => {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{review.user.name}</cite>
          <time className="review__date" dateTime="2015-11-18">{review.date.getMonth()} {review.date.getDate()} {review.date.getFullYear()}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating}</div>
    </div>
  );
};

Review.propTypes = {
  review: DEFAULT_PROPTYPES.REVIEW
};

export default Review;
