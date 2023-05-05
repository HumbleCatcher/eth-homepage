public class NonReentrantBarrier {

    final int N;
    int count = 0;

    NonReentrantBarrier(int N) {
        this.N = N;
    }

    void await() throws InterruptedException {
        synchronized (this) {
            count++;
            while (count < N) {
                wait();
            }
            notify();
        }
    }
}
