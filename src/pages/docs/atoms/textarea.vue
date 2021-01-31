<template>
  <LayoutDoc
    :title="$t('sections.atoms.textarea.title')"
    components="Textarea"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <MjTextarea
        class="sm:w-1/2"
        :placeholder="$t('examples.input.placeholder')"
      />
    </Sample>

    <Sample
      :title="$t('props.label')"
      :snippet="samples.label"
    >
      <MjTextarea
        class="sm:w-1/2"
        :placeholder="$t('examples.input.placeholder')"
      >
        {{ $t('examples.input.label') }}
      </MjTextarea>
    </Sample>

    <Sample
      :title="$t('props.status')"
      :snippet="samples.status"
    >
      <div class="space-y-8">
        <MjTextarea
          class="sm:w-1/2"
          :value="$t('examples.input.label')"
          status="error"
        >
          <template #error>
            {{ $t('examples.input.error') }}
          </template>
        </MjTextarea>

        <MjTextarea
          class="sm:w-1/2"
          :value="$t('examples.input.label')"
          status="success"
        >
          <template #success>
            {{ $t('examples.input.valid') }}
          </template>
        </MjTextarea>
      </div>
    </Sample>

    <Sample
      :title="$t('props.disabled')"
      :snippet="samples.disabled"
    >
      <MjTextarea
        class="sm:w-1/2"
        :value="$t('examples.input.label')"
        disabled
      />
    </Sample>

    <Sample
      :title="$t('props.size')"
      :snippet="samples.size"
    >
      <MjTextarea
        class="sm:w-1/2"
        :placeholder="$t('examples.input.placeholder')"
        size="sm"
      />
    </Sample>
  </LayoutDoc>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      samples: {
        default: [
          `<MjTextarea placeholder="${this.$t('examples.input.placeholder')}" />`,
        ],
        label: [
          `<MjTextarea placeholder="${this.$t('examples.input.placeholder')}">
  ${this.$t('examples.input.label')}
</MjTextarea>`,
        ],
        status: [
          `<MjTextarea
  placeholder="${this.$t('examples.input.label')}"
  status="error"
>
  <template #error>
    ${this.$t('examples.input.error')}
  </template>
</MjTextarea>`,

          `<MjTextarea
  placeholder="${this.$t('examples.input.label')}"
  status="success"
>
  <template #success>
    ${this.$t('examples.input.valid')}
  </template>
</MjTextarea>`,
        ],
        disabled: [
          `<MjTextarea
  value="${this.$t('examples.input.label')}"
  disabled
/>`,
        ],
        size: [
          `<MjTextarea
  placeholder="${this.$t('examples.input.placeholder')}"
  size="sm"
>
  ${this.$t('examples.input.label')}
</MjTextarea>`,
        ],
      },
    };
  },
});
</script>
