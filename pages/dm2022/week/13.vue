<template>
  <default-layout title="Diskrete Mathematik HS22 — Woche 13" back="/dm2022">
    <p>
      <b>Viel Erfolg für die Prüfung!!!</b> Zögert nicht, mir in der Lernphase
      fragen zu stellen. 🙂
    </p>

    <p>
      Für die, die in der ersten Übungsstunde anwesend waren: Jetzt solltet ihr
      wissen, was folgende Animation darstellt. 🎉
      <img width="100%" :src="$static('/dm2022/nxn-500.gif')" />
      Und <a :href="$static('/dm2022/nxn-bijection.py')">da</a> der Code dazu,
      um das zu generieren, falls es euch interessiert.
    </p>

    <h3>Übersicht</h3>
    <ul>
      <li>Prüfungs-/Lernphasetipps</li>
      <li>Prenex normal form</li>
      <li>Resolution calculus</li>
      <li>Kahoot</li>
    </ul>
    <h3>Priorität bei den Aufgaben</h3>
    <p>
      <katex t="1, 2, 4a, 4b, 5, 6, 7a" /> sind alles typische Prüfungsaufgaben.
    </p>

    <p>
      Die restlichen Aufgaben würden eher nicht an der Prüfung kommen, aber sie
      sind wieder gut, um den Stoff besser zu verstehen.
    </p>
    <h3>Links</h3>
    <ul>
      <li>
        <a :href="$static('/dm2022/week13/notes.pdf')">Meine Notizen</a>
        ,
        <a :href="$static('/dm2022/week13/slides.pdf')">die Slides</a> und
        <a
          href="https://create.kahoot.it/details/76017d49-5ef2-41ff-a465-c79210d52daa"
          >das Kahoot</a
        >.
      </li>
    </ul>
  </default-layout>
</template>
