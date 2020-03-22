import * as types from "./types";

const setToken = ({ commit }, token) => {
  commit(types.SET_TOKEN, token);
};

const setUser = ({ commit }, user) => {
  commit(types.SET_USER, user);
};

export default {
  setToken,
  setUser
};
