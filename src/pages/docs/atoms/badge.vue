<template>
  <LayoutDoc
    :title="$t('sections.atoms.badge.title')"
    components="Badge"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <MjBadge>
        1
      </MjBadge>
    </Sample>

    <Sample
      :title="$t('props.color')"
      :snippet="samples.color"
    >
      <div class="space-x-4">
        <MjBadge
          v-for="item in [
            { color: 'primary', value: '12'},
            { color: 'blue', value: '999'},
          ]"
          :key="item.color"
          :color="item.color"
        >
          {{ item.value }}
        </MjBadge>
      </div>
    </Sample>

    <Sample
      :title="$t('props.variant')"
      :snippet="samples.variant"
    >
      <div class="space-x-4">
        <MjBadge
          variant="outline"
        >
          42
        </MjBadge>

        <MjBadge
          color="primary"
          variant="outline"
        >
          999
        </MjBadge>

        <MjBadge
          color="blue"
          variant="outline"
        >
          12
        </MjBadge>
      </div>
    </Sample>

    <Sample
      :title="$t('props.size')"
      :snippet="samples.size"
    >
      <MjBadge size="sm">
        {{ $t('props.size') }}
      </MjBadge>
    </Sample>
  </LayoutDoc>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      samples: {
        default: [`<MjBadge>
  1
</MjBadge>`,
        ],
        color: [
          `<MjBadge color="primary">
  12
</MjBadge>`,
          `<MjBadge color="blue">
  999
</MjBadge>`,
        ],
        variant: [
          `<MjBadge variant="outline">
  42
</MjBadge>`,
          `<MjBadge
  color="primary"
  variant="outline"
>
  999
</MjBadge>`,
          `<MjBadge
  color="blue"
  variant="outline"
>
  12
</MjBadge>`,
        ],
        size: [
          `<MjBadge size="sm">
  ${this.$t('props.size')}
</MjBadge>`,
        ],
      },
    };
  },
});
</script>
