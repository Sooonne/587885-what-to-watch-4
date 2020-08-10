import React from "react";
import renderer from "react-test-renderer";
import {SmallMovieCard} from "./small-movie-card.jsx";
import {MOVIE} from "../../data-for-tests/data-for-tests";

import {createMemoryHistory} from 'history';
import {BrowserRouter} from "react-router-dom";
const history = createMemoryHistory();

it(`Should SmallMovieCard render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <SmallMovieCard
            movie = {MOVIE}
            onCardOver = {() => {}}
            onCardOut = {() => {}}
            history={history}
            isPlaying = {false}
          />
        </BrowserRouter>,
        {
          createNodeMock: () => {
            return {};
          }
        })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
