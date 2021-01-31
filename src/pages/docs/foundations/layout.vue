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
      <MjRow>
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
        class="mt-8"
      >
        <MjRowItem class="w-1/2">
          <div class="h-24 p-2 rounded-md bg-primary-500 text-white flex items-center justify-center">
            w-1/12
          </div>
        </MjRowItem>

        <MjRowItem class="w-24">
          <div class="h-24 rounded-md bg-primary-500 text-white flex items-center justify-center">
            w-24
          </div>
        </MjRowItem>

        <MjRowItem class="w-16">
          <div class="h-16 rounded-md bg-primary-500 text-white flex items-center justify-center">
            w-16
          </div>
        </MjRowItem>

        <MjRowItem grow>
          <div class="h-16 rounded-md bg-primary-500 text-white flex items-center justify-center">
            grow
          </div>
        </MjRowItem>
      </MjRow>

      <MjRow
        class="mt-8 space-y-6 sm:space-y-0"
        gutter="lg"
      >
        <MjRowItem
          v-for="item in 2"
          :key="item"
          class="w-full sm:w-6/12"
        >
          <div class="h-24 rounded-md bg-orange-500 text-orange-50 flex items-center justify-center">
            {{ item }}
          </div>
        </MjRowItem>
      </MjRow>

      <MjRow
        class="mt-8 space-y-6 sm:space-y-0"
        gutter="base"
      >
        <MjRowItem
          v-for="item in 12"
          :key="item"
          class="w-full sm:w-1/12"
        >
          <div class="rounded-md bg-primary-500 text-primary-50 text-center py-4">
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
  class="mt-8"
>
  <MjRowItem class="w-1/2">
    <div class="h-24 p-2 rounded-md bg-primary-500 text-white flex items-center justify-center">
      w-1/12
    </div>
  </MjRowItem>

  <MjRowItem class="w-24">
    <div class="h-24 rounded-md bg-primary-500 text-white flex items-center justify-center">
      w-24
    </div>
  </MjRowItem>

  <MjRowItem class="w-16">
    <div class="h-16 rounded-md bg-primary-500 text-white flex items-center justify-center">
      w-16
    </div>
  </MjRowItem>

  <MjRowItem grow>
    <div class="h-16 rounded-md bg-primary-500 text-white flex items-center justify-center">
      grow
    </div>
  </MjRowItem>
</MjRow>`,
          `<MjRow
  class="mt-8 space-y-6 sm:space-y-0"
  gutter="lg"
>
  <MjRowItem class="w-full sm:w-6/12">
    <div class="h-24 rounded-md bg-orange-500 text-orange-50 flex items-center justify-center">
      1
    </div>
  </MjRowItem>

  <MjRowItem class="w-full sm:w-6/12">
    <div class="h-24 rounded-md bg-orange-500 text-orange-50 flex items-center justify-center">
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
