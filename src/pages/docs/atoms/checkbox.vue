<template>
  <LayoutDoc
    ref="layout"
    :title="$t('sections.atoms.checkbox.title')"
    components="Checkbox"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <MjCheckbox
        v-model="model.default"
        name="checkbox"
      >
        {{ $t('props.default') }}
      </MjCheckbox>
    </Sample>

    <Sample
      :title="$t('props.multiple')"
      :snippet="samples.array"
    >
      <div class="space-x-8">
        <MjCheckbox
          v-model="model.array"
          name="multiple"
          :value="1"
        >
          1
        </MjCheckbox>

        <MjCheckbox
          v-model="model.array"
          name="multiple"
          :value="2"
        >
          2
        </MjCheckbox>
      </div>
    </Sample>

    <Sample
      :title="$t('props.mixed')"
      :snippet="samples.mixed"
    >
      <MjCheckbox
        name="mixed"
        :mixed="true"
      >
        {{ $t('props.mixed') }}
      </MjCheckbox>
    </Sample>

    <Sample
      :title="$t('props.disabled')"
      :snippet="samples.disabled"
    >
      <div class="space-x-8">
        <MjCheckbox
          v-model="model.false"
          disabled
        >
          {{ $t('props.disabled') }}
        </MjCheckbox>

        <MjCheckbox
          v-model="model.true"
          disabled
        >
          {{ $t('props.disabled') }}
        </MjCheckbox>

        <MjCheckbox
          :mixed="true"
          disabled
        >
          {{ $t('props.disabled') }}
        </MjCheckbox>
      </div>
    </Sample>

    <Sample
      :title="$t('common.events')"
      :snippet="samples.events"
    >
      <MjCheckbox
        v-model="model.event"
        @change="$refs.layout.showEvent('change', model.event)"
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
        array: [2],
        default: true,
        false: false,
        true: true,
        event: false,
      },
      samples: {
        default: [
          `<MjCheckbox
  v-model="value"
  name="checkbox"
>
  ${this.$t('props.default')}
</MjCheckbox>`,
        ],
        array: [
          `<MjCheckbox
  v-model="value"
  name="multiple"
  :value="1"
>
  1
</MjCheckbox>

<MjCheckbox
  v-model="value"
  name="multiple"
  :value="2"
>
  2
</MjCheckbox>`,
        ],
        mixed: [
          `<MjCheckbox
  name="mixed"
  :mixed="true"
>
  ${this.$t('props.mixed')}
</MjCheckbox>`,
        ],
        disabled: [
          `<MjCheckbox
  v-model="value"
  name="checkbox"
  disabled
>
  ${this.$t('props.disabled')}
</MjCheckbox>`,
        ],
        events: [
          `<MjCheckbox
  v-model="value"
  @change="showEvent('change')"
/>`,
        ],
      },
    };
  },
});
</script>
