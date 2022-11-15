<template>
  <default-layout title="Diskrete Mathematik HS22 - Woche 8" back="/dm2022">
    <h3>Übersicht</h3>
    <ul>
      <li>Monoid-/Gruppeneigenschaften überprüfen</li>
      <li>Subgroups</li>
      <li>Ein nützliches Lemma</li>
    </ul>
    <h3>Priorität bei den Aufgaben</h3>
    <p>
      <span v-html="$katex('1, 2, 4, 6')" /> sind alles typische
      Prüfungsaufgaben. Die Aufgabe <span v-html="$katex('5')" /> ist vielleicht
      etwas mühsam, aber auch gut, um den Umgang mit den unterschiedlichen
      Symbolen/Definitionen zu üben.
    </p>
    <h3>Links</h3>
    <ul>
      <li>
        <a :href="$static('/dm2022/week8/notes.pdf')">Meine Notizen</a> und
        <a :href="$static('/dm2022/week8/slides.pdf')">die Slides</a>
      </li>
      <li>
        Gutes <a href="https://www.youtube.com/watch?v=XPF5fe1WdKY">Video</a> zu
        Homomorphismen
      </li>
    </ul>
    <h3 id="challenge">Challenge!</h3>
    Die ersten <i>drei</i> Personen (eingeschrieben in Diskrete Mathematik
    HS22), die mir einen <b> vollständigen</b> und <b> korrekten</b> Beweis für
    untenstehende Aufgabe per
    <a href="mailto:aellison@student.ethz.ch">Email</a>, bis spätestens am
    <b>28.11.2022 16:00 Uhr</b>, schicken, bekommen von mir
    <p>
      1. Platz: Tafel Schokolade 🍫 <br />
      2. Platz: 3 Lindt Kugeln <br />
      3. Platz: 2 Lindt Kugeln <br />
    </p>
    geschenkt. Die Email MUSS den Betreff "<i
      >[DM22] Challenge Divisible Subsequence</i
    >" enthalten. Sonst garantiere ich nicht, dass ich mir den Beweis anschaue.
    Bitte schau dir deine Abgabe gut an, bevor du ihn abschickst und überprüfe
    ob unten immer noch steht, die Challenge sei noch nicht vorbei.
    <v-card class="my-5">
      <v-card-text>
        <v-alert class="mb-4" type="info" color="primary" border="left">
          Dieser Challenge wurde noch nicht gelöst.
        </v-alert>

        <p>
          Seien
          <span v-html="$katex('a_1, a_2, \\ldots, a_n \\in \\mathbb{Z}')" />.
          Gebe einen <span v-html="$katex('\\mathcal{O}(n^2)')" /> Algorithmus
          an, der eine zusammenhängende Teilfolge
          <span v-html="$katex('a_i, a_{i + 1}, \\ldots, a_j')" /> findet mit
          <span v-html="$katex('1 \\le i \\le j \\le n')" />, so dass
          <span
            v-html="
              $katex('n \\; \\vert \\; (a_i + a_{i + 1} + \\ldots + a_j)')
            "
          />. Eine genaue Laufzeitanalyse vom angegebenen Algorithmus ist nicht
          nötig.
        </p>
        <p>
          <i>Tipp:</i> Betrachte die Summen
          <span v-html="$katex('S_i \\coloneqq \\sum_{k=1}^{i} a_k')" /> für
          <span v-html="$katex('1 \\le i \\le n')" />.
        </p>
      </v-card-text>
    </v-card>
  </default-layout>
</template>
