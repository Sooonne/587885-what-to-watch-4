import React from "react";
import renderer from "react-test-renderer";
import MoviePage from "./movie-page.jsx";

const movie = {
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  genre: `Drama`,
  release: 2017,
  img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  bg: `img/bg-the-grand-budapest-hotel.jpg`,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  director: `Wes Andreson`,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
  ratingScore: 8.9,
  ratingCount: 240,
  id: 1,
};

it(`Should MoviePage render correctly`, () => {
  const tree = renderer
    .create(<MoviePage
      movieCard = {movie}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
