<template>
  <div
    v-html="$katex(t)"
    :class="{
      'py-4': block,
      'text-center': block,
      'd-inline': !block,
    }"
  />
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    t: {
      type: String,
      required: true,
    },
    block: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
