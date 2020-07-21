import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {PROMO_FILM, MOVIES} from "../../data-for-tests/data-for-tests";

const onMovieClick = () => {};


it(`Should Main render correctly`, () => {
  const tree = renderer
    .create(<Main
      promoInfo = {PROMO_FILM}
      movies = {MOVIES}
      onMovieClick = {onMovieClick}
    />,
    {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
