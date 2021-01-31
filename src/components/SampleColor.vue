<template>
  <div>
    <div
      v-for="(value, variation, index) in color"
      :key="variation"
      class="p-3 relative group"
      :class="[
        parseInt(variation, 10) < 500 ? 'text-gray-900' : 'text-gray-50',
        `bg-${name}-${variation}`,
        {
          'rounded-t-lg': index === 0,
          'rounded-b-lg': index === Object.keys(color).length - 1,
        },
      ]"
    >
      {{ name }}-{{ variation }}

      <button
        v-clipboard:copy="`${name}-${variation}`"
        v-clipboard:success="onCopy"
        v-clipboard:error="onError"
        class="absolute top-0 right-0 bottom-0 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-100 ease-in-out focus:outline-none"
      >
        <MjIcon
          name="copy"
          :aria-label="$t('common.copyClipboard')"
          class="text-gray-50"
          :class="[parseInt(variation, 10) < 500 ? 'text-gray-900' : 'text-gray-50']"
        />
      </button>
    </div>

    <MjToast
      ref="toast"
      :timeout="1800"
    />
  </div>
</template>

// TODO: support TS
<script>
import Vue from 'vue';

export default Vue.extend({
  props: {
    color: {
      required: true,
      type: Object,
    },

    name: {
      required: true,
      type: String,
    },
  },

  methods: {
    onCopy(event) {
      this.$refs.toast.log(this.$t('common.copyColorName', { name: event.text }));
    },

    onError() {
      this.$refs.toast.error(this.$t('common.copyColorError'));
    },
  },
});
</script>
