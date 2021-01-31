<template>
  <LayoutDoc
    ref="layout"
    :title="$t('sections.atoms.radio.title')"
    components="Radio"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <div class="space-x-8">
        <MjRadio
          v-model="model.default"
          name="default"
          :value="$t('examples.items.1.name')"
        >
          {{ $t('examples.items.1.name') }}
        </MjRadio>

        <MjRadio
          v-model="model.default"
          name="default"
          :value="$t('examples.items.2.name')"
        >
          {{ $t('examples.items.2.name') }}
        </MjRadio>
      </div>
    </Sample>

    <Sample
      :title="$t('props.disabled')"
      :snippet="samples.disabled"
    >
      <div class="space-x-8">
        <MjRadio
          v-model="model.disabled"
          name="disabled"
          disabled
          :value="$t('examples.items.1.name')"
        >
          {{ $t('examples.items.1.name') }}
        </MjRadio>

        <MjRadio
          v-model="model.disabled"
          name="disabled"
          disabled
          :value="$t('examples.items.2.name')"
        >
          {{ $t('examples.items.2.name') }}
        </MjRadio>
      </div>
    </Sample>

    <Sample
      :title="$t('props.bordered')"
      :snippet="samples.bordered"
    >
      <div class="grid sm:grid-cols-2 gap-4">
        <MjRadio
          v-model="model.bordered"
          name="bordered"
          bordered
          :value="$t('examples.items.1.name')"
        >
          {{ $t('examples.items.1.name') }}
          <template #summary>
            <div class="pt-1 text-sm text-gray-700 dark:text-gray-400">
              {{ $t('examples.items.1.description') }}
            </div>
          </template>
        </MjRadio>

        <MjRadio
          v-model="model.bordered"
          name="bordered"
          bordered
          :value="$t('examples.items.2.name')"
        >
          {{ $t('examples.items.2.name') }}
          <template #summary>
            <div class="pt-1 text-sm text-gray-700 dark:text-gray-400">
              {{ $t('examples.items.2.description') }}
            </div>
          </template>
        </MjRadio>
      </div>
    </Sample>

    <Sample
      :title="$t('common.events')"
      :snippet="samples.events"
    >
      <div class="space-x-8">
        <MjRadio
          v-model="model.event"
          name="event"
          :value="$t('examples.items.1.name')"
          @change="$refs.layout.showEvent('change', model.event)"
        >
          {{ $t('examples.items.1.name') }}
        </MjRadio>

        <MjRadio
          v-model="model.event"
          name="event"
          :value="$t('examples.items.2.name')"
          @change="$refs.layout.showEvent('change', model.event)"
        >
          {{ $t('examples.items.2.name') }}
        </MjRadio>
      </div>
    </Sample>
  </LayoutDoc>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      model: {
        default: this.$t('examples.items.1.name'),
        disabled: this.$t('examples.items.1.name'),
        bordered: this.$t('examples.items.1.name'),
        event: this.$t('examples.items.1.name'),
      },
      samples: {
        default: [
          `<MjRadio
  v-model="default"
  name="default"
  value="${this.$t('examples.items.1.name')}"
>
  ${this.$t('examples.items.1.name')}
</MjRadio>

<MjRadio
  v-model="default"
  name="default"
  value="${this.$t('examples.items.2.name')}"
>
  ${this.$t('examples.items.2.name')}
</MjRadio>`,
        ],
        disabled: [
          `<MjRadio
  v-model="disabled"
  name="disabled"
  disabled
  value="${this.$t('examples.items.1.name')}"
>
  ${this.$t('examples.items.1.name')}
</MjRadio>

<MjRadio
  v-model="disabled"
  name="disabled"
  disabled
  value="${this.$t('examples.items.2.name')}"
>
  ${this.$t('examples.items.2.name')}
</MjRadio>`,
        ],
        bordered: [
          `<MjRadio
  v-model="bordered"
  name="bordered"
  bordered
  value="${this.$t('examples.items.1.name')}"
>
  ${this.$t('examples.items.1.name')}
  <template #summary>
    <div class="pt-1 text-sm text-gray-700">
      ${this.$t('examples.summary')}
    </div>
  </template>
</MjRadio>`,
        ],
        events: [
          `<MjRadio
  v-model="eventValue"
  name="event"
  value="${this.$t('examples.items.1.name')}"
  @change="showEvent('change')"
>
  ${this.$t('examples.items.1.name')}
</MjRadio>

<MjRadio
  v-model="eventValue"
  name="event"
  value="${this.$t('examples.items.2.name')}"
  @change="showEvent('change')"
>
  ${this.$t('examples.items.2.name')}
</MjRadio>`,
        ],
      },
    };
  },
});
</script>
