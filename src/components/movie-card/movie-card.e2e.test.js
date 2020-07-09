import React from "react";
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieCard from './movie-card.jsx';

const mocksData = {
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
};
const onMovieCardHover = jest.fn();

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should get MovieCard info by focus`, () => {
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
  onMovieCardHover.mockImplementation(() => mocksData);
  expect(onMovieCardHover()).toBe(mocksData);
});
