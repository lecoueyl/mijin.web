<template>
  <LayoutDoc
    ref="layout"
    :title="$t('sections.atoms.toggle.title')"
    components="Toggle"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <MjToggle v-model="model.default">
        {{ $t('props.default') }}
      </MjToggle>
    </Sample>

    <Sample
      :title="$t('props.disabled')"
      :snippet="samples.disabled"
    >
      <div class="flex space-x-8">
        <MjToggle
          v-model="model.false"
          disabled
        >
          {{ $t('props.disabled') }}
        </MjToggle>

        <MjToggle
          v-model="model.true"
          disabled
        >
          {{ $t('props.disabled') }}
        </MjToggle>
      </div>
    </Sample>

    <Sample
      :title="$t('props.size')"
      :snippet="samples.size"
    >
      <div class="grid grid-cols-4 gap-4">
        <div
          v-for="size in ['sm', 'base']"
          :key="size"
        >
          <MjToggle
            v-model="model.size"
            :size="size"
          >
            {{ size }}
          </MjToggle>
        </div>
      </div>
    </Sample>

    <Sample
      :title="$t('props.reversed')"
      :snippet="samples.reversed"
    >
      <MjToggle
        v-model="model.reversed"
        reversed
      >
        <div class="pr-4">
          <h4 class="font-medium">
            {{ $t('props.reversed') }}
          </h4>
          <p class="text-sm">
            {{ $t('examples.summary') }}
          </p>
        </div>
      </MjToggle>
    </Sample>

    <Sample
      :title="$t('props.centered')"
      :snippet="samples.centered"
    >
      <MjToggle
        v-model="model.centered"
        centered
        reversed
      >
        <div class="pr-4">
          <h4 class="font-medium">
            {{ $t('props.centered') }}
          </h4>
          <p class="text-sm">
            {{ $t('examples.summary') }}
          </p>
        </div>
      </MjToggle>
    </Sample>

    <Sample
      :title="$t('common.events')"
      :snippet="samples.events"
    >
      <MjToggle
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
        default: true,
        false: false,
        true: true,
        size: false,
        reversed: true,
        centered: false,
        event: false,
      },
      samples: {
        default: [
          `<MjToggle
  v-model="value"
>
  Default
</MjToggle>`,
        ],
        disabled: [
          `<MjToggle
  v-model="value"
  disabled
>
  Disabled
</MjToggle>`,
        ],
        size: [
          `<MjToggle
  v-model="value"
  size="sm"
>
  sm
</MjToggle>

<MjToggle
  v-model="value"
  name="Toggle"
  size="base"
>
  base
</MjToggle>`,
        ],
        reversed: [
          `<MjToggle
  v-model="value"
  reversed
>
  <div class="pr-4">
    <h4 class="font-medium">
      ${this.$t('props.centered')}
    </h4>
    <p class="text-sm">
      ${this.$t('examples.summary')}
    </p>
  </div>
</MjToggle>`,
        ],
        centered: [
          `<MjToggle
  v-model="value"
  centered
  reversed
>
  <div class="pr-4">
    <h4 class="font-medium">
      ${this.$t('props.centered')}
    </h4>
    <p class="text-sm">
      ${this.$t('examples.summary')}
    </p>
  </div>
</MjToggle>`,
        ],
        events: [
          `<MjToggle
  v-model="toggle"
  @change="showEvent('change')"
/>`,
        ],
      },
    };
  },
});
</script>
