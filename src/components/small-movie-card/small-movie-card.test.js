import React from "react";
import renderer from "react-test-renderer";
import {SmallMovieCard} from "./small-movie-card.jsx";
import {MOVIE} from "../../data-for-tests/data-for-tests";

import {createMemoryHistory} from 'history';
const history = createMemoryHistory();

it(`Should SmallMovieCard render correctly`, () => {
  const tree = renderer
    .create(<SmallMovieCard
      movie = {MOVIE}
      onMovieCardHover = {() => {}}
      history={history}
    />,
    {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
