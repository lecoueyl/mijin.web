<template>
  <LayoutDoc
    :title="$t('sections.foundations.layout.title')"
    :components="['Container', 'Row', 'RowItem']"
  >
    <Sample
      :title="$t('sections.foundations.layout.container')"
      :snippet="samples.container"
    >
      <MjContainer>
        <div class="py-10 bg-primary-500 rounded-md" />
      </MjContainer>
    </Sample>

    <Sample
      :title="$t('sections.foundations.layout.grid')"
      :snippet="samples.grid"
    >
      <MjGrid cols="3" gap="4">
        <div class="py-10 bg-primary-500 rounded-md" />
        <div class="py-10 bg-primary-500 rounded-md" />
        <div class="py-10 bg-primary-500 rounded-md" />
      </MjGrid>
    </Sample>

    <Sample
      :title="$t('sections.foundations.layout.row')"
      :snippet="samples.row"
    >
      <MjRow class="font-medium text-sm">
        <MjRowItem class="w-1/3">
          <div class="bg-primary-500 text-primary-50 text-center py-4 rounded-l">
            w-1/3
          </div>
        </MjRowItem>

        <MjRowItem class="w-1/3">
          <div class="bg-primary-400 text-primary-50 text-center py-4">
            w-1/3
          </div>
        </MjRowItem>

        <MjRowItem class="w-1/3">
          <div class="bg-primary-500 text-primary-50 text-center py-4 rounded-r">
            w-1/3
          </div>
        </MjRowItem>
      </MjRow>

      <MjRow
        align="center"
        gutter="base"
        class="mt-8 font-medium text-sm"
      >
        <MjRowItem class="w-2/12">
          <div class="h-24 p-2 rounded-md bg-cyan-500 text-white flex items-center justify-center">
            w-2/12
          </div>
        </MjRowItem>

        <MjRowItem class="w-24">
          <div class="h-24 rounded-md bg-cyan-500 text-white flex items-center justify-center">
            w-24
          </div>
        </MjRowItem>

        <MjRowItem class="w-16">
          <div class="h-16 rounded-md bg-cyan-500 text-white flex items-center justify-center">
            w-16
          </div>
        </MjRowItem>

        <MjRowItem grow>
          <div class="h-16 rounded-md bg-cyan-500 text-white flex items-center justify-center">
            grow
          </div>
        </MjRowItem>
      </MjRow>

      <MjRow
        gutter="lg"
        class="mt-8 flex-wrap sm:flex-nowrap gap-4 sm:gap-0 font-medium text-sm"
      >
        <MjRowItem
          v-for="item in 3"
          :key="item"
          class="w-full sm:w-1/3"
        >
          <div class="h-16 rounded-md bg-pink-500 text-pink-50 flex items-center justify-center">
            {{ item }}
          </div>
        </MjRowItem>
      </MjRow>
    </Sample>
  </LayoutDoc>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      samples: {
        container: [
          `<MjContainer>
  <div class="py-10 bg-gray-300 rounded-md" />
</MjContainer>`,
        ],
        grid: [
          `<MjGrid cols="3" gap="4">
  <div class="py-10 bg-gray-300 rounded-md" />
  <div class="py-10 bg-gray-300 rounded-md" />
  <div class="py-10 bg-gray-300 rounded-md" />
</MjGrid>`,
        ],
        row: [
          `<MjRow>
  <MjRowItem class="w-1/3">
    <div class="bg-primary-500 text-primary-50 text-center py-4 rounded-l">
      w-1/3
    </div>
  </MjRowItem>

  <MjRowItem class="w-1/3">
    <div class="bg-primary-400 text-primary-50 text-center py-4">
      w-1/3
    </div>
  </MjRowItem>

  <MjRowItem class="w-1/3">
    <div class="bg-primary-500 text-primary-50 text-center py-4 rounded-r">
      w-1/3
    </div>
  </MjRowItem>
</MjRow>`,
          `<MjRow
  align="center"
  gutter="base"
>
  <MjRowItem class="w-2/2">
    <div class="h-24 p-2 rounded-md bg-cyan-500 text-white flex items-center justify-center">
      w-1/12
    </div>
  </MjRowItem>

  <MjRowItem class="w-24">
    <div class="h-24 rounded-md bg-cyan-500 text-white flex items-center justify-center">
      w-24
    </div>
  </MjRowItem>

  <MjRowItem class="w-16">
    <div class="h-16 rounded-md bg-cyan-500 text-white flex items-center justify-center">
      w-16
    </div>
  </MjRowItem>

  <MjRowItem grow>
    <div class="h-16 rounded-md bg-cyan-500 text-white flex items-center justify-center">
      grow
    </div>
  </MjRowItem>
</MjRow>`,
          `<MjRow
  gutter="lg"
  class="flex-wrap sm:flex-nowrap gap-4 sm:gap-0"
>
  <MjRowItem class="w-full sm:w-1/3">
    <div class="h-16 rounded-md bg-pink-500 text-pink-50 flex items-center justify-center">
      1
    </div>
  </MjRowItem>

  <MjRowItem class="w-full sm:w-1/3">
    <div class="h-16 rounded-md bg-pink-500 text-pink-50 flex items-center justify-center">
      1
    </div>
  </MjRowItem>

  <MjRowItem class="w-full sm:w-1/3">
    <div class="h-16 rounded-md bg-pink-500 text-pink-50 flex items-center justify-center">
      1
    </div>
  </MjRowItem>
</MjRow>`,
        ],
      },
    };
  },
});
</script>
