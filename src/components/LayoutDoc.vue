<template>
  <div class="md:flex">
    <div class="md:flex-1 px-4 md:px-10">
      <MjHeadline
        :level="1"
        :size="2"
        class="pb-8"
      >
        {{ title }}
      </MjHeadline>

      <slot />

      <template v-if="componentsProperties">
        <MjHeadline
          id="api"
          :level="2"
          :size="2"
          class="pb-8"
        >
          {{ $t('common.properties') }}
        </MjHeadline>

        <section
          v-for="(component, componentName) in componentsProperties"
          :key="componentName"
        >
          <MjHeadline
            v-if="Object.keys(componentsProperties).length > 1"
            :id="componentName"
            :level="3"
            class="pb-4"
          >
            {{ componentName }}
          </MjHeadline>

          <div
            v-for="(properties, propertyName) in component"
            :key="propertyName"
          >
            <MjHeadline
              :level="4"
              class="pb-4 text-gray-800 dark:text-gray-300"
            >
              {{ $t(`common.${propertyName}`) }}
            </MjHeadline>

            <MjTable
              fixed
              class="mb-8"
            >
              <MjTableHead>
                <MjTableHeader class="bg-white dark:bg-gray-900 w-3/12">
                  {{ $t('common.name') }}
                </MjTableHeader>

                <template v-if="propertyName === 'props'">
                  <MjTableHeader class="bg-white dark:bg-gray-900">
                    {{ $t('common.type') }}
                  </MjTableHeader>

                  <MjTableHeader class="bg-white dark:bg-gray-900">
                    {{ $t('common.required') }}
                  </MjTableHeader>

                  <MjTableHeader class="bg-white dark:bg-gray-900">
                    {{ $t('common.value') }}
                  </MjTableHeader>

                  <MjTableHeader class="bg-white dark:bg-gray-900">
                    {{ $t('common.default') }}
                  </MjTableHeader>
                </template>

                <template v-else>
                  <MjTableHeader class="bg-white dark:bg-gray-900">
                    {{ $t('common.description') }}
                  </MjTableHeader>
                </template>
              </MjTableHead>

              <MjTableBody>
                <MjTableRow
                  v-for="(prop, propName, propKey) in properties"
                  :key="propKey"
                >
                  <template v-if="propertyName === 'props'">
                    <MjTableCell>
                      <CodeInline>{{ prop.name }}</CodeInline>
                    </MjTableCell>

                    <MjTableCell>
                      <CodeInline
                        v-for="type in prop.type"
                        :key="type"
                        variant="secondary"
                        class="space-y-1"
                      >
                        {{ type }}
                      </CodeInline>
                    </MjTableCell>

                    <MjTableCell>
                      <CodeInline variant="secondary">
                        {{ prop.required || false }}
                      </CodeInline>
                    </MjTableCell>

                    <MjTableCell>
                      <template v-if="prop.validator">
                        <CodeInline
                          v-for="value in prop.validator"
                          :key="value"
                          variant="secondary"
                          class="space-y-1"
                        >
                          <template v-if="value === null">
                            null
                          </template>

                          <template v-else>
                            {{ value }}
                          </template>
                        </CodeInline>
                      </template>

                      <span
                        v-else
                        class="text-gray-300 dark:text-gray-700"
                      >
                        -
                      </span>
                    </MjTableCell>

                    <MjTableCell>
                      <CodeInline
                        v-if="prop.default"
                        variant="secondary"
                      >
                        {{ prop.default }}
                      </CodeInline>

                      <span
                        v-else
                        class="text-gray-300 dark:text-gray-700"
                      >
                        -
                      </span>
                    </MjTableCell>
                  </template>

                  <template v-else>
                    <MjTableCell>
                      <CodeInline>
                        <span
                          v-if="propertyName === 'events'"
                          class="text-primary-300 dark:text-primary-600"
                        >@</span><!--
                    -->{{ propName }}<!--
                    --><span
                          v-if="propertyName === 'methods'"
                          class="text-primary-300 dark:text-primary-600"
                        >()</span>
                      </CodeInline>
                    </MjTableCell>

                    <MjTableCell>
                      {{ prop.description }}
                    </MjTableCell>
                  </template>
                </MjTableRow>
              </MjTableBody>
            </MjTable>
          </div>
        </section>
      </template>

      <div class="grid grid-cols-2 gap-4 border-t border-gray-300 dark:border-gray-600 mt-10 pt-10">
        <div>
          <MjLink
            v-if="nav.previous"
            tag="nuxt-link"
            :to="localePath(`docs-${nav.previous.section}-${nav.previous.page}`)"
            class="inline-flex items-center"
            color="gray"
          >
            <MjIcon
              name="arrow-left"
              class="mr-2"
            />
            {{ $t(`sections.${nav.previous.section}.${nav.previous.page}.title`) }}
          </MjLink>
        </div>

        <div class="text-right">
          <MjLink
            v-if="nav.next"
            tag="nuxt-link"
            :to="localePath(`docs-${nav.next.section}-${nav.next.page}`)"
            class="inline-flex items-center"
            color="gray"
          >
            {{ $t(`sections.${nav.next.section}.${nav.next.page}.title`) }}
            <MjIcon
              name="arrow-right"
              class="ml-2"
            />
          </MjLink>
        </div>
      </div>
    </div>

    <nav class="w-64 xl:w-72 sticky top-24 self-start text-sm hidden xl:block pt-4">
      <ul v-if="anchors.length > 1">
        <li
          v-for="(anchor, anchorIndex) in anchors"
          :key="anchor.id"
          :class="{ 'pt-2': anchorIndex != 0 }"
        >
          <a
            :href="`#${anchor.id}`"
            class="transition-colors duration-200 ease-in-out"
            :class="{
              'text-primary-500 dark:text-primary-500': anchor.id === currentAnchor,
              'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-50': anchor.id !== currentAnchor,
            }"
          >
            {{ anchor.name }}
          </a>
        </li>
      </ul>
    </nav>

    <MjToast ref="toast" />
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  props: {
    components: {
      default: null,
      type: [Array, String],
    },

    title: {
      required: true,
      type: String,
    },
  },

  data() {
    return {
      anchors: [],
      anchorObserver: null,
      currentAnchor: null,
    };
  },

  head() {
    return {
      title: this.title,
    };
  },

  computed: {
    componentsProperties() {
      if (!this.components) return null;

      const components = Array.isArray(this.components) ? this.components : [this.components];
      const properties = {};

      components.forEach((component) => {
        const i18nKey = `sections.atoms.${component.toLowerCase()}`;
        const componentOptions = this.$root?.$options?.components[`Mj${component}`]?.options;
        const componentProps = componentOptions.props;

        if (componentProps) {
          const mappedProps = Object.keys(componentProps).map((key) => ({
            default: componentProps[key].default,
            name: key,
            required: componentProps[key].required,
            type: Array.isArray(componentProps[key].type) ? componentProps[key].type.map((type) => type.name) : [componentProps[key].type.name],
            validator: componentProps[key].validator && componentOptions?.validator && componentOptions?.validator[key] ? componentOptions?.validator[key] : null,
          }));
          properties[component] = { props: mappedProps, ...properties[component] };
        }

        ['events', 'methods', 'slots'].forEach((property) => {
          if (this.$te(`${i18nKey}.${property}`)) {
            properties[component] = { [property]: this.$t(`${i18nKey}.${property}`), ...properties[component] };
          }
        });
      });

      return properties;
    },

    nav() {
      const nav = {};
      const path = this.$nuxt.$route.path.split('/').filter((name) => !['', 'docs'].includes(name));
      const currentItem = `${path[0]}.${path[1]}`;
      const navItems = Object.keys(this.$config.nav)
        .map((section) => Object.keys(this.$config.nav[section])
          .map((item) => `${section}.${item}`))
        .flat();

      function getNavObject(item) {
        const splittedItem = item.split('.');
        return {
          section: splittedItem[0],
          page: splittedItem[1],
        };
      }

      if (navItems.indexOf(currentItem) !== 0) {
        nav.previous = getNavObject(navItems[navItems.indexOf(currentItem) - 1]);
      }

      if (navItems.indexOf(currentItem) !== navItems.length - 1) {
        nav.next = getNavObject(navItems[navItems.indexOf(currentItem) + 1]);
      }

      return nav;
    },
  },

  mounted() {
    this.setAnchorObserver();
    this.setAnchors();
  },

  beforeDestroy() {
    this.anchorObserver.disconnect();
  },

  methods: {
    setAnchors() {
      document.querySelectorAll('h2').forEach((element) => {
        this.anchors.push({
          id: element.id,
          name: element?.textContent?.trim() || '',
        });

        this.anchorObserver.observe(element);
      });
    },

    setAnchorObserver() {
      this.anchorObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) this.currentAnchor = entry.target.id;
        });
      }, {
        root: null,
        threshold: 1,
      });
    },

    showEvent(event, value = null) {
      const log = value ? `event: ${event}, value: ${value}` : `event: ${event}`;
      this.$refs.toast.log(log);
    },
  },
});
</script>
