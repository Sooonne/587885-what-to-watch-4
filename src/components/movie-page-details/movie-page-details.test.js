import React from "react";
import renderer from "react-test-renderer";
import {MOVIE} from "../../data-for-tests/data-for-tests.js";
import MoviePageDetails from "./movie-page-details.jsx";

it(`Should MoviePage render correctly`, () => {
  const tree = renderer
    .create(<MoviePageDetails
      movieCard = {MOVIE}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
