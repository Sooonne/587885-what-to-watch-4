import React from "react";
import ReactDOM from "react-dom";
import {App} from "./components/app/app.jsx";
import {MOVIES} from "./mocks/movies.js";
import {PROMO_FILM} from "./mocks/promo-film.js";
import {COMMENTS} from "./mocks/comments.js";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./reducer.js";

// const ON_MOVIE_TITLE_CLICK = () => {};
const root = document.querySelector(`#root`);
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store = {store}>
      <App
        movieCard = {PROMO_FILM}
        movies = {MOVIES}
        reviews = {COMMENTS}
      />
    </Provider>, root

);


