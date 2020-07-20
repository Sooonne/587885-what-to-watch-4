import React from "react";
import renderer from "react-test-renderer";
import MovieLikeThis from "./movie-like-this.test.js";
import {MOVIE, MOVIES} from "../../data-for-tests/data-for-tests.js";

it(`Should MovieLikeThis render correctly`, () => {
  const tree = renderer
    .create(<MovieLikeThis
      movieCard = {MOVIE}
      movies = {MOVIES}
      onMovieClick = {() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
