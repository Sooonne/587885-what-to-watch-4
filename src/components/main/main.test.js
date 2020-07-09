import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {MOVIES} from '../../mocks/movies';
import {PROMO_FILM} from '../../mocks/promo-film';

const onMovieClick = () => {};


it(`Should Main render correctly`, () => {
  const tree = renderer
    .create(<Main
      promoInfo = {PROMO_FILM}
      movies = {MOVIES}
      onMovieClick = {onMovieClick}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
