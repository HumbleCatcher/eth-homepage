export function reloadMathjax() {
  if (window.MathJax) {
    window.MathJax.typeset();
  }
}
