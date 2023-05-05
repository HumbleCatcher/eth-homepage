public class ReentrantBarrierB {

  final int N;
  int count = 0;
  boolean r = false;
  /*
   * In class I used an array `boolean[] round`. That approach requires having 
   * access to thread ID's between 0 and N - 1, which we don't normally have 
   * when using threads in Java. (The JVM spawns its own threads, so the ID's 
   * of threads started by the user will not necessarily be contiguous or start 
   * at 0.)
   * `ThreadLocal` is a simple class for storing a field which is stored locally 
   * for each thread accessing it. So when a thread calls `round.get()` or 
   * `round.set(...)` it is only changing it's local value and not the value of 
   * other threads.
   */
  ThreadLocal<Boolean> round = new ThreadLocal<Boolean>() {
    protected Boolean initialValue() {
      return false;
    }
  };

  ReentrantBarrierB(int N) {
    this.N = N;
  }

  void await() throws InterruptedException {
    synchronized (this) {
      count++;
      while (count < N && r == round.get()) {
        wait();
      }
      if (count == N) {
        r = !r;
        count = 0;
        notifyAll();
      }
      round.set(!round.get());
    }
  }
}
