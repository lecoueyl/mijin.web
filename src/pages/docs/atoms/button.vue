<template>
  <LayoutDoc
    :title="$t('sections.atoms.button.title')"
    components="Button"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <MjButton>
        {{ $t('props.default') }}
      </MjButton>
    </Sample>

    <Sample
      :title="$t('props.color')"
      :snippet="samples.color"
    >
      <div class="space-x-4">
        <MjButton color="warning">
          warning
        </MjButton>

        <MjButton color="danger">
          danger
        </MjButton>
      </div>
    </Sample>

    <Sample
      :title="$t('props.secondary')"
      :snippet="samples.secondary"
    >
      <MjButton
        variant="secondary"
      >
        {{ $t('props.secondary') }}
      </MjButton>
    </Sample>

    <Sample
      :title="$t('props.disabled')"
      :snippet="samples.disabled"
    >
      <MjButton
        disabled
      >
        {{ $t('props.disabled') }}
      </MjButton>
    </Sample>

    <Sample
      :title="$t('props.icon')"
      :snippet="samples.icon"
    >
      <MjButton>
        <template #icon>
          <MjIcon name="copy" />
        </template>
        {{ $t('props.icon') }}
      </MjButton>

      <MjButton icon-right>
        <template #icon>
          <MjIcon name="external-link" />
        </template>
        {{ $t('props.icon') }}
      </MjButton>

      <MjButton>
        <template #icon>
          <MjIcon name="camera" />
        </template>
      </MjButton>
    </Sample>

    <Sample
      :title="$t('props.link')"
      :snippet="samples.link"
    >
      <MjButton
        tag="nuxt-link"
        :to="localePath('/')"
        class="inline-block"
      >
        {{ $t('props.link') }}
      </MjButton>
    </Sample>

    <Sample
      :title="$t('props.size')"
      :snippet="samples.size"
    >
      <div class="space-x-4">
        <MjButton
          v-for="size in ['sm', 'base', 'lg']"
          :key="size"
          :size="size"
        >
          {{ size }}
        </MjButton>
      </div>
    </Sample>

    <Sample
      :title="$t('props.group')"
      :snippet="samples.group"
    >
      <div
        class="flex"
        role="group"
      >
        <MjButton group="first">
          {{ $t('props.group') }}
        </MjButton>

        <MjButton group>
          {{ $t('props.group') }}
        </MjButton>

        <MjButton group="last">
          <template #icon>
            <MjIcon name="calendar" />
          </template>
        </MjButton>
      </div>
    </Sample>

    <Sample
      :title="$t('props.loading')"
      :snippet="samples.loading"
    >
      <MjButton loading>
        {{ $t('props.loading') }}
      </MjButton>
    </Sample>

    <Sample
      :title="$t('props.busy')"
      :snippet="samples.busy"
    >
      <MjButton busy>
        {{ $t('props.busy') }}
      </MjButton>
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
          `<MjButton>
  ${this.$t('props.default')}
</MjButton>`,
        ],
        color: [
          `<MjButton color="warning">
  warning
</MjButton>`,
          `<MjButton color="danger">
  danger
</MjButton>`,
        ],
        secondary: [
          `<MjButton variant="secondary">
  ${this.$t('props.secondary')}
</MjButton>`,
        ],
        disabled: [
          `<MjButton disabled>
  ${this.$t('props.disabled')}
</MjButton>`,
        ],
        icon: [
          `<MjButton>
  <template #icon>
    <MjIcon name="copy" />
  </template>
  ${this.$t('props.icon')}
</MjButton>`,

          `<MjButton icon-right>
  <template #icon>
    <MjIcon name="external-link" />
  </template>
  ${this.$t('props.icon')}
</MjButton>`,

          `<MjButton>
  <template #icon>
    <MjIcon name="camera" />
  </template>
</MjButton>`,
        ],
        link: [
          `<MjButton
  tag="nuxt-link"
  to="/"
  class="inline-block"
>
  ${this.$t('props.link')}
</MjButton>`,
        ],
        size: [
          `<MjButton size="sm">
  ${this.$t('props.size')}
</MjButton>`,

          `<MjButton size="lg">
  ${this.$t('props.size')}
</MjButton>`,
        ],
        group: [
          `<div
  class="flex"
  role="group"
>
  <MjButton group="first">
    ${this.$t('props.group')}
  </MjButton>

  <MjButton group>
    ${this.$t('props.group')}
  </MjButton>

  <MjButton group="last">
    <template #icon>
      <MjIcon name="calendar" />
    </template>
  </MjButton>
</div>`,
        ],
        loading: [
          `<MjButton loading>
  ${this.$t('props.loading')}
</MjButton>`,
        ],
        busy: [
          `<MjButton busy>
  ${this.$t('props.busy')}
</MjButton>`,
        ],
      },
    };
  },
});
</script>
