<template>
  <v-app id="home">
    <v-app-bar app hidden></v-app-bar>
    <v-content class="mt-n12">
      <v-container>
        <transition mode="out-in">
          <router-view></router-view>
        </transition>
      </v-container>
    </v-content>
    <v-bottom-navigation app :value="activeScreen" grow shift fixed color="teal">
      <v-btn to="/">
        <span>Home</span>
        <v-icon>{{ icons.mdiHome }}</v-icon>
      </v-btn>

      <v-btn to="/test-covid-19">
        <span>Exame</span>
        <v-icon>{{ icons.mdiBook }}</v-icon>
      </v-btn>

      <v-btn to="/profile">
        <span>Perfil</span>
        <v-icon>{{ icons.mdiFace }}</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
import { mdiHome, mdiBook, mdiFace } from "@mdi/js";

export default {
  name: "Home",
  data: () => ({
    activeScreen: 0,
    drawer: false,
    group: null,
    icons: {
      mdiHome,
      mdiBook,
      mdiFace
    }
  }),
  watch: {
    group() {
      this.drawer = false;
    }
  }
};
</script>
