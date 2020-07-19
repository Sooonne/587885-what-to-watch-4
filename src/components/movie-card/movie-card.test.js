import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card.jsx";
import {MOVIE} from "../../data-for-tests/data-for-tests";

it(`Should MovieCard render correctly`, () => {
  const tree = renderer
    .create(<MovieCard
      movie = {MOVIE}
      onMovieClick = {() => {}}
      onMovieCardHover = {() => {}}
    />,
    {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
