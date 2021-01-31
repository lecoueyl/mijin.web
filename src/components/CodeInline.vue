<template>
  <code
    class="font-mono font-normal text-sm"
    :class="[
      {
        'text-primary-500 dark:text-primary-400': variant === 'primary',
      }
    ]"
  >
    <slot />
  </code>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => [
        'primary',
        'secondary',
      ].includes(value),
    },
  },
});
</script>
