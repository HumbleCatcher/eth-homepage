<template>
  <v-app>
    <v-app-bar app height="80">
      <v-row align="center">
        <v-col cols="auto">
          <v-fade-transition>
            <v-btn
              v-if="back"
              color="secondary"
              icon
              x-large
              @click.stop="$router.push(back)"
            >
              <v-icon>mdi-arrow-left-circle</v-icon>
            </v-btn>
          </v-fade-transition>
        </v-col>
        <v-col offset-lg="2" offset-sm="1" cols="6" sm="8">
          <h3 class="ml-lg-10 ma-0 | ellipsis-overflow">{{ title }}</h3>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <v-row justify="center">
          <v-col cols="12" lg="6" sm="10">
            <slot />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true,
    },
    back: {
      type: String,
      default: "",
    },
  },
});
</script>

<style lang="sass" scoped>
.ellipsis-overflow
  white-space: nowrap
  text-overflow: ellipsis
  overflow: hidden
</style>
