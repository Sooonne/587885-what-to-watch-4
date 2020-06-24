import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card.jsx";

const movie = {
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
};

it(`Should MovieCard render correctly`, () => {
  const tree = renderer
    .create(<MovieCard
      movieTitles = {TITLE}
      onClick = {() => {}}
      onHover = {() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
