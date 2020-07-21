import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {MOVIES} from "./mocks/movies.js";
import {PROMO_FILM} from "./mocks/promo-film.js";
import {COMMENTS} from "./mocks/comments.js";

// const ON_MOVIE_TITLE_CLICK = () => {};

ReactDOM.render(
    <App
      movieCard = {PROMO_FILM}
      movies = {MOVIES}
      reviews = {COMMENTS}
      // onMovieTitleClick = {ON_MOVIE_TITLE_CLICK}
    />,
    document.querySelector(`#root`)
);

