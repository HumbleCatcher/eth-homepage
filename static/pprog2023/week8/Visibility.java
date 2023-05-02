/*
 * Usage:
 * 1. If you run the program as it is, it will exit and print "Thread 2 finished at ..." as expected. 
 * 2. If you increase the number of iterations in the for loop at the bottom (uncomment the code), the program should now run forever when you start it (or at least it does on my machine).
 * 3a. Making `v` volatile fixes the problem.
 * 3b. Another "fix" is to run the program with the "-Xint" flag (i.e. run `java -Xint Visibility`). This disables the Just-In-Time compiler.
 * The reason the program breaks without volatile in this case is that after many iterations of the while-loop in thread `t2`, the Just-In-Time compiler kicks in and compiles the loop (from bytecode) to optimized machine code, where the read is pulled out of the loop check and is only performed once at the beginning, as opposed to reading in every iteration. The thread then misses the update to `v` and goes into an endless loop.
 */
class Visibility {

  static volatile int d;
  static int v = 0;

  public static void main(String[] args) {

    Thread t1 = new Thread() {
      public void run() {
        v = 1;
      }
    };

    Thread t2 = new Thread() {
      public void run() {
        while (v != 1);

        long done = System.nanoTime();
        System.out.format("Thread 2 finished at %d", done);
      }
    };

    t2.start();

    // for (int i = 0; i < 1000000; i++) {
    for (int i = 0; i < 1000; i++) {
      d = 1;
    }
    System.out.println("done");

    t1.start();
  }
}
