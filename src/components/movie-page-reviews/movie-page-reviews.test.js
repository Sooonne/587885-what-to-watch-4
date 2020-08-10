import React from "react";
import renderer from "react-test-renderer";
import {REVIEWS, MOVIE} from "../../data-for-tests/data-for-tests.js";
import {MoviePageReviews} from "./movie-page-reviews.jsx";

it(`Should MoviePageReviews render correctly`, () => {
  const tree = renderer
    .create(
        <MoviePageReviews
          comments = {REVIEWS}
          movieCard = {MOVIE}
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
