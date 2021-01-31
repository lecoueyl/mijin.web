<template>
  <LayoutDoc
    :title="$t('sections.atoms.statusIcon.title')"
    components="StatusIcon"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <div class="space-x-8">
        <MjStatusIcon />
      </div>
    </Sample>

    <Sample
      :title="$t('props.status')"
      :snippet="samples.status"
    >
      <div class="space-x-8">
        <MjStatusIcon
          v-for="status in ['success', 'warning', 'danger', 'error']"
          :key="status"
          :status="status"
        />
      </div>
    </Sample>

    <Sample
      :title="$t('props.size')"
      :snippet="samples.size"
    >
      <div class="flex items-center space-x-8">
        <MjStatusIcon
          v-for="size in ['base', 'lg', 'xl']"
          :key="size"
          :size="size"
        />
      </div>
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
          '<MjStatusIcon />',
        ],
        status: [
          '<MjStatusIcon status="success" />',
          '<MjStatusIcon status="warning" />',
          '<MjStatusIcon status="danger" />',
          '<MjStatusIcon status="error" />',
        ],
        size: [
          '<MjStatusIcon size="base" />',
          '<MjStatusIcon size="lg" />',
          '<MjStatusIcon size="xl" />',
        ],
      },
    };
  },
});
</script>
