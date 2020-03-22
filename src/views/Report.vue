<template>
  <v-form>
    <v-container>
      <div class="d-flex flex-column align-stretch pt-8 pb-8">
        <p class="headline">Registrar um novo caso confirmado ou suspeito de corona vírus</p>
        <v-text-field label="CEP" v-mask="'#####-###'" outlined v-model="postalCode"></v-text-field>
        <v-text-field label="Idade" type="number" outlined v-model="age"></v-text-field>
        <v-select :items="genderOptions" label="Sexo" outlined v-model="gender"></v-select>
        <v-select
          :items="coronaVirusStateOptions"
          label="Nível do caso de corona vírus"
          outlined
          v-model="coronaVirusState"
        ></v-select>
        <v-select
          :items="proximityToInfectedPeopleOptions"
          label="Relação com a pessoa que tem corona vírus"
          outlined
          v-model="proximityToInfectedPeople"
        ></v-select>
        <div class="d-flex flex-column align-center">
          <v-btn
            :loading="loading3"
            :disabled="loading3"
            class="ma-2 white--text"
            color="#4267b2"
            width="220"
            height="40"
            @click="loader = 'loading3'"
          >Cadastrar caso</v-btn>
        </div>
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
    age: "",
    gender: "",
    coronaVirusState: "",
    proximityToInfectedPeople: ""
  }),
  computed: {
    proximityToInfectedPeopleOptions: () => [
      //   "Contato direto com uma pessoa com o vírus",
      //   "Contato direto com uma pessoa com suspeita do vírus",
      //   "Contato indireto com uma pessoa com o vírus",
      //   "Contato indireto com uma pessoa com suspeita do vírus",

      "Sou eu",
      "Meu irmão/irmã, pai, mãe",
      "Meu avô/avó, primo(a), tio(a)",
      "Meu vizinho(a)",
      "Meu chefe, funcionário, colega de trabalho",
      "Outro"
    ],
    coronaVirusStateOptions: () => ["Suspeita", "Confirmado"],
    genderOptions: () => ["Masculino", "Feminino", "Outro"]
  },
  methods: {
    load() {
      this.axios
        .get(`http://www.cepaberto.com/api/v3/cep?cep=${this.cep}`, {
          headers: {
            Authorization: "Token token=a7b5e96679429e2871ad51fa92d51ba5"
          }
        })
        .then(response => {
          console.log(response.data);
        });
    }
  }
};
</script>
<style>
.teste {
  background-color: blue;
}
</style>
