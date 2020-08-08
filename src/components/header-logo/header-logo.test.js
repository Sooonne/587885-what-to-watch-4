import React from "react";
import renderer from "react-test-renderer";
import HeaderLogo from "./header-logo.jsx";
import {BrowserRouter as Router} from "react-router-dom";

it(`render Header`, () => {
  const tree = renderer
  .create(
      <Router>
        <HeaderLogo/>
      </Router>
  )
  .toJSON();

  expect(tree).toMatchSnapshot();
});
