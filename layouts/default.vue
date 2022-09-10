<template>
  <b-container fluid>
    <b-row class="justify-content-center">
      <b-col cols="8">
        <nuxt />
      </b-col>
    </b-row>
  </b-container>
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
