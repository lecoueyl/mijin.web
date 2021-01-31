<template>
  <LayoutDoc
    ref="layout"
    :title="$t('sections.atoms.input.title')"
    components="Input"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <MjInput
        class="sm:w-1/2"
        :placeholder="$t('examples.input.placeholder')"
      />
    </Sample>

    <Sample
      :title="$t('props.label')"
      :snippet="samples.label"
    >
      <MjInput
        class="sm:w-1/2"
        :placeholder="$t('examples.input.placeholder')"
      >
        {{ $t('examples.input.label') }}
      </MjInput>
    </Sample>

    <Sample
      :title="$t('props.password')"
      :snippet="samples.password"
    >
      <MjInput
        v-model="model.password"
        type="password"
        class="sm:w-1/2"
      />
    </Sample>

    <Sample
      :title="$t('props.icon')"
      :snippet="samples.icon"
    >
      <MjInput
        class="sm:w-1/2"
        :placeholder="$t('examples.input.placeholder')"
      >
        <template #icon>
          <MjIcon name="user" />
        </template>
      </MjInput>
    </Sample>

    <Sample
      :title="$t('props.status')"
      :snippet="samples.status"
    >
      <div class="space-y-8">
        <MjInput
          class="sm:w-1/2"
          :value="$t('examples.input.label')"
          status="error"
        >
          <template #error>
            {{ $t('examples.input.error') }}
          </template>
        </MjInput>

        <MjInput
          class="sm:w-1/2"
          :value="$t('examples.input.label')"
          status="success"
        >
          <template #success>
            {{ $t('examples.input.valid') }}
          </template>
        </MjInput>
      </div>
    </Sample>

    <Sample
      :title="$t('props.disabled')"
      :snippet="samples.disabled"
    >
      <MjInput
        class="sm:w-1/2"
        :value="$t('examples.input.value')"
        disabled
      />
    </Sample>

    <Sample
      :title="$t('props.size')"
      :snippet="samples.size"
    >
      <MjInput
        class="sm:w-1/2"
        :placeholder="$t('examples.input.placeholder')"
        size="sm"
      />
    </Sample>

    <Sample
      :title="$t('common.events')"
      :snippet="samples.events"
    >
      <MjInput
        v-model="model.event"
        class="sm:w-1/2"
        :placeholder="$t('examples.input.placeholder')"
        @blur="$refs.layout.showEvent('blur', model.event)"
        @click="$refs.layout.showEvent('click', model.event)"
        @focus="$refs.layout.showEvent('focus', model.event)"
        @input="$refs.layout.showEvent('input', model.event)"
      />
    </Sample>
  </LayoutDoc>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      model: {
        password: '',
        event: '',
      },

      samples: {
        default: [
          `<MjInput placeholder="${this.$t('examples.input.placeholder')}" />`,
        ],
        label: [
          `<MjInput placeholder="${this.$t('examples.input.placeholder')}">
  ${this.$t('examples.input.label')}
</MjInput>`,
        ],
        password: [
          '<MjInput type="password />',
        ],
        icon: [
          `<MjInput>
  <template #icon>
    <MjIcon name="user" />
  </template>
</MjInput>`,
        ],
        status: [
          `<MjInput
  placeholder="${this.$t('examples.input.label')}"
  status="error"
>
  <template #error>
    ${this.$t('examples.input.error')}
  </template>
</MjInput>`,

          `<MjInput
  placeholder="${this.$t('examples.input.label')}"
  status="success"
>
  <template #success>
    ${this.$t('examples.input.valid')}
  </template>
</MjInput>`,
        ],
        disabled: [
          `<MjInput
  value="${this.$t('examples.input.value')}"
  disabled
/>`,
        ],
        size: [
          `<MjInput
  placeholder="${this.$t('examples.input.placeholder')}"
  size="sm"
/>`,
        ],
        events: [
          `<MjInput
  v-model="inputValue"
  placeholder="${this.$t('examples.input.placeholder')}"
  @blur="showEvent('blur')"
  @click="showEvent('click')"
  @focus="showEvent('focus')"
  @input="showEvent('input')"
/>`,
        ],
      },
    };
  },
});
</script>
