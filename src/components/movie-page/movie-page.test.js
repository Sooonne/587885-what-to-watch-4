import React from "react";
import renderer from "react-test-renderer";
import MoviePage from "./movie-page.jsx";
import {MOVIE, MOVIES} from "../../data-for-tests/data-for-tests.js";

it(`Should MoviePage render correctly`, () => {
  const tree = renderer
    .create(<MoviePage
      movieCard = {MOVIE}
      movies = {MOVIES}
      onMovieClick = {() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
