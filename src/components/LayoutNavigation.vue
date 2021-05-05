<template>
  <aside>
    <div class="fixed bottom-8 right-4 md:hidden z-50">
      <button
        :aria-label="$t('common.menu')"
        class="bg-primary-500 text-primary-100 hover:bg-primary-600 rounded-full p-4 inline-flex items-center shadow-lg
          transition-colors duration-200 ease-in-out focus:outline-none overflow-hidden"
        @click="isNavOpen = !isNavOpen"
      >
        <transition
          mode="out-in"
          enter-active-class="transition ease-in ease-out-mijin duration-200"
          leave-active-class="transition ease-out ease-out-mijin duration-200"
          :enter-class="`transform scale-0 ${isNavOpen ? 'translate-y-8' : '-translate-y-8'}`"
          enter-to-class="transform translate-y-0 scale-100"
          leave-class="transform translate-y-0 scale-100"
          :leave-to-class="`transform scale-0 ${isNavOpen ? '-translate-y-8' : 'translate-y-8'}`"
        >
          <MjIcon
            v-if="isNavOpen"
            key="close"
            name="x"
            size="lg"
          />

          <MjIcon
            v-else
            key="open"
            name="menu"
            size="lg"
          />
        </transition>
      </button>
    </div>

    <nav
      class="fixed md:static top-0 w-full md:block bg-white dark:bg-gray-900 md:bg-transparent md:dark:bg-transparent
        pt-24 sm:pt-0 px-6 md-px-2 z-10 h-full md:h-auto overflow-y-auto md:overflow-y-visible md:visible md:opacity-100 md:translate-y-0 transform transition-all"
      :class="isNavOpen
        ? 'visible ease-out-mijin duration-500 opacity-100 translate-y-0'
        : 'invisible ease-out-mijin duration-200 opacity-0 translate-y-4 md:translate-y-0'"
    >
      <button
        class="text-gray-900 dark:text-gray-50 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 py-2 pl-2 pr-2 md:pr-4 rounded-full inline-flex items-center
          transition-colors duration-200 ease-in-out font-medium focus:outline-none focus:ring-2 focus:ring-gray-500"
        @click="switchTheme()"
      >
        <MjIcon
          :name="$colorMode.value === 'light' ? 'sun' : 'moon'"
          size="lg"
          class="mr-2 inline-block"
        />
        {{ $t(`theme.${$colorMode.value}`) }}
      </button>

      <ul class="pt-10 pb-8 font-medium text-base lg:text-sm space-y-4">
        <li
          v-for="(menu, menuName) in $config.nav.general"
          :key="menuName"
          @click="isNavOpen = false"
        >
          <nuxt-link
            v-slot="{ href, navigate, isActive }"
            :to="localePath(`docs-general-${menuName}`)"
            custom
          >
            <a
              :href="href"
              :class="{
                'text-gray-700 dark:text-gray-300 hover:text-gray-900 hover:dark:text-gray-100 ': !isActive,
                'text-gray-900 dark:text-gray-100 ': isActive,
              }"
              class="transition-colors duration-200 ease-in-out flex items-center"
              @click="navigate"
            >
              <div
                class="h-6 w-6 p-1 mr-3 rounded-md inline-flex items-center justify-center"
                :class="{
                  'bg-green-100': menuName === 'getting-started',
                  'bg-blue-100': menuName === 'customization',
                }"
              >
                <MjIcon
                  :name="menuName === 'getting-started' ? 'plus' : 'settings'"
                  :class="{
                    'text-green-800': menuName === 'getting-started',
                    'text-blue-800': menuName === 'customization',
                  }"
                />
              </div>
              {{ $t(`sections.general.${menuName}.title`) }}
            </a>
          </nuxt-link>
        </li>

        <li>
          <a
            href="https://tailwindcss.com/docs"
            target="_blank"
            rel="noopener"
            class="flex items-center"
          >
            <div class="h-6 w-6 p-1 mr-3 rounded-md inline-flex items-center justify-center bg-cyan-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="text-cyan-800"
              >
                <!-- eslint-disable-next-line max-len -->
                <path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z" />
              </svg>
            </div>
            Tailwind CSS
          </a>
        </li>
      </ul>

      <template v-for="(section, sectionName) in $config.nav">
        <section
          v-if="sectionName !== 'general'"
          :key="sectionName"
          class="space-y-4"
        >
          <h1 class="text-gray-600 dark:text-gray-400">
            {{ $t(`sections.${sectionName}.title`) }}
          </h1>

          <ul class="font-medium text-base lg:text-sm space-y-2 pb-10">
            <li
              v-for="(menu, menuName) in section"
              :key="menuName"
              @click="isNavOpen = false"
            >
              <nuxt-link
                v-slot="{ href, navigate, isActive }"
                :to="localePath(`docs-${sectionName}-${menuName}`)"
                custom
              >
                <a
                  :href="href"
                  :class="{
                    'text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-500': !isActive,
                    'text-primary-700 dark:text-primary-700 bg-primary-200 hover:text-primary-700 dark:hover:text-primary-700': isActive,
                  }"
                  class="transition-colors duration-200 ease-in-out px-4 py-1 block rounded focus:outline-none focus:ring-2 focus:ring-primary-500"
                  @click="navigate"
                >
                  {{ $t(`sections.${sectionName}.${menuName}.title`) }}
                </a>
              </nuxt-link>
            </li>
          </ul>
        </section>
      </template>
    </nav>
  </aside>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      isNavOpen: false,
    };
  },

  methods: {
    switchTheme() {
      this.$colorMode.preference = this.$colorMode.value === 'light' ? 'dark' : 'light';
    },
  },
});
</script>
