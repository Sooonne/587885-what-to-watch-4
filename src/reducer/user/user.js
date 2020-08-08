import {extend, AuthorizationStatus} from "../../utils/const.js";
import {createUser} from "../../adapter/adapter-user.js";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isErrorAuth: false,
  userInfo: {
    id: 0,
    email: ``,
    name: ``,
    avatarUrl: ``,
  },
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  CHECK_ERROR_AUTH: `CHECK_ERROR_AUTH`,
  GET_USER_INFO: `GET_USER_INFO`,
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
  },

  getUserInfo: (userInfo) => {
    return {
      type: ActionType.GET_USER_INFO,
      payload: userInfo
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });

    case ActionType.GET_USER_INFO:
      return extend(state, {
        userInfo: action.payload,
      });
    case ActionType.CHECK_ERROR_AUTH:
      return extend(state, {
        isErrorAuth: action.payload,
      });
  }
  return state;
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.getUserInfo(createUser(response.data)));
      })
      .catch((err) => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
        throw err;
      });

  },

  signIn: (authData) => (dispatch, getState, api) => {
    // debugger;
    return api.post(`/login`, {
      email: authData.login,
      password: authData.password,
    })
      .then((response) => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.checkErrorAuth(false));
        dispatch(ActionCreator.getUserInfo(createUser(response.data)));
      })
      .catch(() => {
        // dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
        dispatch(ActionCreator.checkErrorAuth(true));
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
      });
  },

  logout: () => (dispatch, getState, api) => {
    return api.get(`/logout`)
      .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)));
  }
};

export {
  ActionCreator,
  ActionType,
  reducer,
  Operation,
};
