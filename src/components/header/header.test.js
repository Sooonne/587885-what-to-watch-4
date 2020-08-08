import React from "react";
import renderer from "react-test-renderer";
import Header from "./header.jsx";
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';
import NameSpace from '../../reducer/name-space.js';
import {AuthorizationStatus} from "../../utils/const.js";
import {PROMO_FILM, MOVIES} from "../../data-for-tests/data-for-tests";
import {BrowserRouter as Router} from 'react-router-dom';

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

it(`render Footer`, () => {
  const tree = renderer
  .create(
      <Provider store={store}>
        <Router>
          <Header/>
        </Router>
      </Provider>)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
