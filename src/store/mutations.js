import * as types from "./types";

export default {
  [types.SET_TOKEN]: (state, token) => {
    state.token = token;
  },
  [types.SET_USER]: (state, { name, photo, email }) => {
    state.user.name = name;
    state.user.photo = photo;
    state.user.email = email;
  }
};
