import React from "react";
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieCard from './movie-card.jsx';
import {MOVIE} from "../../data-for-tests/data-for-tests";

const onMovieCardHover = jest.fn((args) => args);

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should get MovieCard hovered`, () => {
  const component = shallow(
      <MovieCard
        movie = {MOVIE}
        onMovieClick = {() => {}}
        onMovieCardHover = {onMovieCardHover}
      />
  );

  const card = component.find(`.small-movie-card`);
  card.simulate(`mouseover`);
  expect(onMovieCardHover).toHaveBeenCalledTimes(1);
  expect(onMovieCardHover).toHaveBeenCalledWith(MOVIE);
});
