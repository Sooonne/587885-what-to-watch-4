import React from "react";
import renderer from "react-test-renderer";
import MovieLikeThis from "./movie-like-this.jsx";
import {MOVIE, MOVIES} from "../../data-for-tests/data-for-tests.js";
import {BrowserRouter as Router} from 'react-router-dom';

it(`Should MovieLikeThis render correctly`, () => {
  const tree = renderer
    .create(
        <Router>
          <MovieLikeThis
            movieCard = {MOVIE}
            movies = {MOVIES}
          />
        </Router>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
