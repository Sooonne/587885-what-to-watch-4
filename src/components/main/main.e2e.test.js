import React from "react";
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from "./main.jsx";
import {PROMO_FILM, MOVIES} from "../../data-for-tests/data-for-tests";
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';
import NameSpace from '../../reducer/name-space.js';
import {AuthorizationStatus} from "../../utils/const.js";

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

const onMovieClick = jest.fn();

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should make Click on img for each movie card`, () => {
  const main = shallow(
      <Provider store={store}>
        <Router>
          <Main
            genres = {[`All genres`]}
            activeGenre = {`All genres`}
            onGenreClick = {() => {}}
            onButtonMoreClick = {() => {}}
          />
        </Router>
      </Provider>
  );
  const movieTitles = main.find(`small-movie-card__title`);

  movieTitles.forEach((title) => {
    title.simulate(`click`);
    expect(onMovieClick).toHaveBeenCalledTimes(1);
  });
});

it(`Should make Click on title for each movie card`, () => {
  const main = shallow(
      <Provider store={store}>
        <Router>
          <Main
            genres = {[`All genres`]}
            activeGenre = {`All genres`}
            onGenreClick = {() => {}}
            onButtonMoreClick = {() => {}}
          />
        </Router>
      </Provider>
  );
  const movieImgs = main.find(`small-movie-card__image`);

  movieImgs.forEach((movie) => {
    movie.simulate(`click`);
    expect(onMovieClick).toHaveBeenCalledTimes(1);
  });
});
