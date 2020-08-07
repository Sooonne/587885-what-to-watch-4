import {Link} from "react-router-dom";
import React from 'react';
import propTypes from 'prop-types';
import {Operation as DataOperation} from "../../reducer/data/data.js";

const LinkWrapper = ({link, children, isDisabled, id, score, text}) => {
  if (isDisabled) {
    return <>{children}</>;
  }
  const review = {
    ratingScore: score,
    text
  };
  DataOperation.sendReview(id, review);
  return <Link to={link}>{children}</Link>;
};

LinkWrapper.propTypes = {
  link: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
  isDisabled: propTypes.bool.isRequired,
  id: propTypes.number.isRequired,
  score: propTypes.number.isRequired,
  text: propTypes.string.isRequired
};

export default LinkWrapper;
