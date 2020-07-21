import React from "react";
import renderer from "react-test-renderer";
import {MOVIE} from "../../data-for-tests/data-for-tests.js";
import MoviePageInfo from "./movie-page-info.jsx";

it(`Should MoviePageInfo render correctly`, () => {
  const tree = renderer
    .create(<MoviePageInfo
      movieCard = {MOVIE}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
