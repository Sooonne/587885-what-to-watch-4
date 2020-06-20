import React from "react";
import propTypes, { string } from "prop-types";
import Main from "../main/main.jsx";


const App = ({promoInfo, movieTitles}) => {
  // const {promoTitle, promoGenre, promoRelease, movieTitles} = props;
  return (
    <Main
      promoInfo = {promoInfo}
      movieTitles = {movieTitles}

    />
  );
};

App.propTypes = {
  promoInfo: propTypes.object.isRequired,
  movieTitles: propTypes.arrayOf(propTypes.string).isRequired
}


export default App;
