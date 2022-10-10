<template>
  <default-layout title="Diskrete Mathematik HS22" back="/">
    <collapsible-header size="3" text="Termine">
      <div>
        <h4>Vorlesung</h4>
        Montag / Mittwoch — 14-16 —
        <a
          target="_blank"
          href="https://www.rauminfo.ethz.ch/Rauminfo/grundrissplan.gif?gebaeude=CAB&geschoss=G&raumNr=56&lang=de"
        >
          ETA F 5
        </a>

        <h4>Übungsstunde</h4>
        Montag — 16-18 —
        <a
          target="_blank"
          href="http://www.rauminfo.ethz.ch/Rauminfo/grundrissplan.gif?gebaeude=CAB&geschoss=G&raumNr=56&lang=de"
        >
          CAB G 56
        </a>
      </div>
    </collapsible-header>

    <collapsible-header size="3" text="Kontakt">
      <ul>
        <li>Je m'appelle Andreas Ellison</li>
        <li>
          Email:
          <a href="mailto:aellison@student.ethz.ch">aellison@student.ethz.ch</a>
        </li>
        <li>
          Discord: HumbleCatcher#1527 <br />
          (I prefer this over email, don't hesitate to ask me questions 🙂)
        </li>
      </ul>
    </collapsible-header>

    <collapsible-header size="3" text="Links">
      <ul>
        <li>
          <a target="_blank" href="https://crypto.ethz.ch/teaching/DM22/"
            >Vorlesungswebseite</a
          >
        </li>
        <li>
          <a
            target="_blank"
            href="https://crypto.ethz.ch/teaching/DM22/ln/DM22_LN_tablet_z21nvff0ch2gj1ol0mt1.pdf"
            >le Skript</a
          >
        </li>
        <li>
          <a target="_blank" href="https://dm.crypto.ethz.ch/"> Serien</a>
        </li>
        <li>
          <a
            href="https://polybox.ethz.ch/index.php/s/WXf1p3ODpDdpnRH?path=%2F1.%20Semester%2F2%20DiskMath%2F3%20Exercises"
            target="_blank"
            rel="noopener noreferrer"
            >Alte Serien</a
          >
        </li>
        <li>
          <a
            href="https://exams.vis.ethz.ch/category/DiskreteMathematik"
            target="_blank"
            rel="noopener noreferrer"
            >Alte Prüfungen</a
          >
        </li>
        <li>
          <a
            href="https://cdn.vis.ethz.ch/luk/pvw_diskretemathematik.pdf"
            target="_blank"
            rel="noopener noreferrer"
            >PVW Skript</a
          >
          (Zusammenfassung aller Themen + Aufgaben)
        </li>
      </ul>
    </collapsible-header>

    <h3>Übungsstunden</h3>
    <ul>
      <li>
        <NuxtLink to="/dm2022/week/1"> Woche 1 </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/dm2022/week/2"> Woche 2 </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/dm2022/week/3"> Woche 3 </NuxtLink>
      </li>
    </ul>
  </default-layout>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style lang="sass" scoped></style>
