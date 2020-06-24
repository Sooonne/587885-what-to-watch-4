import React from "react";
import renderer from "react-test-renderer";
import MovieList from "./movie-list.jsx";
import {MOVIES} from '../../mocks/movies';

const onMovieTitleClick = () => {};

it(`Should MovieList render Correctly`, () => {
  const tree = renderer
  .create(<MovieList
    movies = {MOVIES}
    onMovieTitleClick = {onMovieTitleClick}
  />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
