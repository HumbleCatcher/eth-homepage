<template>
  <default-layout title="Diskrete Mathematik HS22 - Woche 9" back="/dm2022">
    <h3>Übersicht</h3>
    <ul>
      <li>Die Eulerfunktion</li>
      <li>Diffie-Hellman und RSA</li>
      <li>Modulare Arithmetik Tricks</li>
      <li>Kahoot</li>
    </ul>
    <h3>Priorität bei den Aufgaben</h3>
    <ul>
      <li>
        Typische Prüfungsaufgaben:
        <katex t="2\; a), 2\; b), 2\; d), 4, 6 > 5" />
      </li>
      <li>
        Beweisaufgaben (so Sachen können auch an der Prüfung kommen):
        <katex t="1, 2 \; c) > 3" />
      </li>
    </ul>
    <h4>Tipps:</h4>
    <ol>
      <li>
        <ol type="a">
          <li>
            Erinnert euch an folgende Tatsache von letzter Woche:
            <katex
              t="g \text{ generiert } \mathbb{Z_n} \implies \gcd(g, n) = 1"
              block
            />
          </li>
        </ol>
      </li>
      <li>
        <ol start="3" type="a">
          <li>
            Der Chinese Remainder Theorem könnte nützlich sein. Auch wenn ihr
            nicht auf ein Beweis kommt, die Aussage in dieser Aufgabe ist
            wichtig zu kennen.
          </li>
          <li>Man muss c nicht geschafft haben, um das zu lösen.</li>
        </ol>
      </li>
      <li>
        Ihr dürft annehmen, dass die dritte Wurzel einer Zahl in
        <katex t="\mathbb{Z}" /> effizient berechnet werden kann.
      </li>
    </ol>
    <h3>Links</h3>
    <ul>
      <li>
        <a :href="$static('/dm2022/week9/notes.pdf')">Meine Notizen</a> und
        <a :href="$static('/dm2022/week9/slides.pdf')">die Slides</a>
      </li>
    </ul>
  </default-layout>
</template>
