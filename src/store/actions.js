import * as types from "./types";

const setToken = ({ commit }, token) => {
  commit(types.SET_TOKEN, token);
};

const setUser = ({ commit }, user) => {
  commit(types.SET_USER, user);
};

const setActiveScreenHome = ({ commit }, screen) => {
  commit(types.SET_ACTIVE_SCREEN_HOME, screen);
};

export default {
  setToken,
  setUser,
  setActiveScreenHome
};
