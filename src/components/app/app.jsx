import React from "react";
import propTypes from "prop-types";
import Main from "../main/main.jsx";

// const onMovieTitleClick = () => {};

const App = ({promoInfo, movies, onMovieTitleClick}) => {
  // const {promoTitle, promoGenre, promoRelease, movieTitles} = props;
  return (
    <Main
      promoInfo = {promoInfo}
      movies = {movies}
      onMovieTitleClick = {onMovieTitleClick}
    />
  );
};

App.propTypes = {
  promoInfo: propTypes.object.isRequired,
  movies: propTypes.arrayOf(propTypes.shape({title: propTypes.string, img: propTypes.string})),
  onMovieTitleClick: propTypes.func.isRequired
};

export default App;
