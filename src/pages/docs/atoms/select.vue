<template>
  <LayoutDoc
    ref="layout"
    :title="$t('sections.atoms.select.title')"
    components="Select"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <MjSelect
        v-model="model.default"
        class="sm:w-1/2"
      >
        <option
          v-for="item in $t('examples.items')"
          :key="item.name"
          :value="item.name"
        >
          {{ item.name }}
        </option>
      </MjSelect>
    </Sample>

    <Sample
      :title="$t('props.label')"
      :snippet="samples.label"
    >
      <MjSelect
        v-model="model.label"
        class="sm:w-1/2"
      >
        <option
          v-for="item in $t('examples.items')"
          :key="item.name"
          :value="item.name"
        >
          {{ item.name }}
        </option>

        <template #label>
          {{ $t('examples.select.label') }}
        </template>
      </MjSelect>
    </Sample>

    <Sample
      :title="$t('props.placeholder')"
      :snippet="samples.placeholder"
    >
      <MjSelect
        v-model="model.placeholder"
        :placeholder="$t('examples.select.placeholder')"
        class="sm:w-1/2"
      >
        <option
          v-for="item in $t('examples.items')"
          :key="item.name"
          :value="item.name"
        >
          {{ item.name }}
        </option>
      </MjSelect>
    </Sample>

    <Sample
      :title="$t('props.disabled')"
      :snippet="samples.disabled"
    >
      <MjSelect
        v-model="model.disabled"
        class="sm:w-1/2"
        disabled
      >
        <option
          v-for="item in $t('examples.items')"
          :key="item.name"
          :value="item.name"
        >
          {{ item.name }}
        </option>
      </MjSelect>
    </Sample>

    <Sample
      :title="$t('common.events')"
      :snippet="samples.events"
    >
      <MjSelect
        v-model="model.event"
        class="sm:w-1/2"
        @blur="$refs.layout.showEvent('blur', model.event)"
        @click="$refs.layout.showEvent('click', model.event)"
        @focus="$refs.layout.showEvent('focus', model.event)"
        @select="$refs.layout.showEvent('select', model.event)"
      >
        <option
          v-for="item in $t('examples.items')"
          :key="item.name"
          :value="item.name"
        >
          {{ item.name }}
        </option>
      </MjSelect>
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
        label: this.$t('examples.items.1.name'),
        placeholder: '',
        disabled: this.$t('examples.items.2.name'),
        event: this.$t('examples.items.1.name'),
      },
      samples: {
        default: [
          `<MjSelect v-model="selectedValue">
  <option value="${this.$t('examples.items.1.name')}">${this.$t('examples.items.1.name')}</option>
  <option value="${this.$t('examples.items.2.name')}">${this.$t('examples.items.2.name')}</option>
  <option value="${this.$t('examples.items.3.name')}">${this.$t('examples.items.3.name')}</option>
</MjSelect>`,
        ],
        label: [
          `<MjSelect v-model="selectedValue">
  <option value="${this.$t('examples.items.1.name')}">${this.$t('examples.items.1.name')}</option>
  <option value="${this.$t('examples.items.2.name')}">${this.$t('examples.items.2.name')}</option>
  <option value="${this.$t('examples.items.3.name')}">${this.$t('examples.items.3.name')}</option>

  <template #label>
    ${this.$t('examples.select.label')}
  </template>
</MjSelect>`,
        ],
        placeholder: [
          `<MjSelect
  v-model="selectedValue"
  placeholder="${this.$t('examples.select.placeholder')}"
>
  <option value="${this.$t('examples.items.1.name')}">${this.$t('examples.items.1.name')}</option>
  <option value="${this.$t('examples.items.2.name')}">${this.$t('examples.items.2.name')}</option>
  <option value="${this.$t('examples.items.3.name')}">${this.$t('examples.items.3.name')}</option>
</MjSelect>`,
        ],
        disabled: [
          `<MjSelect
  v-model="selectedValue"
  disabled
>
  <option value="${this.$t('examples.items.1.name')}">${this.$t('examples.items.1.name')}</option>
  <option value="${this.$t('examples.items.2.name')}">${this.$t('examples.items.2.name')}</option>
  <option value="${this.$t('examples.items.3.name')}">${this.$t('examples.items.3.name')}</option>
</MjSelect>`,
        ],
        events: [
          `<MjSelect
  v-model="selectedValue"
  @blur="showEvent('blur')"
  @click="showEvent('click')"
  @focus="showEvent('focus')"
  @select="showEvent('select')"
>
  <option value="${this.$t('examples.items.1.name')}">${this.$t('examples.items.1.name')}</option>
  <option value="${this.$t('examples.items.2.name')}">${this.$t('examples.items.2.name')}</option>
  <option value="${this.$t('examples.items.3.name')}">${this.$t('examples.items.3.name')}</option>
</MjSelect>`,
        ],
      },
    };
  },
});
</script>
