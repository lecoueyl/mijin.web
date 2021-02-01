<template>
  <div class="mt-4 mb-8 rounded-lg bg-gray-800">
    <template v-if="Object.keys(snippets).length > 1">
      <div class="text-sm border-b border-gray-700">
        <button
          v-for="(snippet, snippetName) in snippets"
          :key="snippetName"
          class="p-4 focus:outline-none transition-colors duration-150 ease-in-out"
          :class="[
            {
              'text-primary-400': currentSnippet === snippetName,
              'text-white hover:text-primary-200': currentSnippet !== snippetName
            }
          ]"
          @click="currentSnippet = snippetName"
        >
          {{ snippetName }}
        </button>
      </div>
    </template>

    <div class="relative group overflow-x-auto">
      <highlightjs
        v-if="code"
        :code="code"
        :language="language"
        class="p-4"
      />

      <button
        v-clipboard:copy="code"
        v-clipboard:success="onCopy"
        v-clipboard:error="onError"
        class="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-100 ease-in-out mt-4 mr-4 inline-flex items-center"
      >
        <MjIcon
          name="copy"
          :aria-label="$t('common.copyClipboard')"
          class="text-gray-50"
        />
      </button>
    </div>

    <MjToast
      ref="toast"
      :timeout="1800"
    />
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  props: {
    language: {
      type: String,
      default: null,
      validator: (value) => [
        'html',
        'javascript',
        null,
      ].includes(value),
    },

    snippets: {
      required: true,
      type: Object,
    },
  },

  data() {
    return {
      currentSnippet: Object.keys(this.snippets)[0],
    };
  },

  computed: {
    code() {
      return this.snippets[this.currentSnippet];
    },
  },

  methods: {
    onCopy() {
      this.$refs.toast.log(this.$t('common.copyCodeSuccess'));
    },

    onError() {
      this.$refs.toast.error(this.$t('common.copyCodeError'));
    },
  },
});
</script>
