import React from "react";
// import Main from "../components/main/main";
import Main from "../main/main.jsx";


const App = (props) => {
  const {promoTitle, promoGenre, promoRelease} = props;
  return (
    <Main
      promoTitle = {promoTitle}
      promoGenre = {promoGenre}
      promoRelease= {promoRelease}
    />
  );
};


export default App;
