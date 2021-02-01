<template>
  <LayoutDoc :title="$t('sections.general.customization.title')">
    <TextP>
      {{ $t('sections.general.customization.description') }}.
    </TextP>

    <MjHeadline
      id="Tailwind CSS"
      :level="2"
      :size="3"
      class="pt-10 pb-8"
    >
      Tailwind CSS
    </MjHeadline>

    <TextP>
      <i18n path="sections.general.customization.tailwindOverride">
        <template #tailwindConfigFile>
          <CodeInline>tailwind.config.js</CodeInline>
        </template>
      </i18n>
    </TextP>

    <CodeSnippet
      language="javascript"
      :snippets="{
        tailwind: `// tailwind.config.js

const mijin = require('mijin/tailwind-preset.js');
const { colors, borderRadius } = require('tailwindcss/defaultTheme');

module.exports = {
  presets: [
    mijin,
  ],
  theme: {
    extend: {
      // ${$t('sections.general.customization.overrideComponent')}
      borderRadius: {
        button: borderRadius.sm,
        form: borderRadius.sm,
      },
      // ${$t('sections.general.customization.overrideColor')}
      colors: {
        primary: colors.pink,
      },
    },
  },
};`,
      }"
    />

    <MjHeadline
      :id="$t('common.presets')"
      :level="4"
      :size="4"
      class="pt-10 pb-8"
    >
      {{ $t('common.presets') }}
    </MjHeadline>

    <MjTable density="tight">
      <MjTableHead>
        <MjTableHeader class="bg-white dark:bg-gray-900">
          {{ $t('common.attribute') }}
        </MjTableHeader>

        <MjTableHeader class="bg-white dark:bg-gray-900">
          {{ $t('common.value') }}
        </MjTableHeader>
      </MjTableHead>

      <MjTableBody class="text-sm font-mono">
        <template v-for="(section, sectionName) in theme">
          <template v-for="(componentValue, componentName) in section">
            <template v-if="typeof componentValue === 'object'">
              <MjTableRow
                v-for="(item, itemName) in componentValue"
                :key="`${sectionName }-${componentName}-${itemName}`"
              >
                <MjTableCell>
                  <CodeInline>
                    {{ sectionName }}.{{ componentName }}.{{ itemName }}
                  </CodeInline>
                </MjTableCell>

                <MjTableCell>
                  {{ item }}
                </MjTableCell>
              </MjTableRow>
            </template>

            <template v-else>
              <MjTableRow :key="`${sectionName }-${componentName}`">
                <MjTableCell>
                  <CodeInline>
                    {{ sectionName }}.{{ componentName }}
                  </CodeInline>
                </MjTableCell>

                <MjTableCell>
                  {{ componentValue }}
                </MjTableCell>
              </MjTableRow>
            </template>
          </template>
        </template>
      </MjTableBody>
    </MjTable>

    <MjHeadline
      :id="$t('common.plugin')"
      :level="2"
      :size="3"
      class="pt-10 pb-8"
    >
      {{ $t('common.plugin') }}
    </MjHeadline>

    <TextP>
      <i18n path="sections.general.customization.pluginOption">
        <template #fromMj>
          <CodeInline>Mj</CodeInline>
        </template>

        <template #toM>
          <CodeInline>M</CodeInline>
        </template>
      </i18n>
    </TextP>

    <CodeSnippet
      language="javascript"
      :snippets="{
        plugin: `import Vue from 'vue';

Vue.use(Mijin, {
  prefix: 'M',
})`,
      }"
    />

    <MjHeadline
      :id="$t('common.options')"
      :level="4"
      :size="4"
      class="pt-10 pb-8"
    >
      {{ $t('common.options') }}
    </MjHeadline>

    <MjTable>
      <MjTableHead>
        <MjTableHeader class="bg-white dark:bg-gray-900">
          {{ $t('common.name') }}
        </MjTableHeader>

        <MjTableHeader class="bg-white dark:bg-gray-900">
          {{ $t('common.description') }}
        </MjTableHeader>

        <MjTableHeader class="bg-white dark:bg-gray-900">
          {{ $t('common.type') }}
        </MjTableHeader>

        <MjTableHeader class="bg-white dark:bg-gray-900">
          {{ $t('common.default') }}
        </MjTableHeader>
      </MjTableHead>

      <MjTableBody class="text-sm">
        <MjTableRow
          v-for="option in [
            {
              name: 'prefix',
              description: $t('sections.general.customization.pluginOptions.prefix.description'),
              type: 'String',
              default: 'Mj',
            },
          ]"
          :key="option.name"
        >
          <MjTableCell>
            <CodeInline>
              {{ option.name }}
            </CodeInline>
          </MjTableCell>

          <MjTableCell>
            {{ option.description }}
          </MjTableCell>

          <MjTableCell class="font-mono">
            {{ option.type }}
          </MjTableCell>

          <MjTableCell class="font-mono">
            {{ option.default }}
          </MjTableCell>
        </MjTableRow>
      </MjTableBody>
    </MjTable>
  </LayoutDoc>
</template>

<script lang="ts">
import Vue from 'vue';
import tailwindPreset from 'mijin/src/tailwind-preset';

export default Vue.extend({
  data() {
    return {
      theme: tailwindPreset.theme,
    };
  },
});
</script>
