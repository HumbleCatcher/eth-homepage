<template>
  <default-layout title="Diskrete Mathematik HS22 - Woche 5" back="/dm2022">
    <h3>Übersicht</h3>
    <ul>
      <li>Feedback zur letzten Serie</li>
      <li>Recap Relationen und Äquivalenzrelationen</li>
      <li>Eigenschaften einer Relation beweisen</li>
      <li>Partielle Ordnungen</li>
    </ul>
    <h3>Priorität bei den Aufgaben</h3>
    <span v-html="$katex('5, 1 > 3 > 6 > 4')"></span>
    <p>
      Die Aufgabe 6 sieht vlt. böse aus, aber es ist eigenltich gar nicht so
      schlimm. Die Teilaufgaben führen euch Schrittweise durch die Aufgabe und
      es ist noch ziemlich cool.
    </p>
    <p>
      Bei der Aufgabe 3 empfehle ich euch, jede Eigenschaft wirklich zu beweisen
      oder mit einem Gegenbeispiel zu widerlegen.
    </p>
    <h3>Links</h3>
    <ul>
      <li>
        <a :href="$static('/dm2022/week5/notes.pdf')">Meine Notizen</a> und
        <a :href="$static('/dm2022/week5/notes.pdf')">die Slides</a>
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
