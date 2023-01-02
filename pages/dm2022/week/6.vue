<template>
  <default-layout title="Diskrete Mathematik HS22 — Woche 6" back="/dm2022">
    <h3>Übersicht</h3>
    <ul>
      <li>Posets</li>
      <li>Funktionen</li>
      <li>(Über)abzählbarkeit</li>
    </ul>
    <h3>Priorität bei den Aufgaben</h3>
    <span v-html="$katex('1 \\, d), 3, 4, 5 > 1, 2 > 7')"></span>
    <h3>Links</h3>
    <ul>
      <li>
        <a :href="$static('/dm2022/week6/notes.pdf')">Meine Notizen</a> und
        <a :href="$static('/dm2022/week6/slides.pdf')">die Slides</a>
      </li>
      <li>
        Bonus vom letzten Jahr zu Abzählbarkeit (<a
          href="https://polybox.ethz.ch/index.php/s/WXf1p3ODpDdpnRH/download?path=%2F1.%20Semester%2F2%20DiskMath%2F3%20Exercises%2FHS21&files=exercise_file_6.pdf"
          >Aufgabe</a
        >
        und
        <a
          href="https://polybox.ethz.ch/index.php/s/WXf1p3ODpDdpnRH/download?path=%2F1.%20Semester%2F2%20DiskMath%2F3%20Exercises%2FHS21%2FSolutions&files=solution_file_6.pdf"
          >Lösung</a
        >)
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
