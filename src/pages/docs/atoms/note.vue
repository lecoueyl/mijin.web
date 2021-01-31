<template>
  <LayoutDoc
    :title="$t('sections.atoms.note.title')"
    components="Note"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <MjNote>
        {{ $t('props.default') }}
      </MjNote>
    </Sample>

    <Sample
      :title="$t('props.variant')"
      :snippet="samples.variant"
    >
      <div class="space-y-8">
        <MjNote
          v-for="variant in ['success', 'danger', 'warning']"
          :key="variant"
          :variant="variant"
        >
          {{ variant }}
        </MjNote>
      </div>
    </Sample>

    <Sample
      :title="$t('props.filled')"
      :snippet="samples.filled"
    >
      <div class="space-y-8">
        <MjNote
          v-for="variant in ['info', 'success', 'danger', 'warning']"
          :key="`filled-${variant}`"
          :variant="variant"
          filled
        >
          <template v-if="!variant">
            {{ $t('props.default') }}
          </template>
          {{ variant }}
        </MjNote>
      </div>
    </Sample>

    <Sample
      :title="$t('props.icon')"
      :snippet="samples.icon"
    >
      <MjNote>
        {{ $t('examples.summary') }}
        <template #icon>
          <MjIcon
            name="calendar"
            size="lg"
          />
        </template>
      </MjNote>
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
          `<MjNote>
  ${this.$t('props.default')}
</MjNote>`,
        ],
        variant: [
          `<MjNote variant="success">
  success
</MjNote>`,

          `<MjNote variant="danger">
  danger
</MjNote>`,

          `<MjNote variant="warning">
  warning
</MjNote>`,
        ],
        filled: [
          `<MjNote filled>
  ${this.$t('props.default')}
</MjNote>`,

          `<MjNote
  filled
  variant="success"
>
  success
</MjNote>`,

          `<MjNote
  filled
  variant="danger"
>
  danger
</MjNote>`,

          `<MjNote
  filled
  variant="warning"
>
  warning
</MjNote>`,
        ],
        icon: [
          `<MjNote>
  ${this.$t('examples.summary')}
  <template #icon>
    <MjIcon
      name="calendar"
      size="lg"
    />
  </template>
</MjNote>`,
        ],
      },
    };
  },
});
</script>
