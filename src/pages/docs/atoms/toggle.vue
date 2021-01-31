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
      <MjToggle
        v-model="model.default"
        name="Toggle"
      >
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
      <div class="flex items-center space-x-8">
        <MjToggle
          v-for="size in ['sm', 'base']"
          :key="size"
          v-model="model.size"
          :size="size"
        >
          <span :class="{'text-sm leading-loose' : size === 'sm'}">{{ size }}</span>
        </MjToggle>
      </div>
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
        event: false,
      },
      samples: {
        default: [
          `<MjToggle
  v-model="value"
  name="Toggle"
>
  Default
</MjToggle>`,
        ],
        disabled: [
          `<MjToggle
  v-model="value"
  name="Toggle"
  disabled
>
  Disabled
</MjToggle>`,
        ],
        size: [
          `<MjToggle
  v-model="value"
  name="Toggle"
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
