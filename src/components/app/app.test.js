import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import {PROMO_FILM, MOVIES} from "../../data-for-tests/data-for-tests";

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      movieCard = {PROMO_FILM}
      movies = {MOVIES}
    />, {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
