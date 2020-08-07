import React from "react";
import DEFAULT_PROPTYPES from "../../prop-type-units/prop-types-units.js";

const Review = ({review}) => {
  return (
    <React.Fragment>
      <div className="review">
        <blockquote className="review__quote">
          <p className="review__text">{review.comment}</p>

          <footer className="review__details">
            <cite className="review__author">{review.user.name}</cite>
            <time className="review__date" dateTime="2015-11-18">{new Date(review.date).getMonth()}</time>
          </footer>
        </blockquote>

        <div className="review__rating">{review.rating}</div>
      </div>
    </React.Fragment>
  );
};

Review.propTypes = {
  review: DEFAULT_PROPTYPES.REVIEW
};

export default Review;
