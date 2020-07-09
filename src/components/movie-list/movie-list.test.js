import React from "react";
import renderer from "react-test-renderer";
import MovieList from "./movie-list.jsx";
import {MOVIES} from '../../mocks/movies';

const onMovieClick = () => {};

it(`Should MovieList render Correctly`, () => {
  const tree = renderer
  .create(<MovieList
    movies = {MOVIES}
    onMovieClick = {onMovieClick}
  />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
