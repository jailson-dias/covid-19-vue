import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
// import * as VueGoogleMaps from "vue2-google-maps";
import * as firebase from "firebase/app";
import "firebase/auth";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

// Vue.use(VueGoogleMaps, {
//   load: {
//     key: "API_KEY",
//     libraries: "visualization"
// libraries: 'places', // This is required if you use the Autocomplete plugin
// OR: libraries: 'places,drawing'
// OR: libraries: 'places,drawing,visualization'
// (as you require)

//// If you want to set the version, you can do so:
// v: '3.26',
// }

//// If you intend to programmatically custom event listener code
//// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
//// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
//// you might need to turn this on.
// autobindAllEvents: false,

//// If you want to manually install components, e.g.
//// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
//// Vue.component('GmapMarker', GmapMarker)
//// then disable the following:
// installComponents: true,
// });

firebase.initializeApp(store.state.firebaseConfig);

Vue.config.productionTip = false;

let app = null;

firebase.auth().onAuthStateChanged(async user => {
  if (user) {
    store.dispatch("setUser", {
      name: user.displayName,
      photo: user.photoURL,
      email: user.email
    });
    try {
      let token = await firebase.auth().currentUser.getIdToken(true);
      store.dispatch("setToken", token);
    } catch (err) {
      console.log("err getting token", err);
    }
  } else {
    console.log("Unauthenticated user");
  }
  if (!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount("#app");
  }
});
