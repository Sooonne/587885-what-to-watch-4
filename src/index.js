import React from "react";
import ReactDOM from "react-dom";
import {App} from "./components/app/app.jsx";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {createAPI} from "./api.js";
import reducer from "./reducer/reducer.js";
import thunk from "redux-thunk";
import {Operation as DataOperation} from "./reducer/data/data.js";
// import {Operation as DataOperation} from "./reducer/data/data.js";
// import {Operation as UserOperation, ActionCreator, AuthorizationStatus} from "./reducer/user/user.js";

// const ON_MOVIE_TITLE_CLICK = () => {};
const root = document.querySelector(`#root`);
const api = createAPI(() => {});

const store = createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(api))
);

store.dispatch(DataOperation.loadMovies());
store.dispatch(DataOperation.loadMovieReviews());
store.dispatch(DataOperation.loadMovieCard());

ReactDOM.render(
    <Provider store = {store}>
      <App
        // movieCard = {MOVIE_CARD}
        // movies = {MOVIES}
        // reviews = {COMMENTS}
      />
    </Provider>, root

);


