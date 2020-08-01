import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card.jsx";
import {MOVIE} from "../../data-for-tests/data-for-tests";

it(`Should SmallMovieCard render correctly`, () => {
  const tree = renderer
    .create(<SmallMovieCard
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
