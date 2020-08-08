import React from "react";
import renderer from "react-test-renderer";
import {REVIEWS} from "../../data-for-tests/data-for-tests.js";
import {MoviePageReviews} from "./movie-page-reviews.jsx";

it(`Should MoviePageReviews render correctly`, () => {
  const tree = renderer
    .create(
        <MoviePageReviews
          comments = {REVIEWS}
          id = {1}
          loadMovieReviewes = {() => {}}
        />
        ,
        {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
