import React from "react";
import renderer from "react-test-renderer";
// import {MOVIE} from "../../data-for-tests/data-for-tests";
import SignIn from "./sign-in.jsx";
import NameSpace from '../../reducer/name-space';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";


const mockStore = configureStore([]);

it(`Should SignIn render correctly`, () => {
  const store = mockStore({
    // [NameSpace.DATA]: {
    //   movieCard,
    //   movies,
    //   isLoading: false,
    //   isLoadError: false,
    // },
    // [NameSpace.APP_STATE]: {
    //   activeGenre: `All genres`,
    //   currentMovie: movie,
    // },
    [NameSpace.USER]: {
      authorizationStatus: `AUTH`,
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
          <SignIn
            onFormSubmit = {() => {}}
            isErrorAuth = {false}
          />
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
