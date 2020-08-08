import MockAdapter from 'axios-mock-adapter';
import {ActionType, Operation, reducer} from './user';
import {AuthorizationStatus} from '../../utils/const.js';
import {createAPI} from '../../api';

describe(`User Reducer`, () => {

  it(`Reducer should change authStatus by a given value`, () => {
    expect(reducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
    });
  });

  it(`Reducer should check Auth Error`, () => {
    expect(reducer({
      isErrorAuth: false,
    }, {
      type: ActionType.CHECK_ERROR_AUTH,
      payload: true,
    })).toEqual({
      isErrorAuth: true,
    });
  });

  it(`Reducer should get user data`, () => {
    expect(reducer({
      userInfo: {
        id: 0,
        email: ``,
        name: ``,
        avatarUrl: ``,
      },
    }, {
      type: ActionType.GET_USER_INFO,
      payload: {
        id: 1,
        email: `1@1.ru`,
        name: `Mr Smith`,
        avatarUrl: `1/1.png`,
      },
    })).toEqual({
      userInfo: {
        id: 1,
        email: `1@1.ru`,
        name: `Mr Smith`,
        avatarUrl: `1/1.png`,
      },
    });
  });
});

describe(`Operations work correctly`, () => {
  it(`Operation should check authorization`, () => {
    const api = createAPI(() => {});

    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthorization = Operation.checkAuth();

    apiMock
      .onGet(`/login`)
      .reply(200, [{fake: true}]);

    return checkAuthorization(dispatch, () => {}, api)
          .then(() => {
            expect(dispatch).toHaveBeenCalledTimes(2);
            expect(dispatch).toHaveBeenCalledWith({
              type: ActionType.REQUIRED_AUTHORIZATION,
              payload: `AUTH`,
            });
          });
  });
});

