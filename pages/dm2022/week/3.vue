<template>
  <default-layout title="Diskrete Mathematik HS22 - Woche 3" back="/dm2022">
    <h3>Übersicht</h3>
    <ul>
      <li>Feedback zur letzten Serie</li>
      <li>Aufgaben über logische Konsequenzen von der letzten Stunde</li>
      <li>
        Beweise:
        <s
          >Vorgehen, einfacher Beweis aus dem Skript, Beispiele für indirekten
          Beweise,</s
        >
        Fallunterscheidung <s>und Widerspruchsbeweise</s>
      </li>
    </ul>
    <h3>Priorität bei den Aufgaben</h3>
    <span v-html="$katex('4, 5, 6 > 1 > 3')"></span>
    <h3>Links</h3>
    <ul>
      <li>
        <a :href="$static('/dm2022/week3/notes.pdf')">Meine Notizen</a> und
        <a :href="$static('/dm2022/week3/slides.pdf')">die Slides</a>
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
