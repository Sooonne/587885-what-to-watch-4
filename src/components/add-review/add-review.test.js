import React from "react";
import renderer from "react-test-renderer";
import AddReview from "./add-review.jsx";
import configureStore from "redux-mock-store";
import {PROMO_FILM, MOVIES} from "../../data-for-tests/data-for-tests";
import {Provider} from "react-redux";
import NameSpace from '../../reducer/name-space';
import {AuthorizationStatus} from "../../utils/const.js";
import {BrowserRouter as Router} from 'react-router-dom';

const mockStore = configureStore([]);

const store = mockStore({
  [NameSpace.DATA]: {
    movieCard: PROMO_FILM,
    movies: MOVIES,
    submitStatus: `Default`,
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

it(`Render App`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <Router>
            <AddReview
              movieCard = {PROMO_FILM}
              submitStatus = {`Default`}
              onSubmitClick = {() => {}}
              onRatingChange = {() => {}}
              onReviewChange = {() => {}}
              isSubmitDisabled = {true}
            />
          </Router>
        </Provider>
        , {
          createNodeMock: () => {
            return {};
          }
        })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
