import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card.jsx";

const TITLE = `Fantastic Beasts`;
const onClick = () => {};

it(`Should MovieCard render correctly`, () => {
  const tree = renderer
    .create(<MovieCard
      movieTitles = {TITLE}
      onClick = {onClick}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
