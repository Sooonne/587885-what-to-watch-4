import React from 'react';
import propTypes from "prop-types";

const ButtonMore = ({onButtonMoreClick}) => {
  return (
    <div className="catalog__more">
      <button className="catalog__button"
        type="button"
        onClick={onButtonMoreClick}>Show more</button>
    </div>
  );
};

ButtonMore.propTypes = {
  onButtonMoreClick: propTypes.func.isRequired
};

export default ButtonMore;
