import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import {MOVIES} from '../../mocks/movies';
import {PROMO_FILM} from '../../mocks/promo-film';

const onMovieTitleClick = () => {};

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      promoInfo = {PROMO_FILM}
      movies = {MOVIES}
      onMovieTitleClick = {onMovieTitleClick}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
