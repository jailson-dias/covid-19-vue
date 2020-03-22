import Vue from "vue";
import Vuex from "vuex";

import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
    user: {
      name: null,
      photo: null,
      email: null
    },
    firebaseConfig: {
      apiKey: process.env.VUE_APP_API_KEY,
      authDomain: process.env.VUE_APP_AUTH_DOMAIN,
      databaseURL: process.env.VUE_APP_DATABASE_URL,
      projectId: process.env.VUE_APP_PROJECT_ID,
      storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
      messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
      appId: process.env.VUE_APP_API_ID,
      measurementId: process.env.VUE_APP_MEASUREMENT_ID
    }
  },
  mutations,
  actions,
  modules: {}
});
