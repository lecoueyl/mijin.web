<template>
  <div>
    <LayoutHeader />

    <div class="container mx-auto md:flex">
      <div class="md:flex-none md:static md:w-60 xl:w-72 bg-white dark:bg-gray-900">
        <LayoutNavigation class="md:top-0 md:sticky md:h-screen overflow-y-auto pt-28" />
      </div>

      <div class="w-full pb-28 md:py-28">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  head() {
    return {
      link: [
        { rel: 'canonical', href: `${this.$config.app.url}${this.$route.path}` },
      ],
    };
  },
});
</script>
