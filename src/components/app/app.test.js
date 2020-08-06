import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import configureStore from "redux-mock-store";
import {PROMO_FILM, MOVIES} from "../../data-for-tests/data-for-tests";
import {Provider} from "react-redux";
import NameSpace from '../../reducer/name-space';

const mockStore = configureStore([]);

it(`Render App`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      PROMO_FILM,
      MOVIES,
    },
    [NameSpace.APP_STATE]: {
      // activeGenre: `All genres`,
      showedMoviesAmount: 8,
    },
    [NameSpace.USER]: {
      authorizationStatus: `AUTH`,
      isErrorAuth: false,
      userInfo: {
        id: 1,
        email: `1@1.com`,
        name: `111`,
        avatarUrl: `https://4.react.pages.academy/wtw/asda.jpg`,
      }
    },
  });


  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            authStatus = {`AUTH`}
          />
        </Provider>
        , {
          createNodeMock: () => {
            return {};
          }
        })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
