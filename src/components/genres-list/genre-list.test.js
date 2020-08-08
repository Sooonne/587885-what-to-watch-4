import React from "react";
import renderer from "react-test-renderer";
import GenreList from "./genres-list.jsx";


it(`render Footer`, () => {
  const tree = renderer
  .create(<GenreList
    genres = {[`All genres`]}
    activeGenre = {`All genres`}
    onGenreClick = {() => {}}
  />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
