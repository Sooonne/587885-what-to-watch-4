import React from "react";
import renderer from "react-test-renderer";
import SignIn from "./sign-in.jsx";
import NameSpace from '../../reducer/name-space';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {BrowserRouter as Router} from 'react-router-dom';


const mockStore = configureStore([]);

it(`Should SignIn render correctly`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: `AUTH`,
      isErrorAuth: false,
      userInfo: {
        id: 1,
        email: `sadas@gmail.com`,
        name: `asdasd`,
        avatarUrl: `https://4.react.pages.academy/wtw/asda.jpg`,
      },
    },
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <Router>
            <SignIn
              onFormSubmit = {() => {}}
              isErrorAuth = {false}
            />
          </Router>
        </Provider>
        ,
        {
          createNodeMock: () => {
            return {};
          }
        })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
