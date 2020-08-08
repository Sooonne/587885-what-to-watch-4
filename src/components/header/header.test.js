import React from "react";
import renderer from "react-test-renderer";
import {Header} from "./header.jsx";

it(`render Footer`, () => {
  const tree = renderer
  .create(<Header

  />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
