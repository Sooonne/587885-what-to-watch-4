import React from "react";
import propTypes, { string } from "prop-types";
import Main from "../main/main.jsx";


const App = ({promoTitle, promoGenre, promoRelease, movieTitles}) => {
  // const {promoTitle, promoGenre, promoRelease, movieTitles} = props;
  return (
    <Main
      promoTitle = {promoTitle}
      promoGenre = {promoGenre}
      promoRelease= {promoRelease}
      movieTitles = {movieTitles}

    />
  );
};

App.propTypes = {
  promoTitle: string.isRequired,
  promoGenre: string.isRequired,
  promoRelease: string.isRequired,
  movieTitles: propTypes.arrayOf(propTypes.string).isRequired
}


export default App;
