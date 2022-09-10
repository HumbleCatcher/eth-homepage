<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  methods: {
    reloadMathjax(): void {
      // @ts-ignore
      if (window.MathJax) {
        // @ts-ignore
        window.MathJax.typeset();
      }
    },
  },
});
</script>
