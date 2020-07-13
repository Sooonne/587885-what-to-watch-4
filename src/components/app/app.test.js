import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

export const PROMO_FILM = {
  title: `Star Wars`,
  genre: `Drama`,
  release: 2017,
  img: `img/the-grand-budapest-hotel.jpg`,
  bg: `img/bg-the-grand-budapest-hotel.jpg`,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  director: `Wes Andreson`,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
  ratingScore: 8.9,
  ratingCount: 240,
  id: 9,
};

export const MOVIES = [
  {
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
  },
  {
    title: `Bohemian Rhapsody`,
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
    id: 2,
  },
  {
    title: `Macbeth`,
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
    id: 3,
  },
  {
    title: `Aviator`,
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
    id: 4,
  },
  {
    title: `We need to talk about Kevin`,
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
    id: 5,
  },
  {
    title: `What We Do in the Shadows`,
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
    id: 6,
  },
  {
    title: `Pulp Fiction`,
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
    id: 7,
  },
  {
    title: `Snatch`,
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
    id: 8,
  }
];

const onMovieTitleClick = () => {};

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      promoInfo = {PROMO_FILM}
      movies = {MOVIES}
      onMovieTitleClick = {onMovieTitleClick}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
