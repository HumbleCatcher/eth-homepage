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

    for (int i = 0; i < 1000000; i++) {
    // for (int i = 0; i < 1000; i++) {
      d = 1;
    }

    t1.start();
  }
}
