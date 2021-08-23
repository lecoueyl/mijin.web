<template>
  <LayoutDoc
    :title="$t('sections.general.getting-started.title')"
  >
    <MjHeadline
      :id="$t('sections.general.getting-started.installation')"
      :level="2"
      :size="3"
      class="pt-10 pb-8"
    >
      {{ $t('sections.general.getting-started.installation') }}
    </MjHeadline>

    <MjNote
      variant="warning"
      class="mb-4"
    >
      {{ $t('sections.general.getting-started.tailwindIsRequired', { version: 2.0 }) }}
    </MjNote>

    <TextP>
      {{ $t('sections.general.getting-started.addMijinToProject') }}
    </TextP>

    <CodeSnippet
      :snippets="{
        npm: 'npm install mijin tailwindcss --save',
        yarn: 'yarn add mijin tailwindcss',
      }"
    />

    <TextP>
      <i18n path="sections.general.getting-started.addTailwindPreset">
        <template #presetFile>
          <CodeInline>tailwind-preset.js</CodeInline>
        </template>

        <template #tailwindConfigFile>
          <CodeInline>tailwind.config.js</CodeInline>
        </template>
      </i18n>
    </TextP>

    <CodeSnippet
      language="javascript"
      :snippets="{
        tailwind: `// tailwind.config.js

const mijin = require('mijin/dist/tailwind-preset.js');

module.exports = {
  presets: [
    mijin,
  ],
};`,
      }"
    />

    <TextP>
      {{ $t('sections.general.getting-started.loadPlugin') }}
    </TextP>

    <CodeSnippet
      language="javascript"
      :snippets="{
        vue: `import Vue from 'vue'
import Mijin from 'mijin'

Vue.use(Mijin)`,
        nuxt: `// plugins/mijin.js
import Vue from 'vue';

Vue.use(Mijin)

// nuxt.config.js
export default {
  ...
  plugins: [
    '~/plugins/mijin.js',
  ],
  ...
}`,
      }"
    />

    <MjHeadline
      id="PurgeCSS"
      :level="2"
      :size="3"
      class="pt-10 pb-8"
    >
      PurgeCSS
    </MjHeadline>

    <TextP>
      {{ $t('sections.general.getting-started.purgeCss') }}
    </TextP>

    <CodeSnippet
      language="javascript"
      :snippets="{
        tailwind: `// tailwind.config.js

const mijin = require('mijin/dist/tailwind-preset.js');

module.exports = {
  presets: [
    mijin,
  ],
  purge: {
    content: [
      'node_modules/mijin/src/components/**/*.vue',
    ],
  },
};`,
      }"
    />
  </LayoutDoc>
</template>
