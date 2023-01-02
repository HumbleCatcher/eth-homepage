<template>
  <default-layout title="Diskrete Mathematik HS22 — Woche 2" back="/dm2022">
    <h3>Übersicht</h3>
    <ul>
      <li>Feedback zur letzten Serie</li>
      <li>Hinweise für den Bonus + Beispiele</li>
      <li>Tautologien, Erfüllbarkeit: Repetition</li>
      <li>
        Logische Konsequenz: Repetition, <s>Beweis</s>, Wahr/Falsch Aufgaben
      </li>
      <li>Prädikatenlogik: unterschiedliche Aufgaben</li>
    </ul>
    <h3>Links</h3>
    <ul>
      <li>
        <a :href="$static('/dm2022/week2/notes.pdf')">Meine Notizen</a> und
        <a :href="$static('/dm2022/week2/slides.pdf')">die Slides</a>
        (und der
        <a
          :href="$static('dm2022/week2/slides.tex')"
          v-html="$katex('\\LaTeX')"
        />
        dafür, falls das euch interessiert)
      </li>
      <li>
        <a
          target="_blank"
          href="https://polybox.ethz.ch/index.php/s/WXf1p3ODpDdpnRH?path=%2F1.%20Semester%2F2%20DiskMath%2F3%20Exercises%2FHS21"
          >Polybox HS2021</a
        >
        -
        <a
          href="https://polybox.ethz.ch/index.php/s/WXf1p3ODpDdpnRH/download?path=%2F1.%20Semester%2F2%20DiskMath%2F3%20Exercises%2FHS21&files=exercise_file_2.pdf"
          target="_blank"
          rel="noopener noreferrer"
          >exercise_file_2.pdf</a
        >
        (Aufgabe 2.3) - sehr ähnliche Bonusaufgabe vom letzten Jahr
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
