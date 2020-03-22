<template>
  <v-container>
    <div class="d-flex flex-column align-center pt-6">
      <v-img class="mt-5 mb-5 circle-img" :src="user.photo" width="150" height="150"></v-img>
      <p class="title font-weight-regular">{{ user.name }}</p>
      <p class="subtitle-1 font-weight-bold">{{ user.email }}</p>
      <div class="d-flex flex-column align-self-stretch align-left pt-5">
        <p class="title font-weight-regular">
          Casos Reportados:
          <strong>50</strong>
        </p>
      </div>
      <v-btn
        :loading="requesting"
        :disabled="requesting"
        class="ma-2 mt-12 blue--text darken-1"
        width="300"
        height="40"
        @click="signOut"
        text
      >Sair</v-btn>
    </div>
  </v-container>
</template>

<script>
import firebase from "firebase";
import { mapState, mapActions } from "vuex";

export default {
  data: () => ({
    requesting: false
  }),
  computed: mapState(["user"]),
  methods: {
    ...mapActions(["setToken", "setUser"]),
    signOut() {
      this.requesting = true;
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.setToken(null);
          this.setUser({});
          this.$router.push("/");
        })
        .finally(() => {
          this.requesting = false;
        });
    }
  }
};
</script>

<style>
.circle-img {
  border-radius: 50%;
}
</style>