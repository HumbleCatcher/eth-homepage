<template>
  <div>
    <div
      @click="active = !active"
      class="d-flex ml-n2"
      :class="`h${size}-margin`"
      style="cursor: pointer"
    >
      <div class="mt-1 d-flex" :class="{ active }">
        <v-icon>mdi-menu-right</v-icon>
      </div>
      <component :is="`h${size}`" style="display: inline" class="ma-0" :id="text.replace(/\W+/g, '-').toLowerCase()">
        {{ text }}
      </component>
    </div>
    <div v-show="active">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    size: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      active: false,
    };
  },
});
</script>

<style lang="sass" scoped>
.active
  transform: rotate(90deg)
  transition: .3s cubic-bezier(.25,.8,.5,1) 0s
</style>
