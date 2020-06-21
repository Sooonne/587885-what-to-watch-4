import React from "react";
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from "./main.jsx";

const mocksData = {
  promoInfo: {
    TITLE: `Star Wars`,
    GENRE: `Drama`,
    RELEASE: 2017,
  },
  movieTitles: [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`],
};

const onMovieTitleClick = jest.fn();

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should make onClick for 1 time for each movie card`, () => {
  const main = shallow(
      <Main
        promoInfo = {mocksData.promoInfo}
        movieTitles = {mocksData.movieTitles}
        onMovieTitleClick = {onMovieTitleClick}
      />
  );
  const movieTitles = main.find(`small-movie-card__title`);

  movieTitles.forEach((title) => {
    title.simulate(`click`);
    expect(onMovieTitleClick).toHaveBeenCalledTimes(1);
  });
});
