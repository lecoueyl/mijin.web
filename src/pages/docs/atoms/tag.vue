<template>
  <LayoutDoc
    :title="$t('sections.atoms.tag.title')"
    components="Tag"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <MjTag>
        {{ $t('props.default') }}
      </MjTag>
    </Sample>

    <Sample
      :title="$t('props.removable')"
      :snippet="samples.removable"
    >
      <MjTag
        v-if="showTag"
        removable
        @remove="removeTag()"
      >
        {{ $t('props.removable') }}
      </MjTag>
    </Sample>

    <Sample
      :title="$t('props.color')"
      :snippet="samples.color"
    >
      <div class="space-x-4">
        <MjTag
          v-for="color in ['primary', 'blue', 'pink']"
          :key="color"
          :color="color"
        >
          {{ color }}
        </MjTag>
      </div>
    </Sample>

    <Sample
      :title="$t('props.size')"
      :snippet="samples.size"
    >
      <MjTag size="sm">
        {{ $t('props.size') }}
      </MjTag>
    </Sample>
  </LayoutDoc>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      showTag: true,
      samples: {
        default: [`<MjTag hred="#">
  ${this.$t('props.tag')}
</MjTag>`],
        removable: [`<MjTag
  removable
  @remove="remove()"
>
  ${this.$t('props.removable')}
</MjTag>`],
        color: [`<MjTag color="primary">
  ${this.$t('props.color')}
</MjTag>`,
        `<MjTag color="blue">
  ${this.$t('props.color')}
</MjTag>`],
        size: [`<MjTag size="sm">
  ${this.$t('props.size')}
</MjTag>`],
      },
    };
  },

  methods: {
    removeTag() {
      this.showTag = false;
      setTimeout(() => {
        this.showTag = true;
      }, 500);
    },
  },
});
</script>
