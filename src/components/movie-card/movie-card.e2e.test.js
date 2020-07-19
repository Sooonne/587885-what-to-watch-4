import React from "react";
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieCard from './movie-card.jsx';

const mocksData = {
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
const onMovieCardHover = jest.fn((args) => args);

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should get MovieCard hovered`, () => {
  const component = shallow(
      <MovieCard
        movie = {mocksData}
        onMovieClick = {() => {}}
        onMovieCardHover = {onMovieCardHover}
      />
  );

  const card = component.find(`.small-movie-card`);
  card.simulate(`mouseover`);
  expect(onMovieCardHover).toHaveBeenCalledTimes(1);
  // onMovieCardHover.mockImplementation(() => mocksData);
  // expect(onMovieCardHover()).toBe(mocksData);
  expect(onMovieCardHover).toHaveBeenCalledWith(mocksData);
});
