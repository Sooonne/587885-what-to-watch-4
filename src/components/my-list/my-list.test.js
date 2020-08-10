import React from "react";
import renderer from "react-test-renderer";
import {MOVIES, PROMO_FILM} from "../../data-for-tests/data-for-tests";
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';
import NameSpace from '../../reducer/name-space.js';
import {AuthorizationStatus} from "../../utils/const.js";
import {BrowserRouter as Router} from 'react-router-dom';
import {MyList} from "./my-list.jsx";

const mockStore = configureStore([]);

const store = mockStore({
  [NameSpace.DATA]: {
    movieCard: PROMO_FILM,
    movies: MOVIES,
    favoriteMovies: MOVIES
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

it(`render MyList`, () => {
  const tree = renderer
  .create(
      <Provider store={store}>
        <Router>
          <MyList
            loadMyMovies = {() => {}}
            userInfo = {{
              id: 1,
              email: `1@1.ru`,
              name: `Yo`,
              avatarUrl: `/pic1.jpg`
            }}
            favoriteMovies = {MOVIES}
            authStatus={AuthorizationStatus.AUTH}

          />
        </Router>
      </Provider>
  )
  .toJSON();

  expect(tree).toMatchSnapshot();
});
