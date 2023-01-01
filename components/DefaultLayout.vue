<template>
  <v-app>
    <v-app-bar app height="80" :flat="!$vuetify.theme.dark">
      <v-row align="center">
        <v-col cols="auto">
          <v-btn
            :disabled="!back"
            color="secondary"
            icon
            x-large
            @click.stop="$router.push(back)"
          >
            <v-icon>mdi-arrow-left-circle</v-icon>
          </v-btn>
        </v-col>
        <v-col offset-lg="2" offset-sm="1" cols="5" sm="8">
          <h3 class="ml-lg-10 ma-0 | ellipsis-overflow">{{ title }}</h3>
        </v-col>
        <v-spacer />
        <v-col>
          <svg
            v-if="$vuetify.theme.dark"
            @click="toggleTheme"
            class="theme my-auto"
            viewBox="0 0 24 24"
            fill="none"
            height="20"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
          <svg
            v-else
            @click="toggleTheme"
            class="theme my-auto"
            viewBox="0 0 24 24"
            fill="none"
            height="20"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" x2="12" y1="1" y2="3"></line>
            <line x1="12" x2="12" y1="21" y2="23"></line>
            <line x1="4.22" x2="5.64" y1="4.22" y2="5.64"></line>
            <line x1="18.36" x2="19.78" y1="18.36" y2="19.78"></line>
            <line x1="1" x2="3" y1="12" y2="12"></line>
            <line x1="21" x2="23" y1="12" y2="12"></line>
            <line x1="4.22" x2="5.64" y1="19.78" y2="18.36"></line>
            <line x1="18.36" x2="19.78" y1="5.64" y2="4.22"></line>
          </svg>
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
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem(
        "theme",
        this.$vuetify.theme.dark ? "dark" : "light"
      );
    },
  },
});
</script>

<style lang="sass" scoped>
.ellipsis-overflow
  white-space: nowrap
  text-overflow: ellipsis
  overflow: hidden

.theme:hover
  color: var(--v-primary-base)
  cursor: pointer
</style>
