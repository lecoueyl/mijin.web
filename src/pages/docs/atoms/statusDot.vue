<template>
  <LayoutDoc
    :title="$t('sections.atoms.statusDot.title')"
    components="StatusDot"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <MjStatusDot />
    </Sample>

    <Sample
      :title="$t('props.status')"
      :snippet="samples.status"
    >
      <div class="space-x-8">
        <MjStatusDot
          v-for="status in ['success', 'warning', 'danger']"
          :key="status"
          :status="status"
          variant="icon"
        />
      </div>
    </Sample>

    <Sample
      :title="$t('props.animate')"
      :snippet="samples.animate"
    >
      <MjStatusDot animate />
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
          '<MjStatusDot />',
        ],
        status: [
          '<MjStatusDot status="success" />',
          '<MjStatusDot status="warning" />',
          '<MjStatusDot status="danger" />',
        ],
        animate: [
          '<MjStatusDot animate />',
        ],
      },
    };
  },
});
</script>
