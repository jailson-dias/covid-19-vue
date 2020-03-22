<template>
  <v-container>
    <div class="d-flex flex-column align-stretch pt-8 pb-8">
      <p class="headline">Notícias sobre coronavírus</p>

      <div v-for="(item, i) in news" :key="i">
        <v-card :color="item.backgroundColor" dark :href="item.link" target="_blank">
          <div class="d-flex flex-column">
            <v-card-title class="headline" v-text="item.title" :style="{color: item.textColor}"></v-card-title>
            <div class="mt-n4">
              <v-avatar class="ml-4 mt-5 pr-2 pb-2 float-left" size="80" tile>
                <v-img :src="item.image"></v-img>
              </v-avatar>
              <v-card-subtitle
                v-text="item.description"
                class="text-justify"
                :style="{color: item.textColor}"
              ></v-card-subtitle>
            </div>
          </div>
        </v-card>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    news: [
      {
        backgroundColor: "grey",
        textColor: "black",
        image: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        title: "Coronavírus Brasil",
        description:
          "Using v-flex, you can create customized horizontal cards. Use the contain property to shrink the v-img to fit inside the container, instead of covering.",
        link: "https://vuetifyjs.com/en/components/cards/#cards"
      }
    ]
  })
};
</script>