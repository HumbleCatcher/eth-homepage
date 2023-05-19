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
          Documentation for
          <a
            target="_blank"
            href="https://docs.oracle.com/en/java/javase/19/docs/api/java.base/java/util/concurrent/package-summary.html"
            ><code>java.util.concurrent</code></a
          >
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
            >. This is only interesting if you want to inspect the bytecode of a
            compiled Java program. This can be done with
            <code>javap -c path/to/MyClass.class</code> on the command line or
            online at <a href="https://godbolt.org/">https://godbolt.org/</a>.
          </li>
          <li>
            <a
              href="https://docs.oracle.com/javase/7/docs/api/java/lang/Thread.State.html"
              >List</a
            >
            of Java Thread states and their meaning
          </li>
        </ul>
      </collapsible-header>
      <collapsible-header size="4" text="Part 2">
        <ul>
          <li>
            Overall,
            <a href="https://dl.acm.org/doi/pdf/10.5555/2385452"
              >"The Art of Multiprocessor Programming"</a
            >
            is a very very good resource for this part of the course. It is very
            well written and covers almost all topics of the lecture in depth.

            <ul>
              <li>
                Chapter 2 (p. 21): Covers the mutual exclusion algorithms from
                the lecture, with proofs.
              </li>
              <li>
                Chapter 7, 7.1-7.4 (p. 141): Covers TAS, TATAS and exponential
                backoff locks.
              </li>
              <li>
                Chapter 8 (p. 177): Covers monitors, semaphores and the
                readers-writers lock, but a bit differently to the lecture.
              </li>
              <li>
                Chapter 9 (p. 195): The content on lock granularity from the
                lecture is based on this chapter in the book and follows it very
                closely. The book is a nice reference here especially for
                implementations of the algorithms.
              </li>
            </ul>
          </li>
          <li>
            Resources on the Java memory model:
            <ul>
              <li>
                <a
                  href="#https://docs.oracle.com/en/java/javase/19/docs/api/java.base/java/util/concurrent/package-summary.html#MemoryVisibility"
                  >Short</a
                >
                summary of happens-before from the Java documentation.
              </li>
              <li>
                Official
                <a href="https://rsim.cs.uiuc.edu/Pubs/popl05.pdf">paper</a>
                explaining the memory model. It should be understandable.
                Alternatively, you can read the official
                <a
                  href="https://docs.oracle.com/javase/specs/jls/se11/html/jls-17.html#jls-17.4"
                  >specification</a
                >, which is more compact but has less explanations. If you
                choose the specification, I can recommend reading up to and
                including section 17.4.5.
              </li>
              <li>
                A nice
                <a href="https://www.youtube.com/watch?v=WTVooKLLVT8">talk</a>
                on the Java memory model.
              </li>
              <li>
                Chapter 16.1 (p. 337) of the book
                <a
                  href="https://leon-wtf.github.io/doc/java-concurrency-in-practice.pdf"
                  >"Java Concurrency in Practice"</a
                >
                has an explanation of the Java memory model.
              </li>
              <li>
                An introductory
                <a
                  href="https://www.cs.utexas.edu/~bornholt/post/memory-models.html"
                  >blog article</a
                >
                on memory models in general.
              </li>
            </ul>
          </li>
        </ul>
      </collapsible-header>
    </collapsible-header>

    <collapsible-header size="3" text="FAQ">
      <collapsible-header
        size="4"
        text="Race condition vs. bad interleaving vs. data race"
      >
        <h5>Bad interleaving</h5>
        Bad interleavings are bugs which, as the name nicely suggests, can occur
        in a program due to an unexpected interleaving of the instructions in
        different threads <i>in program order</i> (we also assume that memory
        operations behave as expected, i.e. the execution is sequentially
        consistent). The easiest example is a (volatile) counter:
        <pre class="my-4"><code v-highlight class="java">public class Counter {
    volatile int count = 0;

    public void increment() {
        c = c + 1;
    }
}</code></pre>

        If threads A and B both execute <code>increment</code> at the same time,
        we can get an interleaving where <code>c</code> only gets incremented
        once. In this case the bad interleaving can be spotted immediately, but
        this kind of bug can be much much more subtle (think of why we need to
        lock both the predecessor and the node itself when removing a node in a
        sorted linked list with fine-grained locking). It is also the most
        common bug we run into when writing concurrent algorithms, since it is
        direct consequence of a mistake, often an edge-case, in the logic of our
        program. What makes it difficult to spot is the large number of possible
        interleavings of the instructions of different threads.
        <h5>Data race</h5>

        Data races are a much more unnatural type of bug. They occur due to
        inadequate synchronization and result in behavior allowed by the memory
        model (to execute code more efficiently), but unexpected for the
        programmer.

        <h6>Simple example</h6>
        Consider the following (pseudo) Java code run by two threads, where
        initially <code>A = B = 0</code>:

        <v-row class="my-4">
          <v-col>
            <pre><code v-highlight class="java">// thread A
B = 42
A = 1

</code></pre>
          </v-col>
          <v-col>
            <pre><code v-highlight class="java">// thread B
if (A == 1) {
  print(B)
}</code></pre>
          </v-col>
        </v-row>

        Despite what one would naively expect, in Java it is possible for thread
        B to print <code>0</code> here. This doesn't make sense if we assume
        sequential consistency; under sequential consistency, if thread B sees
        thread A's write to <code>A</code>, it should also see its write to
        <code>B</code>. But the Java Memory Model does not guarantee sequential
        consistency. The actual reason for this behavior might be that the core
        thread A was running on decided to write to <code>B</code> only after
        writing to <code>A</code> (a reordering), so that thread B sees
        <code>A = 1</code>, but when it reads <code>B</code>, thread A has not
        yet written to it.

        <collapsible-header size="6" text="More practical example">
          A more involved and practical example is the Peterson lock, where
          <code>flag</code> and <code>victim</code> are not volatile:

          <pre class="my-5"><code v-highlight class="java">flag[id] = true;
victim = id;
while (victim == id && flag[1 - id]);
// CS
flag[id] = false;
</code></pre>

          There are multiple ways the algorithm can go wrong, but for instance
          an execution is possible where:
          <ul>
            <li>Thread A sets its flag and writes to victim.</li>
            <li>
              At the same time, thread B sets its flag, writes to victim after
              A, sees that it is the victim but does not see thread A's flag as
              set, so it enters the CS.
            </li>
            <li>
              Thread A sees that B has set itself as victim and enters the CS.
            </li>
          </ul>
          <v-divider class="my-3" />
        </collapsible-header>

        This type of bug is <i>not</i> the result of a bad interleaving and is a
        different kind of error, which is why we give it its own name.
        Informally, a program has a data race when
        <ul>
          <li>multiple threads access a shared variable</li>
          <li>at least one of the accesses is a write</li>
          <li>the accesses are not "properly synchronized"</li>
        </ul>
        The reason why this is imprecise is that what is means for a program to
        be "properly synchronized" depends on the rules of the underlying memory
        model and the available synchronization tools. In Java, these tools
        would be <code>volatile</code>, using locks, etc. as described by the
        specification. It is important to note that the problem is usually not
        directly the fact that multiple threads write and read the same
        variable, but that we make assumptions about what operations other
        threads have completed based on a value we read from them.
        <h5>Race condition</h5>
        Defining race conditions is now easy, but still confusing since there
        are two different definitions you might come across. Even parts 1 and 2
        of the lecture don't seem to agree on this definition.

        <h6>Definition A</h6>
        Race conditions is synonymous with bad interleaving. This implies that a
        data race is not a race condition.

        <h6>Definition B</h6>
        Race condition is an umbrella term for the two types of bugs we have:
        bad interleavings and data races.
        <pre v-highlight class="plaintext my-4"><code>        race condition
        /            \
bad interleaving     data race
</code>
</pre>
      </collapsible-header>
    </collapsible-header>
    <collapsible-header
      size="4"
      text="Is caching a valid reason for why a thread reading a non-volatile variable might not see a write to it by another thread?"
    >
      <p>
        No. Modern architectures have a <i>cache coherency protocol</i>, which
        ensures that all processors have a coherent view of a
        <i>fixed</i> memory location (all writes eventually become visible and
        are seen in the same order; the view of the single memory location will
        be sequentially consistent). The protocol is implemented in hardware and
        the simplest example to get an idea of it is
        <a href="https://en.wikipedia.org/wiki/MSI_protocol">MSI</a>. (You will
        learn more about these protocols in SPCA.)
      </p>
      <p>
        One way that visibility problems may occur is through compiler
        optimizations. This is what breaks the Java program I showed in week 9:
        the JIT compiler optimizes away a read to a variable, which makes it
        look like thread 1 does not see the write by thread 2 (an optimization
        allowed by the Java Memory Model since the accesses are non-volatile).
        Disabling the JIT compiler (so that the read is really executed) fixes
        the problem.
      </p>
    </collapsible-header>

    <collapsible-header
      size="4"
      text="In lock proofs, what progress assumptions do we make?"
    >
      We assume that threads always make progress when executing
      <code>lock</code>, the CS or <code>unlock</code>, but make no assumptions
      outside these parts of our code. This means that it is not possible for a
      thread to "die" or never get scheduled in these parts of the algorithm, or
      to get stuck in an endless loop in the CS. Because we need these
      assumptions for the locks (and algorithms using locks) to work, we call
      them <i>blocking</i> algorithms. See the quiz in week 12 for more details
      on blocking vs. nonblocking.
    </collapsible-header>
    <collapsible-header
      size="4"
      text='What exactly is the "non-critical section" when we talk about lock algorithms?'
    >
      The mental picture to have in mind of what is going on when we talk about
      lock algorithms is some program like this:

      <pre><code v-highlight class="plaintext my-4">// non-CS code (part of some program)
// ...
// ...
// now we would like to use the lock
lock()
// CS
unlock()
// more non-CS code
// ...
// ...
// use the lock again
lock()
// CS
unlock()
// etc.
</code></pre>

      Since we are only interested in our lock, we simplify it do this, as in
      the lecture:

      <pre><code v-highlight class="plaintext my-4">// non-CS code
lock()
// CS
unlock()
</code></pre>

      A thread may run these steps infinitely many times. In the non-CS part, we
      don't make any assumptions: a thread may die, not get scheduled, protest
      for more scheduling rights, etc., but the most intuitive situation to
      imagine is that a thread may simply no longer be interested in using the
      lock anymore, and so will stay in the non-CS section.
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
          <a :href="$static('/pprog2023/week3/demo.zip')">Demo</a> from class
        </li>
        <li><a :href="$static('/pprog2023/week3/quiz.pdf')">Quiz</a></li>
        <li>
          Official (well written!)
          <a
            href="https://docs.oracle.com/javase/tutorial/essential/concurrency/sync.html"
            >Java tutorial</a
          >
          on synchronization (introduces the need for
          <code>synchronized</code> similar to the lecture)
        </li>
        <li>
          Documentation for
          <a
            href="https://docs.oracle.com/javase/8/docs/api/index.html?java/util/concurrent/atomic/package-summary.html"
          >
            <code>java.util.concurrent.atomic</code>
          </a>
        </li>
        <li>
          Java
          <a
            href="https://docs.oracle.com/javase/specs/jls/se11/html/jls-17.html#jls-17.2"
            >specification of wait and notify</a
          >
          . It turns out that the internal list of waiting threads is called the
          <i>wait set</i> and not the <i>wait list</i>.
        </li>
      </ul>
    </collapsible-header>
    <collapsible-header size="4" text="Week 4">
      <div>
        <ul>
          <li>
            My <a :href="$static('/pprog2023/week4/notes.pdf')">notes</a> on
            parallelism vs. concurrency and pipelining
          </li>
          <li>
            HS20 wait and notify task:
            <a :href="$static('/pprog2023/week4/hs20.zip')">code template</a>
            and
            <a
              href="https://exams.vis.ethz.ch/exams/fchg2dbb.pdf#ty77o721azvumecq"
              >link to exam</a
            >
          </li>
          <li>
            <a :href="$static('/pprog2023/week4/plots.zip')">Plots</a> shown in
            class and the
            <a :href="$static('/pprog2023/week4/demo_performance.zip')">code</a>
            used to generate them (first run the Java program, then run the
            script <code>plot.py</code>). Please let me know if you find any
            mistakes in the code to generate the data!
          </li>
        </ul>
        <p>
          The first few people to email me a solution to the following challenge
          before
        </p>
        <ul>
          <li>22.03.2023 4 PM for the Wednesday group</li>
          <li>24.03.2023 10 AM for the Friday group</li>
        </ul>
        <p>gets bar of chocolate. 🍫</p>
        <v-card class="my-5">
          <v-card-text>
            <v-alert
              class="mb-4"
              type="success"
              border="left"
              :outlined="$vuetify.theme.dark"
            >
              This challenge was successfully solved by
              <code>jusdai</code> and <code>jpotempa</code>. Congrats!
            </v-alert>
            Prove that for an arbitrary pipeline with exactly one "execution
            unit" per stage (e. g. if one stage were to use the washing machine,
            then there would only be one washing machine available) the
            following holds:
            <p class="text-center">
              the pipeline is <i>balanced</i> <katex t="\iff" /> no stage is
              longer than the first
            </p>

            <b>Note:</b> A pipeline is <i>balanced</i> if all iterations have
            the same latency.
          </v-card-text>
        </v-card>
      </div>
    </collapsible-header>
    <collapsible-header size="4" text="Week 5">
      <div>
        <ul>
          <li>
            My <a :href="$static('/pprog2023/week5/notes.pdf')">proofs</a> on
            pipelining
          </li>
          <li>
            The
            <a
              href="https://cdn.vis.ethz.ch/luk/pvw_paralleleprogrammierung.pdf#subsubsection.2.1.2"
              >chapters</a
            >
            in the PVW script on Amdahl's and Gustafson's laws might be helpful
            for the exercises
          </li>
        </ul>
      </div>
    </collapsible-header>
    <collapsible-header size="4" text="Week 6">
      <div>
        <ul>
          <li>
            My <a :href="$static('/pprog2023/week6/notes.pdf')">notes</a> on
            Amdahl's and Gustafson's laws. The explanation in the exercise
            session slides (on Moodle) is also good.
          </li>
          <li>
            <a
              href="https://create.kahoot.it/share/week-6/51f4f1d4-dad1-401a-bb69-694a64d4cfd3"
              >Kahoot</a
            >
            and
            <a :href="$static('/pprog2023/week6/quiz.pdf')"
              >short explanations</a
            >
            for some of the pipelining questions.
          </li>
        </ul>
        <p>
          The following resources are interesting if you're curious about the
          history behind Amdahl's and Gustafson's "laws" and why they exist.
        </p>
        <ul>
          <li>
            The
            <a href="https://dl.acm.org/doi/pdf/10.1145/42411.42415">paper</a>
            that introduced Gustafson's law (relatively easy to read)
          </li>
          <li>
            <a
              href="https://link.springer.com/referenceworkentry/10.1007/978-0-387-09766-4_77#Sec5_77 "
              >History</a
            >
            behind Amdahl's law (you will need to use your ETH login to access
            the article)
          </li>
        </ul>
      </div>
    </collapsible-header>
    <collapsible-header size="4" text="Week 7">
      <div>
        Please fill out the
        <a href="https://moodle-app2.let.ethz.ch/mod/forum/discuss.php?d=124335"
          >feedback form</a
        >!
        <ul>
          <li>
            Exercises we solved in class:
            <ul>
              <li>
                <a
                  href="https://moodle-app2.let.ethz.ch/pluginfile.php/1537688/mod_resource/content/1/2021 Summer Questions.pdf"
                  >Task graphs</a
                >
                (FS21, Moodle link)
              </li>
              <li>
                <a
                  href="https://exams.vis.ethz.ch/exams/9hikmoi9.pdf#43reev20w7od3ymy"
                  >Fork/Join</a
                >
                (FS19)
              </li>
            </ul>
          </li>
          <li>
            <a
              href="https://create.kahoot.it/share/week-7/6ede586b-7ca4-4951-b353-8818d18c4be3"
              >Kahoot</a
            >
          </li>
        </ul>
        <p>Some advanced resources, beyond the scope of the course:</p>
        <ul>
          <li>
            <a href="https://gee.cs.oswego.edu/dl/papers/fj.pdf">Paper</a> on
            how the Fork/Join framework is implemented in Java on a high level
          </li>
          <li>
            Chapter 16 of
            <a href="https://dl.acm.org/doi/pdf/10.5555/2385452">this</a> book
            is a much more advanced resource on task parallelism, if you want to
            have a peek at what more there is to the topic (e.g. it discusses
            the most relevant theoretical results and gives an implementation of
            a work-stealing scheduler in Java).
          </li>
          <li>
            A
            <a href="http://supertech.csail.mit.edu/papers/steal.pdf"
              >theoretical paper</a
            >
            on an algorithm for work-stealing scheduling which was referenced in
            the lecture slides
          </li>
        </ul>
      </div>
    </collapsible-header>
    <collapsible-header size="4" text="Week 8">
      <div>
        <ul>
          <li>
            The
            <a href="https://www.baeldung.com/java-deadlock-livelock#livelock"
              >livelock example</a
            >
            from class.
          </li>
          <li>
            <a :href="$static('/pprog2023/week8/demo.zip')">Demo code</a> of a
            CAS lock and the
            <a :href="$static('/pprog2023/week8/plots.zip')">plots</a> I showed
            in class. The
          </li>
          <li>
            The
            <a :href="$static('/pprog2023/week8/Visibility.java')"
              >Java program</a
            >
            with unexpected behavior that I showed at the end.
          </li>
          <li>
            There are links to some useful resources on the current topics at
            the top of the page (under "Part 2").
          </li>
        </ul>
      </div>
    </collapsible-header>
    <collapsible-header size="4" text="Week 9">
      <ul>
        <li>
          There are links to some useful resources on the current topics at the
          top of the page (under "Part 2").
        </li>
        <li>
          Proofs showing that the Filter lock satisfies mutual exclusion and
          starvation freedom can be found on page 30 of
          <a href="https://dl.acm.org/doi/pdf/10.5555/2385452"
            >"The Art of Multiprocessor Programming"</a
          >. The same can be found for the bakery lock later on.
        </li>
      </ul>
    </collapsible-header>
    <collapsible-header size="4" text="Week 10">
      <collapsible-header
        size="5"
        text="Types of exercises that might come up in the exam"
      >
        <i
          >Disclaimer: This list is not guaranteed to be complete and is only
          meant to give you an idea of what has been asked on previous exams.</i
        >
        <h6>Locks</h6>
        Usually there are not too many question on this topic.
        <ul>
          <li>
            true/false questions of which lock has which properties (fairness,
            starvation free)
          </li>
          <li>
            find bug in lock code (violation of mutual exclusion or deadlock
            freedom)
          </li>
          <li>
            draw state space diagram and/or read off correctness properties
          </li>
          <li>reproduce Peterson/Filter/Bakery lock</li>
          <li>
            prove correctness of Peterson lock or similar (but not Filter or
            Bakery)
          </li>
        </ul>
        <h6>Monitors, semaphores, barriers</h6>
        <ul>
          <li>semaphore implementation (mostly with monitors)</li>
          <li>(never seen rendezvous with semaphores in an exam)</li>
          <li>barrier implementation (mostly with monitors)</li>
          <li>
            (only seen a task on implementing a barrier with semaphores
            <i>once</i> in
            <a href="https://exams.vis.ethz.ch/exams/i0svp1fh.pdf">FS21</a>, 8b)
          </li>
          <li>
            fill out some program using monitors (similar to wait/notify
            exercises, maybe with lock conditions)
          </li>
        </ul>
      </collapsible-header>
      <h5>What we did in class</h5>
      <ul>
        <li>
          Barriers:
          <ul>
            <li>
              <a :href="$static('/pprog2023/week10/NonReentrantBarrier.java')"
                >Code</a
              >
              for a non-reusable barrier using <code>wait/notify</code>.
            </li>
            <li>
              Exercises on correctness of barrier implementations:
              <a
                href="https://exams.vis.ethz.ch/exams/9hikmoi9.pdf#1bndn3yepyvb83ve"
                >FS19, 11a</a
              >,
              <a
                href="https://exams.vis.ethz.ch/exams/a3cnbqqz.pdf#khd4g25ed4mqut1u"
                >HS14 3c</a
              >
              (there was no time for this during the session)
            </li>
            <li>
              Code for
              <a :href="$static('/pprog2023/week10/ReentrantBarrierA.java')"
                >first</a
              >
              (more recommended for exam) and
              <a :href="$static('/pprog2023/week10/ReentrantBarrierB.java')"
                >second</a
              >
              (more elegant, but less convenient for the exam because of the use
              of <code>ThreadLocal</code>) implementation of a reentrant barrier
              using <code>wait/nofity</code>.
            </li>
          </ul>
        </li>
        <li>
          <a
            href="https://create.kahoot.it/details/83af624d-e523-4dfa-b729-9166effed589"
            >Kahoot</a
          >
        </li>
      </ul>
    </collapsible-header>
    <collapsible-header size="4" text="Week 11">
      <ul>
        <li>
          <a
            href="https://create.kahoot.it/details/4d0a743a-7fd3-4361-bd49-b09c0e83ec7a"
            >Kahoot</a
          >
        </li>
        <li>
          Up to date
          <a :href="$static('/pprog2023/week11/solution.pdf')">solution</a> for
          why the Peterson lock works in Java.
        </li>
        <li>
          I can very much recommend the book chapter on "lock granularity" from
          "The Art of Multiprocessor Programming" (see resources above) for
          further reference on the topic. It has code for most of the
          operations, so it's especially useful if you're stuck with this week's
          assignment.
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
