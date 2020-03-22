<template>
  <v-app id="signin">
    <v-container>
      <div class="d-flex flex-column align-center pt-8">
        <v-img class="mt-8 mb-12" :src="logo" width="250" height="250"></v-img>
        <v-btn
          :loading="googleLoadding"
          :disabled="googleLoadding"
          color="#4285F4"
          class="ma-2 mt-12 white--text"
          width="300"
          height="40"
          @click="google"
        >
          <v-icon left dark>{{ icons.mdiGoogle }}</v-icon>Google
        </v-btn>
        <v-btn
          :loading="facebookLoadding"
          :disabled="facebookLoadding"
          color="#4267b2"
          class="ma-2 white--text"
          width="300"
          height="40"
        >
          <v-icon left dark>{{ icons.mdiFacebook }}</v-icon>Facebook
        </v-btn>
      </div>
    </v-container>
  </v-app>
</template>

<script>
import firebase from "firebase";
import { mdiFacebook, mdiGoogle } from "@mdi/js";
import { mapActions } from "vuex";

export default {
  data: () => ({
    logo: require("../assets/covid-19.png"),
    icons: {
      mdiFacebook,
      mdiGoogle
    },
    googleLoadding: false,
    facebookLoadding: false
  }),
  methods: {
    ...mapActions(["setToken", "setUser"]),
    google() {
      this.googleLoadding = true;
      var provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope("profile");
      provider.addScope("email");

      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          var token = result.credential.accessToken;
          var user = result.user;

          this.setToken(token);
          this.setUser({
            name: user.displayName,
            photo: user.photoURL,
            email: user.email
          });
          this.$router.push(this.$route.query.path || "/");
        })
        .finally(() => {
          this.googleLoadding = false;
        });
    }
  }
};
</script>
