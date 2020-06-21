import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const onMovieTitleClick = () => {};

it(`Render App`, () => {
  const tree = renderer
    .create(<App
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
