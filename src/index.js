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
import {Operation as UserOperation, ActionCreator} from "./reducer/user/user.js";
import {AuthorizationStatus} from "./utils/const.js";

const root = document.querySelector(`#root`);
// const api = createAPI(() => {});

const onUnauthorized = () => {
  store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
};

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(api))
);

store.dispatch(DataOperation.loadMovies());
store.dispatch(DataOperation.loadMovieReviews());
store.dispatch(DataOperation.loadMovieCard());
store.dispatch(UserOperation.checkAuth());

ReactDOM.render(
    <Provider store = {store}>
      <App
      />
    </Provider>, root

);


