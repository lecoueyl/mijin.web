<template>
  <LayoutDoc
    :title="$t('sections.atoms.avatar.title')"
    components="Avatar"
  >
    <Sample
      :title="$t('props.image')"
      :snippet="samples.image"
    >
      <MjAvatar
        alt="image"
        :src="require('~/assets/img/mijin.png')"
      />
    </Sample>

    <Sample
      :title="$t('props.letter')"
      :snippet="samples.letter"
    >
      <MjAvatar
        letter="BB"
      />
    </Sample>

    <Sample
      :title="$t('props.size')"
      :snippet="samples.size"
    >
      <div class="flex items-center space-x-4">
        <MjAvatar
          v-for="size in ['sm', 'base', 'lg', 'xl']"
          :key="size"
          :size="size"
          letter="BB"
        />
      </div>
    </Sample>

    <Sample
      :title="$t('props.variant')"
      :snippet="samples.variant"
    >
      <MjAvatar
        variant="squared"
        letter="BB"
      />
    </Sample>

    <Sample
      :title="$t('props.color')"
      :snippet="samples.color"
    >
      <div class="flex items-center space-x-4">
        <MjAvatar
          v-for="color in ['blue', 'pink', 'teal']"
          :key="color"
          :color="color"
          letter="BB"
        />
      </div>
    </Sample>
  </LayoutDoc>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      samples: {
        image: [
          `<MjAvatar
  alt="image"
  src="https://..."
/>`,
        ],
        letter: [
          '<MjAvatar letter="BB" />',
        ],
        size: [
          `<MjAvatar
  size="sm"
  letter="BB"
/>`,
          `<MjAvatar
  size="base"
  letter="BB"
/>`,
          `<Mjvatar
  size="lg"
  letter="BB"
/>`,
          `<MjAvatar
  size="xl"
  letter="BB"
/>`,
        ],
        variant: [
          `<MjAvatar
  alt="image"
  img="https://..."
  variant="squared"
/>`,
        ],
        color: [
          `<MjAvatar
  color="blue"
  letter="BB"
/>`,
          `<MjAvatar
  color="pink"
  letter="BB"
/>`,
          `<MjAvatar
  color="teal"
  letter="BB"
/>`,
        ],
      },
    };
  },
});
</script>
