import {Link} from "react-router-dom";
import React from 'react';
import propTypes from 'prop-types';

const LinkWrapper = ({link, children, isDisabled}) => {
  if (isDisabled) {
    return <>{children}</>;
  }
  return <Link to={link}>{children}</Link>;
};

LinkWrapper.propTypes = {
  link: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
  isDisabled: propTypes.bool.isRequired
};

export default LinkWrapper;
