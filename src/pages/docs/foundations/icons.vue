<template>
  <LayoutDoc
    :title="$t('sections.foundations.icons.title')"
  >
    <p class="py-4 text-gray-700 dark:text-gray-300">
      <i18n path="sections.foundations.icons.description" tag="span">
        <template #link>
          <MjLink
            href="https://github.com/feathericons/feather"
            target="_blank"
            rel="noopener noreferrer"
            external
          >
            Feather
          </MjLink>
        </template>
      </i18n>
    </p>

    <MjInput
      v-model="filterQuery"
      type="search"
      placeholder="filter"
    >
      <template #icon>
        <MjIcon name="search" />
      </template>
    </MjInput>

    <MjTransitionFadeY mode="out-in">
      <div
        v-if="filteredIconsName.length > 0"
        key="result"
        class="mt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4"
      >
        <SampleIcon
          v-for="iconName in filteredIconsName"
          :key="iconName"
          :name="iconName"
          :svg="icons[iconName]"
        />
      </div>

      <div
        v-else
        key="empty"
        class="py-10 text-center text-gray-700 dark:text-gray-300"
      >
        {{ $t('sections.foundations.icons.noResultsFoundQuery', { query: filterQuery }) }}
      </div>
    </MjTransitionFadeY>
  </LayoutDoc>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      filterQuery: '',
      icons: this.$root?.$options?.components.MjIcon?.options?.data()?.icons || [],
    };
  },

  computed: {
    filteredIconsName() {
      return Object.keys(this.icons)
        .filter((key) => key.includes(this.filterQuery));
    },
  },
});
</script>
