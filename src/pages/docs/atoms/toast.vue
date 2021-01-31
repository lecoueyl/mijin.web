<template>
  <LayoutDoc
    :title="$t('sections.atoms.toast.title')"
    components="Toast"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <MjButton
        @click="$refs.default.log($t('examples.summary'))"
      >
        Log
      </MjButton>

      <MjToast ref="default" />
    </Sample>

    <Sample
      :title="$t('props.type')"
      :snippet="samples.type"
    >
      <MjButton
        v-for="type in ['success', 'warn', 'error' ]"
        :key="type"
        class="mr-2"
        @click="$refs.default[type]($t('examples.summary'))"
      >
        {{ type }}
      </MjButton>

      <MjToast ref="default" />
    </Sample>
  </LayoutDoc>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      samples: {
        default: [
          `<MjToast ref="toast" />

<MjButton @click="$refs.toast.log('${this.$t('examples.summary')}')">
  Default
</MjButton>`,
        ],
        type: [
          `<MjToast ref="toast" />

<MjButton @click="$refs.toast.success('${this.$t('examples.summary')}')">
  Success
</MjButton>

<MjButton @click="$refs.toast.warn('${this.$t('examples.summary')}')">
  Warn
</MjButton>

<MjButton @click="$refs.toast.error('${this.$t('examples.summary')}')">
  Error
</MjButton>`,
        ],
      },
    };
  },
});
</script>
