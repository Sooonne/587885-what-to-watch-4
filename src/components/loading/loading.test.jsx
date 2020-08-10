import React from "react";
import renderer from "react-test-renderer";
import Loading from "./loading";

it(`render Footer`, () => {
  const tree = renderer
  .create(<Loading
  />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
