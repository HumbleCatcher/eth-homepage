# source: https://matplotlib.org/stable/gallery/animation/simple_anim.html
import math
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation
import sys

T = 1


def f(n):
    # From the proof of Theorem 3.19. in the script. It helps to draw a picture.
    global T
    while math.comb(T + 1, 2) <= n:
        T += 1
    m = n - math.comb(T, 2)
    k = T - 1 - m
    return k, m


n = 100 if len(sys.argv) == 1 else int(sys.argv[1])
X, Y = zip(*[f(i) for i in range(n)])
X_max = max(X)
Y_max = max(Y)

fig, ax = plt.subplots()
x = []
y = []
(plot,) = ax.plot(
    [], [], "-o", color="black", markerfacecolor="orange", markersize=3, linewidth=1
)


def init():
    xlim = X_max + int(0.1 * X_max)
    ylim = Y_max + int(0.1 * Y_max)

    ax.set_xlim(-1 / 2, xlim)
    ax.set_ylim(-1 / 2, ylim)

    step = max(int(math.log10(max(xlim, ylim))) * 5, 1)
    ax.set_xticks(range(0, xlim + 1), minor=True)
    ax.set_xticks(range(0, xlim + 1, step))
    ax.set_yticks(range(0, ylim + 1), minor=True)
    ax.set_yticks(range(0, ylim + 1, step))
    # grid is drawn at ticks
    ax.grid(which="both")

    ax.set_xlabel("$\mathbb{N}$", fontsize=16)
    ax.set_ylabel("$\mathbb{N}$", fontsize=16)
    ax.set_title(f"$n = 1 \ldots {n}$", fontsize=14)

    return (plot,)


def update(i):
    x.append(X[i])
    y.append(Y[i])
    plot.set_data(x, y)
    return (plot,)


ani = FuncAnimation(fig, update, frames=range(n), blit=True, init_func=init)
ani.save("animation.gif")
