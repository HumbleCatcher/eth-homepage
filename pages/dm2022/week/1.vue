<template>
  <default-layout title="Diskrete Mathematik HS22 - Woche 1" back="/dm2022">
    <h3>Übersicht</h3>
    <ul>
      <li>Einführung</li>
      <li>Besprechung Aufgaben (1.1 und) 1.2 von der Serie</li>
      <li>Logik: Beispiele, Repetition und Aufgaben</li>
      <li>Hilbert's Hotel (falls Zeit übrig)</li>
    </ul>
    <collapsible-header size="3" text="Notizen" class="ma-0">
      <embed
        src="/notes/dm2022/week1.pdf"
        type="application/pdf"
        width="100%"
        height="800px"
      />
    </collapsible-header>
    <h3>Ressourcen</h3>
    <ul>
      <li>
        <a
          target="_blank"
          href="https://polybox.ethz.ch/index.php/s/WXf1p3ODpDdpnRH?path=%2F1.%20Semester%2F2%20DiskMath%2F3%20Exercises%2FHS20"
          >Polybox</a
        >
        - Hilbert's Hotel (u01.pdf)
      </li>
      <li><nuxt-link to="/logic-tools"> Kleine Tools für Logik </nuxt-link></li>
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
