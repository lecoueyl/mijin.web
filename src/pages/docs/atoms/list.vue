<template>
  <LayoutDoc
    :title="$t('sections.atoms.list.title')"
    :components="['List']"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <MjList>
        <MjListItem>
          {{ $t('examples.items.1.name') }}
        </MjListItem>
        <MjListItem>
          {{ $t('examples.items.2.name') }}
        </MjListItem>
        <MjListItem>
          {{ $t('examples.items.3.name') }}
        </MjListItem>
      </MjList>
    </Sample>

    <Sample
      :title="$t('props.divided')"
      :snippet="samples.divided"
    >
      <MjList divided>
        <MjListItem>
          {{ $t('examples.items.1.name') }}
        </MjListItem>
        <MjListItem>
          {{ $t('examples.items.2.name') }}
        </MjListItem>
        <MjListItem>
          {{ $t('examples.items.3.name') }}
        </MjListItem>
      </MjList>
    </Sample>

    <Sample
      :title="$t('props.inline')"
      :snippet="samples.inline"
    >
      <MjList inline>
        <MjListItem>
          {{ $t('examples.items.1.name') }}
        </MjListItem>
        <MjListItem>
          {{ $t('examples.items.2.name') }}
        </MjListItem>
        <MjListItem>
          {{ $t('examples.items.3.name') }}
        </MjListItem>
      </MjList>
    </Sample>

    <Sample
      :title="$t('props.gutter')"
      :snippet="samples.gutter"
    >
      <MjList gutter="lg">
        <MjListItem>
          {{ $t('examples.items.1.name') }}
        </MjListItem>
        <MjListItem>
          {{ $t('examples.items.2.name') }}
        </MjListItem>
        <MjListItem>
          {{ $t('examples.items.3.name') }}
        </MjListItem>
      </MjList>

      <MjList
        gutter="xl"
        class="mt-4"
      >
        <MjListItem>
          {{ $t('examples.items.1.name') }}
        </MjListItem>
        <MjListItem>
          {{ $t('examples.items.2.name') }}
        </MjListItem>
        <MjListItem>
          {{ $t('examples.items.3.name') }}
        </MjListItem>
      </MjList>
    </Sample>

    <Sample
      :title="$t('props.orderedList')"
      :snippet="samples.ol"
    >
      <MjList tag="ol">
        <MjListItem>
          {{ $t('examples.items.1.name') }}
        </MjListItem>
        <MjListItem>
          {{ $t('examples.items.2.name') }}
        </MjListItem>
        <MjListItem>
          {{ $t('examples.items.3.name') }}
        </MjListItem>
      </MjList>
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
          `<MjList>
  <MjListItem>
    ${this.$t('examples.items.1.name')}
  </MjListItem>
  <MjListItem>
    ${this.$t('examples.items.2.name')}
  </MjListItem>
  <MjListItem>
    ${this.$t('examples.items.3.name')}
  </MjListItem>
</MjList>`,
        ],
        divided: [
          `<MjList divided>
  <MjListItem>
    ${this.$t('examples.items.1.name')}
  </MjListItem>
  <MjListItem>
    ${this.$t('examples.items.2.name')}
  </MjListItem>
  <MjListItem>
    ${this.$t('examples.items.3.name')}
  </MjListItem>
</MjList>`,
        ],
        inline: [
          `<MjList inline>
  <MjListItem>
    ${this.$t('examples.items.1.name')}
  </MjListItem>
  <MjListItem>
    ${this.$t('examples.items.2.name')}
  </MjListItem>
  <MjListItem>
    ${this.$t('examples.items.3.name')}
  </MjListItem>
</MjList>`,
        ],
        gutter: [
          `<MjList gutter="lg">
  <MjListItem>
    ${this.$t('examples.items.1.name')}
  </MjListItem>
  <MjListItem>
    ${this.$t('examples.items.2.name')}
  </MjListItem>
  <MjListItem>
    ${this.$t('examples.items.3.name')}
  </MjListItem>
</MjList>`,
          `<MjList gutter="xl">
  <MjListItem>
    ${this.$t('examples.items.1.name')}
  </MjListItem>
  <MjListItem>
    ${this.$t('examples.items.2.name')}
  </MjListItem>
  <MjListItem>
    ${this.$t('examples.items.3.name')}
  </MjListItem>
</MjList>`,
        ],
        ol: [
          `<MjList tag="ol">
  <MjListItem>
    ${this.$t('examples.items.1.name')}
  </MjListItem>
  <MjListItem>
    ${this.$t('examples.items.2.name')}
  </MjListItem>
  <MjListItem>
    ${this.$t('examples.items.3.name')}
  </MjListItem>
</MjList>`,
        ],
      },
    };
  },
});
</script>
