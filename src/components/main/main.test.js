import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const onMovieTitleClick = () => {};


it(`Should Main render correctly`, () => {
  const tree = renderer
    .create(<Main
      promoInfo = {
        {
          TITLE: `Star Wars`,
          GENRE: `Drama`,
          RELEASE: 2017,
        }
      }
      movieTitles = {[`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`]}
      onMovieTitleClick = {onMovieTitleClick}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
