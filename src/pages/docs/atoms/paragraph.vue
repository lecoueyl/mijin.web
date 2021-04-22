<template>
  <LayoutDoc
    :title="$t('sections.atoms.paragraph.title')"
    components="Paragraph"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <MjParagraph>
        {{ $t('examples.sentence') }}
      </MjParagraph>
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
          `<MjParagraph>
  Almost before we knew it, we had left the ground.
</MjParagraph>`,
        ],
      },
    };
  },
});
</script>
