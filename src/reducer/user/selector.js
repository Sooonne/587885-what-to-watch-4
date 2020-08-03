import NameSpace from "../name-space.js";

const NAME_SPACE = NameSpace.USER;

export const getAuthorizationStatus = (state) => state[NAME_SPACE].authorizationStatus;
export const getErrorAuth = (state) => state[NAME_SPACE].isErrorAuth;
export const getUserInfo = (state) => state[NAME_SPACE].userInfo;
