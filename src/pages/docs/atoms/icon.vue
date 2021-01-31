<template>
  <LayoutDoc
    :title="$t('sections.atoms.icon.title')"
    components="Icon"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <MjIcon name="user" />
    </Sample>

    <Sample
      :title="$t('props.size')"
      :snippet="samples.size"
    >
      <div class="flex items-center space-x-4">
        <MjIcon
          v-for="size in ['sm', 'lg']"
          :key="size"
          :size="size"
          name="calendar"
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
        default: ['<MjIcon name="user" />'],
        size: [
          `<MjIcon
  name="calendar"
  size="sm"
/>`,

          `<MjIcon
  name="calendar"
  size="lg"
/>`,
        ],
      },
    };
  },
});
</script>
