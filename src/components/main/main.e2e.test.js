import React from "react";
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from "./main.jsx";
import {PROMO_FILM, MOVIES} from "../../data-for-tests/data-for-tests";

const onMovieClick = jest.fn();

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should make Click on img for each movie card`, () => {
  const main = shallow(
      <Main
        promoInfo = {PROMO_FILM}
        movies = {MOVIES}
        onMovieClick = {onMovieClick}
      />
  );
  const movieTitles = main.find(`small-movie-card__title`);

  movieTitles.forEach((title) => {
    title.simulate(`click`);
    expect(onMovieClick).toHaveBeenCalledTimes(1);
  });
});

it(`Should make Click on title for each movie card`, () => {
  const main = shallow(
      <Main
        promoInfo = {PROMO_FILM}
        movies = {MOVIES}
        onMovieClick = {onMovieClick}
      />
  );
  const movieImgs = main.find(`small-movie-card__image`);

  movieImgs.forEach((movie) => {
    movie.simulate(`click`);
    expect(onMovieClick).toHaveBeenCalledTimes(1);
  });
});
