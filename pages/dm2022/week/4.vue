<template>
  <default-layout title="Diskrete Mathematik HS22 - Woche 4" back="/dm2022">
    <h3>Übersicht</h3>
    <ul>
      <li>Feedback zur letzten Serie</li>
      <li>Kahoot?</li>
      <li>Beispiel zu pigeonhole principle</li>
      <li>Mengenoperationen und Beweise mit Mengen</li>
    </ul>
    <h3>Priorität bei den Aufgaben</h3>
    <span v-html="$katex('1, 2, 8 > 5 > 4, 6 > 3')"></span>
    (ich würde aber vor allem die Aufgaben zu Set Theory nicht unbedingt in
    dieser Reihenfolge lösen.)
    <h3>Links</h3>
    <ul>
      <li>Notizen werden Montag Abend da hochgeladen</li>
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
