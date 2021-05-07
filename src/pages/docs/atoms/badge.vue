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
            { color: 'pink', value: '42'},
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
          v-for="item in [
            { color: 'primary', value: '12'},
            { color: 'cyan', value: '999'},
            { color: 'red', value: '42'},
          ]"
          :key="item.color"
          :color="item.color"
          variant="outline"
        >
          {{ item.value }}
        </MjBadge>
      </div>
    </Sample>

    <Sample
      :title="$t('props.size')"
      :snippet="samples.size"
    >
      <div class="space-x-4 flex items-center">
        <MjBadge
          v-for="size in ['sm', 'base']"
          :key="size"
          :size="size"
        >
          {{ size }}
        </MjBadge>
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
          `<MjBadge color="pink">
  42
</MjBadge>`,
        ],
        variant: [
          `<MjBadge
  color="primary"
  variant="outline"
>
  12
</MjBadge>`,
          `<MjBadge
  color="cyan"
  variant="outline"
>
  999
</MjBadge>`,
          `<MjBadge
  color="red"
  variant="outline"
>
  12
</MjBadge>`,
        ],
        size: [
          `<MjBadge size="sm">
  sm
</MjBadge>`,
          `<MjBadge>
  base
</MjBadge>`,
        ],
      },
    };
  },
});
</script>
