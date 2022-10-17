<template>
  <default-layout title="Diskrete Mathematik HS22 - Woche 4" back="/dm2022">
    <h3>Übersicht</h3>
    <ul>
      <li>Feedback zur letzten Serie</li>
      <li>Beispiel zu pigeonhole principle</li>
      <li>Kahoot</li>
      <li>Mengenoperationen und Beweise mit Mengen</li>
    </ul>
    <h3>Priorität bei den Aufgaben</h3>
    <span v-html="$katex('1, 2, 8 > 5 > 4, 6 > 3')"></span>
    (ich würde aber vor allem die Aufgaben zu Set Theory nicht unbedingt in
    dieser Reihenfolge lösen.)
    <h3>Links</h3>
    <ul>
      <li>
        <a :href="$static('/dm2022/week4/notes.pdf')">Meine Notizen</a> und
        <a
          href="https://create.kahoot.it/details/8264e26d-d1bd-4eeb-8b77-880b4739906f"
          >das Kahoot</a
        >
      </li>
    </ul>
  </default-layout>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  mounted() {},
});
</script>

<style lang="sass" scoped></style>
