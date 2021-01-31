<template>
  <LayoutDoc
    :title="$t('sections.atoms.link.title')"
    components="Link"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <MjLink href="#">
        {{ $t('examples.link') }}
      </MjLink>
    </Sample>

    <Sample
      :title="$t('props.external')"
      :snippet="samples.external"
    >
      <MjLink
        external
        href="#"
      >
        {{ $t('examples.link') }}
      </MjLink>
    </Sample>

    <Sample
      :title="$t('props.color')"
      :snippet="samples.color"
    >
      <div class="space-x-8">
        <MjLink
          v-for="color in ['gray', 'danger', 'warning']"
          :key="color"
          :color="color"
          href="#"
        >
          {{ $t('examples.link') }}
        </MjLink>
      </div>
    </Sample>

    <Sample
      :title="$t('props.tag')"
      :snippet="samples.tag"
    >
      <MjLink
        tag="nuxt-link"
        to="/"
      >
        {{ $t('examples.link') }}
      </MjLink>
    </Sample>

    <Sample
      :title="$t('props.underline')"
      :snippet="samples.underline"
    >
      <MjLink
        href="#"
        underline
      >
        {{ $t('examples.link') }}
      </MjLink>
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
          `<MjLink href="#">
  ${this.$t('examples.link')}
</MjLink>`,
        ],
        external: [
          `<MjLink
  href="#"
  external
>
  ${this.$t('examples.link')}
</MjLink>`,
        ],
        color: [
          `<MjLink color="gray">
  ${this.$t('examples.link')}
</MjLink>`,

          `<MjLink color="danger">
  ${this.$t('examples.link')}
</MjLink>`,

          `<MjLink color="warning">
  ${this.$t('examples.link')}
</MjLink>`,
        ],
        tag: [
          `<MjLink
  tag="nuxt-link"
  to="/"
>
  ${this.$t('examples.link')}
</MjLink>`,
        ],
        underline: [
          `<MjLink
  underline
  href="#""
>
  ${this.$t('examples.link')}
</MjLink>`,
        ],
      },
    };
  },
});
</script>
