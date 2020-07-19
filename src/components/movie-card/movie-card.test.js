import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card.jsx";

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
  src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
};

it(`Should MovieCard render correctly`, () => {
  const tree = renderer
    .create(<MovieCard
      movie = {movie}
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
