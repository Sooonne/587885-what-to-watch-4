import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";


const PromoDefault = {
  TITLE: `Star Wars`,
  GENRE: `Drama`,
  RELEASE: 2017,
};

const ON_MOVIE_TITLE_CLICK = () => {};

const MOVIE_TITLES = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

ReactDOM.render(
    <App
      promoInfo = {PromoDefault}
      movieTitles = {MOVIE_TITLES}
      onMovieTitleClick = {ON_MOVIE_TITLE_CLICK}
    />,
    document.querySelector(`#root`)
);

