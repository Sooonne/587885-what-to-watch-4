import React from "react";
import renderer from "react-test-renderer";
import ButtonMore from "./button-more.jsx";


it(`render Footer`, () => {
  const tree = renderer
  .create(<ButtonMore
    onButtonMoreClick = {() => {}}
  />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
