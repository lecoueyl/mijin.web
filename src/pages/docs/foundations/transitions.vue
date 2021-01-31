<template>
  <LayoutDoc
    :title="$t('sections.foundations.transitions.title')"
    :components="['TransitionFade', 'TransitionFadeX', 'TransitionFadeY']"
  >
    <Sample
      :title="$t('sections.foundations.transitions.fade')"
      :snippet="samples.fade"
    >
      <div
        class="flex mb-4"
        role="group"
      >
        <MjButton
          group="first"
          @click="add('fade')"
        >
          {{ $t('common.add') }}
        </MjButton>

        <MjButton
          group="last"
          @click="remove('fade', arrays.fade[arrays.fade.length - 1])"
        >
          {{ $t('common.remove') }}
        </MjButton>
      </div>

      <MjTransitionFade
        flip
        group
        tag="ul"
        class="space-y-2"
      >
        <li
          v-for="item in arrays.fade"
          :key="item"
          class="w-full p-6 bg-pink-200 text-gray-700 rounded text-center cursor-pointer"
          @click="remove('fade', item)"
        >
          <div class="rounded-full h-2 bg-pink-500" />
        </li>
      </MjTransitionFade>
    </Sample>

    <Sample
      :title="$t('sections.foundations.transitions.fadeX')"
      :snippet="samples.fadeX"
    >
      <div
        class="flex mb-4"
        role="group"
      >
        <MjButton
          group="first"
          @click="add('fadeX')"
        >
          {{ $t('common.add') }}
        </MjButton>

        <MjButton
          group="last"
          @click="remove('fadeX', arrays.fadeX[arrays.fadeX.length - 1])"
        >
          {{ $t('common.remove') }}
        </MjButton>
      </div>

      <MjTransitionFadeX
        flip
        group
        tag="ul"
        class="space-y-2"
      >
        <li
          v-for="item in arrays.fadeX"
          :key="item"
          class="w-full p-6 bg-pink-200 text-gray-700 rounded text-center cursor-pointer"
          @click="remove('fadeX', item)"
        >
          <div class="rounded-full h-2 bg-pink-500" />
        </li>
      </MjTransitionFadeX>
    </Sample>

    <Sample
      :title="$t('sections.foundations.transitions.fadeY')"
      :snippet="samples.fadeY"
    >
      <div
        class="flex mb-4"
        role="group"
      >
        <MjButton
          group="first"
          @click="add('fadeY')"
        >
          {{ $t('common.add') }}
        </MjButton>

        <MjButton
          group="last"
          @click="remove('fadeY', arrays.fadeY[arrays.fadeY.length - 1])"
        >
          {{ $t('common.remove') }}
        </MjButton>
      </div>

      <MjTransitionFadeY
        flip
        group
        tag="ul"
        class="space-y-2"
      >
        <li
          v-for="item in arrays.fadeY"
          :key="item"
          class="w-full p-6 bg-pink-200 text-gray-700 rounded text-center cursor-pointer"
          @click="remove('fadeY', item)"
        >
          <div class="rounded-full h-2 bg-pink-500" />
        </li>
      </MjTransitionFadeY>
    </Sample>
  </LayoutDoc>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      arrays: {
        fade: [Date.now()],
        fadeX: [Date.now()],
        fadeY: [Date.now()],
      },
      samples: {
        fade: [
          `<MjTransitionFade
  flip
  group
>
  ...
</MjTransitionFade>`,
        ],
        fadeX: [
          `<MjTransitionFadeX
  flip
  group
>
  ...
</MjTransitionFadeX>`,
        ],
        fadeY: [
          `<MjTransitionFadeY
  flip
  group
>
  ...
</MjTransitionFadeY>`,
        ],
      },
    };
  },

  methods: {
    add(array) {
      this.arrays[array].push(Date.now());
    },

    remove(array, item) {
      if (this.arrays[array].length === 1) return;

      this.arrays[array] = this.arrays[array].filter((i) => i !== item);
    },
  },
});
</script>
