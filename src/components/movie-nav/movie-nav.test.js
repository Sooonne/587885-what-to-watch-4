import React from "react";
import renderer from "react-test-renderer";
import MovieNav from "./movie-nav.jsx";

it(`Should MovieNav render correctly`, () => {
  const tree = renderer
    .create(<MovieNav
      currentActivePage = {`Overview`}
      onNavClick = {()=> {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
