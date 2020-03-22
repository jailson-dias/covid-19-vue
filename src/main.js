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

var firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.API_ID,
  measurementId: process.env.MEASUREMENT_ID
};

// Vue.use(VueGoogleMaps, {
//   load: {
//     key: "AIzaSyDlmnsfdsaFE5H_gchr4g8OEWgTURqhobw",
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

firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
