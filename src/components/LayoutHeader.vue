<template>
  <header class="fixed top-0 z-30 w-full p-4 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
    <div class="container mx-auto flex items-center md:px-6">
      <nuxt-link
        :to="localePath('index')"
        :aria-label="$t('common.home')"
      >
        <SvgLogo class="h-10" />
      </nuxt-link>

      <div class="flex-1 text-right">
        <MjBadge
          variant="outline"
          class="font-mono text-sm py-1"
        >
          v{{ version }}
        </MjBadge>

        <a
          :href="$config.links.github"
          aria-label="github"
          class="ml-2"
          rel="noopener noreferrer"
          target="_blank"
        >
          <MjIcon
            class="inline-block hover:text-primary-500 transition-colors duration-150 ease-in-out"
            name="github"
            size="lg"
          />
        </a>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import mijinPackage from 'mijin/package.json';
import SvgLogo from '~/assets/svg/logo-mijin.svg?inline';

export default Vue.extend({
  components: {
    SvgLogo,
  },

  data() {
    return {
      version: mijinPackage.version,
    };
  },
});
</script>
