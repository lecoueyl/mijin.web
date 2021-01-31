<template>
  <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
      shape-rendering="geometricPrecision"
      :aria-labelledby="name"
      role="presentation"
      class="inline-block h-6 w-6"
    >
      <g v-html="svg" />
    </svg>

    <h4 class="text-xs text-gray-800 dark:text-gray-300 pt-4 select-all">
      {{ name }}
    </h4>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    name: {
      type: String,
      required: true,
    },

    svg: {
      type: String,
      required: true,
    },
  },
});
</script>
