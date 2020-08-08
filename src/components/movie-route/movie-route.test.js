import React from "react";
import renderer from "react-test-renderer";
import {PROMO_FILM, MOVIES} from "../../data-for-tests/data-for-tests";
import {MovieRoute} from "./movie-route";
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';
import NameSpace from '../../reducer/name-space.js';
import {AuthorizationStatus} from "../../utils/const.js";

import {createMemoryHistory} from 'history';

const history = createMemoryHistory();
const location = {pathname: `/movie/1`};

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

it(`Should MOvieRoute render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <Router>
            <MovieRoute
              authStatus= {AuthorizationStatus.AUTH}
              movies = {MOVIES}
              history = {history}
              match = {{params: {id: 1}}}
              location = {location}
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
