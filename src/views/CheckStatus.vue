<template>
  <v-form>
    <v-container>
      <div class="d-flex flex-column align-stretch pt-8 pb-8">
        <p class="headline">Verificar casos de corona vírus na sua região</p>
        <v-text-field label="CEP" v-mask="'#####-###'" outlined v-model="postalCode"></v-text-field>
        <div class="d-flex flex-column align-center">
          <v-btn
            :loading="requesting"
            :disabled="requesting"
            class="ma-2 white--text"
            color="#4267b2"
            width="220"
            height="40"
          >Carregar</v-btn>
        </div>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Casos</th>
                <th class="text-left">Quantidade</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in cases" :key="item.category" :style="{ color: item.color }">
                <td>{{ item.category }}</td>
                <td>{{ item.qtd }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <!-- <v-card-text style="height: 100px; position: relative"> -->
        <v-fab-transition class="mb-12" fixed>
          <v-btn color="pink" class="mb-12" dark absolute bottom right fab>
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-fab-transition>
        <!-- </v-card-text> -->
        <!-- <v-fab-transition>
          <v-btn color="pink" fab dark absolute bottom right>
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-fab-transition>-->
      </div>
    </v-container>
  </v-form>
</template>

<script>
import { mask } from "vue-the-mask";

export default {
  directives: { mask },
  data: () => ({
    postalCode: "",
    requesting: false
  }),
  computed: {
    cases: () => [
      {
        category: "Confirmados",
        qtd: 500,
        color: "red"
      },
      {
        category: "Suspeitos",
        qtd: 1500,
        color: "orange"
      }
    ]
  }
};
</script>