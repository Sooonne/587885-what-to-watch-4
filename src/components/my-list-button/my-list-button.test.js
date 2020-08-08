import React from "react";
import renderer from "react-test-renderer";
import {PROMO_FILM, MOVIES, MOVIE} from "../../data-for-tests/data-for-tests";
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';
import NameSpace from '../../reducer/name-space.js';
import {AuthorizationStatus} from "../../utils/const.js";

import {createMemoryHistory} from 'history';
import MyListButton from "./my-list-button";

const history = createMemoryHistory();
const mockStore = configureStore([]);

const store = mockStore({
  [NameSpace.DATA]: {
    movieCard: PROMO_FILM,
    movies: MOVIES
  },
  [NameSpace.APP]: {
    filteredMovies: MOVIES,
    genres: [`All genres`],
    activeGenre: `All genres`,
    showedMoviesAmount: 8,
  },
  [NameSpace.USER]: {
    authorizationStatus: AuthorizationStatus.AUTH,
    userInfo: {
      id: 1,
      email: `1@1.ru`,
      name: `Yo`,
      avatarUrl: `/pic1.jpg`
    },
  }
});

it(`Should MyListButton render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <Router>
            <MyListButton
              authStatus = {AuthorizationStatus.AUTH}
              movie = {MOVIE}
              changeMovieFavoriteStatus = {() => {}}
              history = {history}
            />
          </Router>
        </Provider>,
        {
          createNodeMock: () => {
            return {};
          }
        })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
