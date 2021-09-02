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
        letter="MJ"
      />
    </Sample>

    <Sample
      :title="$t('props.slot')"
      :snippet="samples.slot"
    >
      <MjAvatar>
        <MjIcon name="calendar" />
      </MjAvatar>
    </Sample>

    <Sample
      :title="$t('props.placeholder')"
      :snippet="samples.size"
    >
      <div class="flex items-center space-x-4">
        <MjAvatar
          v-for="size in ['sm', 'base', 'lg', 'xl']"
          :key="size"
          :size="size"
          letter="MJ"
        />
      </div>
    </Sample>

    <Sample
      :title="$t('props.variant')"
      :snippet="samples.variant"
    >
      <MjAvatar
        variant="squared"
        letter="MJ"
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
          letter="MJ"
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
          '<MjAvatar letter="MJ" />',
        ],
        slot: [
          `<MjAvatar>
  <MjIcon name="calendar" />
</MjAvatar>`,
        ],
        size: [
          `<MjAvatar
  size="sm"
  letter="MJ"
/>`,
          `<MjAvatar
  size="base"
  letter="MJ"
/>`,
          `<Mjvatar
  size="lg"
  letter="MJ"
/>`,
          `<MjAvatar
  size="xl"
  letter="MJ"
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
  letter="MJ"
/>`,
          `<MjAvatar
  color="pink"
  letter="MJ"
/>`,
          `<MjAvatar
  color="teal"
  letter="MJ"
/>`,
        ],
      },
    };
  },
});
</script>
