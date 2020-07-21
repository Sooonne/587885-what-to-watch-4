import React from "react";
import renderer from "react-test-renderer";
import {REVIEW} from "../../data-for-tests/data-for-tests.js";
import Review from "./review.jsx";

it(`Should MoviePageReviews render correctly`, () => {
  const tree = renderer
    .create(<Review
      review = {REVIEW}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
