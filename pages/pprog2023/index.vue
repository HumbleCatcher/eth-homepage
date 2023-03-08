<template>
  <default-layout title="Parallel Programming FS23" back="/">
    <collapsible-header size="3" text="Time & Location">
      <ul>
        <li>
          Wednesday — 16:15-18:00 —
          <a
            target="_blank"
            href="https://www.rauminfo.ethz.ch/Rauminfo/grundrissplan.gif?gebaeude=ETZ&geschoss=K&raumNr=91"
          >
            ETZ K 91
          </a>
        </li>
        <li>
          Friday — 10:15-12:00 —
          <a
            target="_blank"
            href="https://www.rauminfo.ethz.ch/Rauminfo/grundrissplan.gif?gebaeude=CLA&geschoss=E&raumNr=4"
          >
            CLA E 4
          </a>
        </li>
      </ul>
    </collapsible-header>

    <collapsible-header size="3" text="Contact">
      <ul>
        <li>Name: Andreas Ellison</li>
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

    <collapsible-header size="3" text="Resources">
      <ul>
        <li>
          <a
            target="_blank"
            href="https://docs.oracle.com/en/java/javase/19/docs/api/java.base/java/util/concurrent/package-summary.html"
            >Documentation for <code>java.util.concurrent</code></a
          >
        </li>
        <li>
          <a
            href="https://docs.oracle.com/javase/specs/jls/se19/html/jls-17.html"
            >Section on Threads and Locks</a
          >
          from the
          <a
            href="https://docs.oracle.com/javase/specs/jls/se19/html/index.html"
            >Java
            Language Specification</a
          >. The Java Language Specification defines the semantics of the
          language, i.e. what behavior the programmer can expect when writing a
          program in Java. Any implementation of the JVM must adhere to this specification.
        </li>
        <li>
          <a
            href="https://cdn.vis.ethz.ch/luk/pvw_paralleleprogrammierung.pdf"
            target="_blank"
            rel="noopener noreferrer"
            >PVW script</a
          >
          (not official)
        </li>
      </ul>

      <collapsible-header size="4" text="Part 1">
        <ul>
          <li>
            <a
              href="https://cgl.ethz.ch/teaching/parallelprog22/pages/terminology.html"
              target="_blank"
              rel="noopener noreferrer"
              >Terminology</a
            >
          </li>
          <li>
            Official
            <a
              href="https://docs.oracle.com/javase/tutorial/essential/concurrency/index.html"
              >Java tutorials</a
            >
            on concurrency
          </li>
          <li>
            Java 
            <a
              href="https://docs.oracle.com/javase/specs/jvms/se19/html/jvms-6.html"
              >bytecode instruction set</a
            >. 
            This is only interesting if you want to inspect the bytecode of a compiled Java
            program. This can be done with
            <code>javap -c path/to/MyClass.class</code> on the command line or
            online at <a href="https://godbolt.org/">https://godbolt.org/</a>.
          </li>
        </ul>
      </collapsible-header>
    </collapsible-header>

    <h3>Exercise sessions</h3>
    <collapsible-header size="4" text="Week 2">
      <ul>
        <li>
          <a :href="$static('/pprog2023/week2/notes.pdf')">"Derivation"</a> for
          why we need a scheduler, processes and threads
        </li>
        <li>
          Part two, chapters 3 and 4 of
          <a
            href="https://drive.uqu.edu.sa/_/mskhayat/files/MySubjects/2017SS%20Operating%20Systems/Abraham%20Silberschatz-Operating%20System%20Concepts%20(9th,2012_12).pdf"
            >this</a
          >
          book are about processes and threads, if you want to read more about
          the topic. <br />
          <b>Note:</b> Having a deep understanding of processes and threads in
          an OS is <b>not exam relevant</b> for this course.
        </li>
        <li>
          <a :href="$static('/pprog2023/week2/demo.zip')">Demo</a> (Eclipse
          project) of summing up the values in an array with Java threads
        </li>
        <li>
          <a :href="$static('/pprog2023/week2/quiz.pdf')">Quiz</a>
        </li>
      </ul>
    </collapsible-header>
    <collapsible-header size="4" text="Week 3">
      <ul>
        <li>
          Official (well written!)
          <a
            href="https://docs.oracle.com/javase/tutorial/essential/concurrency/sync.html"
            >Java tutorial</a
          >
          on synchronization (introduces the need for
          <code>synchronized</code> similar to the lecture)
        </li>
      </ul>
    </collapsible-header>
  </default-layout>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style lang="sass" scoped></style>
