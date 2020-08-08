import React from "react";
import renderer from "react-test-renderer";
import MovieList from "./movie-list.jsx";
import {MOVIES} from "../../data-for-tests/data-for-tests";
import {BrowserRouter as Router} from 'react-router-dom';

it(`Should MovieList render Correctly`, () => {
  const tree = renderer
  .create(
      <Router>
        <MovieList
          movies = {MOVIES}
        />
      </Router>,
      {
        createNodeMock: () => {
          return {};
        }
      }
  )
  .toJSON();

  expect(tree).toMatchSnapshot();
});
