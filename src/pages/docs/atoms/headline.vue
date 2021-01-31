<template>
  <LayoutDoc
    :title="$t('sections.atoms.headline.title')"
    components="Headline"
  >
    <Sample
      :title="$t('props.size')"
      :snippet="samples.size"
    >
      <div class="space-y-8">
        <MjHeadline
          v-for="index in 4"
          :key="index"
          :size="index"
        >
          Almost before we knew it, we had left the ground.
        </MjHeadline>
      </div>
    </Sample>

    <Sample
      :title="$t('props.level')"
      :snippet="samples.level"
    >
      <div class="space-y-8">
        <MjHeadline
          v-for="index in 4"
          :key="index"
          :level="index"
        >
          H{{ index }}
        </MjHeadline>
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
        size: [
          `<MjHeadline size="1">
  Size 1
</MjButton>`,

          `<MjHeadline size="2">
  Size 2
</MjHeadline>`,

          `<MjHeadline size="3">
  Size 3
</MjHeadline>`,

          `<MjHeadline size="4">
  Size 4
</MjHeadline>`,
        ],
        level: [
          `<MjHeadline level="1">
  H1
</MjHeadline>`,

          `<MjHeadline level="2">
  H2
</MjHeadline>`,

          `<MjHeadline level="3">
  H3
</MjHeadline>`,

          `<MjHeadline level="4">
  H4
</MjHeadline>`,
        ],
      },
    };
  },
});
</script>
