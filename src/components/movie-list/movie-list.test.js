import React from "react";
import renderer from "react-test-renderer";
import MovieList from "./movie-list.jsx";
import {MOVIES} from "../../data-for-tests/data-for-tests.js";

it(`Should MovieList render Correctly`, () => {
  const tree = renderer
  .create(<MovieList
    movies = {MOVIES}
    onMovieClick = {() => {}}
  />,
  {
    createNodeMock: () => {
      return {};
    }
  }
  )
  .toJSON();

  expect(tree).toMatchSnapshot();
});
