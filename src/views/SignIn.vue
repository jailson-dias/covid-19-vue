<template>
  <v-container>
    <div class="d-flex flex-column align-center pt-8">
      <v-img class="mt-8 mb-12" :src="logo" width="250" height="250"></v-img>
      <!-- <v-row class="text-center">
        <v-btn @click="google">Google</v-btn>
      </v-row>-->
      <v-btn
        :loading="loading3"
        :disabled="loading3"
        color="#4285F4"
        class="ma-2 mt-12 white--text"
        width="300"
        height="40"
        @click="loader = 'loading3'"
      >
        <v-icon left dark>{{ icons.mdiGoogle }}</v-icon>Google
      </v-btn>
      <v-btn
        :loading="loading3"
        :disabled="loading3"
        color="#4267b2"
        class="ma-2 white--text"
        width="300"
        height="40"
        @click="loader = 'loading3'"
      >
        <v-icon left dark>{{ icons.mdiFacebook }}</v-icon>Facebook
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import firebase from "firebase";
import { mdiFacebook, mdiGoogle } from "@mdi/js";

export default {
  data: () => ({
    logo: require("../assets/covid-19.png"),
    icons: {
      mdiFacebook,
      mdiGoogle
    }
  }),
  methods: {
    google() {
      var provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope("profile");
      provider.addScope("email");

      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function(result) {
          // This gives you a Google Access Token.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;

          console.log("logged", user, token);
        });
    }
  }
};
</script>
