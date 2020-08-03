import {extend, AuthorizationStatus} from "../../utils/const.js";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isErrorAuth: false,
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  CHECK_ERROR_AUTH: `CHECK_ERROR_AUTH`
};

const ActionCreator = {
  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  },

  checkErrorAuth: (error) => {
    return {
      type: ActionType.CHECK_ERROR_AUTH,
      payload: error,
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
  }
  return state;
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then(() => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.checkErrorAuth(false));
      })
      .catch((err) => {
        dispatch(ActionCreator.checkErrorAuth(true));
        throw err;
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.login,
      password: authData.password,
    })
      .then(() => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      });
  },
};

export {
  ActionCreator,
  ActionType,
  reducer,
  Operation,
};
