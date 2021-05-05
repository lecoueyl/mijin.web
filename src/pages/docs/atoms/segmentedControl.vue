<template>
  <LayoutDoc
    :title="$t('sections.atoms.segmentedControl.title')"
    :components="['SegmentedControl', 'SegmentedControlItem']"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <MjSegmentedControl>
        <MjSegmentedControlItem
          v-for="(item, key, index) in $t('examples.items')"
          :key="key"
          :selected="demo.default === index"
          @select="demo.default = index"
        >
          {{ item.name }}
        </MjSegmentedControlItem>
      </MjSegmentedControl>
    </Sample>

    <Sample
      :title="$t('props.disabled')"
      :snippet="samples.disabled"
    >
      <MjSegmentedControl>
        <MjSegmentedControlItem
          v-for="(item, key, index) in $t('examples.items')"
          :key="key"
          :selected="demo.disabled === index"
          :disabled="key !== 1"
        >
          {{ item.name }}
        </MjSegmentedControlItem>
      </MjSegmentedControl>
    </Sample>
  </LayoutDoc>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      demo: {
        default: 0,
        disabled: 0,
      },
      samples: {
        default: [
          `<MjSegmentedControl>
  <MjSegmentedControlItem
    :selected="selectedItem === index"
    @select="selectedItem = index"
  >
    ${this.$t('examples.items.1.name')}
  </MjSegmentedControlItem>
  <MjSegmentedControlItem
    :selected="selectedItem === index"
    @select="selectedItem = index"
  >
    ${this.$t('examples.items.2.name')}
  </MjSegmentedControlItem>
  <MjSegmentedControlItem
    :selected="selectedItem === index"
    @select="selectedItem = index"
  >
    ${this.$t('examples.items.3.name')}
  </MjSegmentedControlItem>
</MjSegmentedControl>`,
        ],
        disabled: [
          `<MjSegmentedControl>
  <MjSegmentedControlItem selected>
    ${this.$t('examples.items.1.name')}
  </MjSegmentedControlItem>
  <MjSegmentedControlItem disabled>
    ${this.$t('examples.items.2.name')}
  </MjSegmentedControlItem>
  <MjSegmentedControlItem disabled>
    ${this.$t('examples.items.3.name')}
  </MjSegmentedControlItem>
</MjSegmentedControl>`,
        ],
      },
    };
  },
});
</script>
