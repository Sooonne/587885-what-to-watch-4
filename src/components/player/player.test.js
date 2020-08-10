import React from "react";
import renderer from "react-test-renderer";
import Player from "./player.jsx";
import {MOVIES, PROMO_FILM} from "../../data-for-tests/data-for-tests.js";
import {BrowserRouter as Router} from "react-router-dom";

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

window.HTMLMediaElement.prototype.load = () => { /* do nothing */ };
window.HTMLMediaElement.prototype.play = () => { /* do nothing */ };


describe(`Player`, () => {
  it(`Player should render correctly`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router>
              <Player
                match = {{params: {id: 1}}}
                movies = {MOVIES}
                duration = {100}
                progress = {10}
                leftTimeFormat = {`0:10:10`}
                renderPLayOrPause = {() => {}}
                renderFullScreen = {() => {}}
                renderVideo = {() => {}}
              />
            </Router>
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
