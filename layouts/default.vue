<template>
  <v-app>
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="12" md="6" sm="10">
          <nuxt />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import MathjaxVue from "~/mixins/Mathjax.vue";

export default Vue.extend({
  mixins: [MathjaxVue],
  mounted() {
    // @ts-ignore
    this.reloadMathjax();
  },
});
</script>
