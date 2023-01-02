<template>
  <nuxt />
</template>

<script lang="ts">
import Vue from "vue";

function pickTheme() {
  if (process.browser) {
    const theme = localStorage.getItem("theme");
    let isDark: boolean;
    if (theme === "dark") {
      isDark = true;
    } else if (theme === "light") {
      isDark = false;
    } else {
      isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return isDark;
  }
  return true;
}

export default Vue.extend({
  mounted() {
    setTimeout(() => {
      this.$vuetify.theme.dark = pickTheme();
    }, 0);
  },
});
</script>
