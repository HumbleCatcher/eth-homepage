<template>
  <v-card class="my-5">
    <v-card-text>
      <v-alert
        class="mb-4"
        :type="alertColor"
        border="left"
        :outlined="$vuetify.theme.dark"
      >
        <template v-if="state === 'solved'">
          "Dieser Challenge wurde erfolgreich von
          <pre class="d-inline">{{ winner }}</pre>
          gelöst. Gratuliere!"
        </template>
        <template v-else-if="state === 'over'">
          Die Challenge ist vorbei.
        </template>
        <template v-else> Dieser Challenge wurde noch nicht gelöst. </template>
      </v-alert>

      <slot />

      <p v-if="solutionURL" class="mb-0">
        <a :href="solutionURL">Lösung</a>
        <span v-if="winner"
          >(von
          <pre class="d-inline">{{ winner }}</pre>
          )</span
        >
      </p>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

const stateToColor: { [key: string]: string } = {
  unsolved: "secondary",
  solved: "success",
  over: "error",
};

export default Vue.extend({
  props: {
    solutionURL: {
      type: String,
      default: null,
    },
    state: {
      type: String,
      default: "unsolved",
    },
    winner: {
      type: String,
      default: null,
    },
  },
  computed: {
    alertColor(): string {
      return stateToColor[this.state];
    },
  },
});
</script>
