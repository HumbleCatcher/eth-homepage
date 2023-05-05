public class ReentrantBarrierA {

    final int N;
    boolean draining = false;
    int count = 0;

    ReentrantBarrierA(int N) {
        this.N = N;
    }

    void await() throws InterruptedException {
        synchronized (this) {
            while (draining) {
                wait();
            }
            count++;
            while (count < N && !draining) {
                wait();
            }
            if (count == N) {
                draining = true;
                notifyAll();
            }
            count--;
            if (count == 0) {
                draining = false;
                notifyAll();
            }
        }
    }
}
