<template>
  <v-container>
    <div class="d-flex flex-column align-center pt-6">
      <v-img class="mt-5 mb-5" :src="logo" width="150" height="150"></v-img>
      <div class="d-flex flex-column align-self-stretch align-left pt-5">
        <p class="title font-weight-regular">
          Casos Reportados:
          <strong>50</strong>
        </p>
      </div>
      <v-btn
        :loading="loading3"
        :disabled="loading3"
        class="ma-2 mt-12 blue--text darken-1"
        width="300"
        height="40"
        @click="loader = 'loading3'"
        text
      >Sair</v-btn>
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
