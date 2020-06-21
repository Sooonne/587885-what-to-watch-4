import React from "react";
import propTypes from "prop-types";
import Main from "../main/main.jsx";

// const onMovieTitleClick = () => {};

const App = ({promoInfo, movieTitles, onMovieTitleClick}) => {
  // const {promoTitle, promoGenre, promoRelease, movieTitles} = props;
  return (
    <Main
      promoInfo = {promoInfo}
      movieTitles = {movieTitles}
      onMovieTitleClick = {onMovieTitleClick}
    />
  );
};

App.propTypes = {
  promoInfo: propTypes.object.isRequired,
  movieTitles: propTypes.arrayOf(propTypes.string).isRequired,
  onMovieTitleClick: propTypes.func.isRequired
};

export default App;
