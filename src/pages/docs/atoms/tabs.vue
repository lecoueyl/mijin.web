<template>
  <LayoutDoc
    :title="$t('sections.atoms.tabs.title')"
    :components="['Tabs', 'TabsItem']"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <MjTabs>
        <MjTabsItem
          v-for="(item, key, index) in $t('examples.items')"
          :key="key"
          :selected="demo.default === index"
          @click="demo.default = index"
        >
          {{ item.name }}
        </MjTabsItem>
      </MjTabs>
    </Sample>

    <Sample
      :title="$t('props.disabled')"
      :snippet="samples.disabled"
    >
      <MjTabs>
        <MjTabsItem
          v-for="(item, key, index) in $t('examples.items')"
          :key="key"
          :selected="demo.disabled === index"
          :disabled="key !== 1"
        >
          {{ item.name }}
        </MjTabsItem>
      </MjTabs>
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
          `<MjTabs>
  <MjTabsItem selected>
    ${this.$t('examples.items.1.name')}
  </MjTabsItem>
  <MjTabsItem>
    ${this.$t('examples.items.2.name')}
  </MjTabsItem>
  <MjTabsItem>
    ${this.$t('examples.items.3.name')}
  </MjTabsItem>
</MjTabs>`,
        ],
        disabled: [
          `<MjTabs>
  <MjTabsItem selected>
    ${this.$t('examples.items.1.name')}
  </MjTabsItem>
  <MjTabsItem disabled>
    ${this.$t('examples.items.2.name')}
  </MjTabsItem>
  <MjTabsItem disabled>
    ${this.$t('examples.items.3.name')}
  </MjTabsItem>
</MjTabs>`,
        ],
      },
    };
  },
});
</script>
