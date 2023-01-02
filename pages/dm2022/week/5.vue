<template>
  <default-layout title="Diskrete Mathematik HS22 — Woche 5" back="/dm2022">
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
        <a :href="$static('/dm2022/week5/slides.pdf')">die Slides</a>
      </li>
    </ul>
    <h3 id="challenge">Challenge!</h3>
    Die erste Person (eingeschrieben in Diskrete Mathematik HS22), die mir einen
    vollständigen und korrekten Beweis für untenstehende Aufgabe per
    <a href="mailto:aellison@student.ethz.ch">Email</a>, bis spätestens am
    <b>7.11.2022 16:00 Uhr</b>, schickt, bekommt von mir eine
    <b> Tafel Schokolade 🍫</b> geschenkt. Die Email MUSS den Betreff "<i
      >[DM22] Challenge Transitivität</i
    >" enthalten. Sonst garantiere ich nicht, dass ich mir den Beweis anschaue.
    Überprüfe auch vor dem Abschicken, ob unten immer noch steht, die Challenge
    sei noch nicht gelöst worden.
    <challenge-box
      state="solved"
      winner="toffermann"
      :solutionURL="$static('/dm2022/week5/challenge_solution.pdf')"
    >
      Sei <katex t="\rho" /> eine Relation auf einer Menge <katex t="A" />.
      Beweise:
      <p class="text-center">
        <katex t="\rho \," /> transitiv
        <katex t="\implies \rho^* = \rho" />
      </p>
    </challenge-box>
  </default-layout>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  mounted() {},
});
</script>

<style lang="sass" scoped></style>
