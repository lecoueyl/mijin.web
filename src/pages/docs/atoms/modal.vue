<template>
  <LayoutDoc
    :title="$t('sections.atoms.modal.title')"
    components="Modal"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <MjButton @click="$refs.default.open()">
        {{ $t('props.default') }}
      </MjButton>

      <MjModal ref="default">
        <div class="sm:flex sm:items-start">
          <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
            <MjStatusIcon
              size="lg"
              status="danger"
            />
          </div>
          <div class="mt-3 sm:mt-0 sm:ml-4">
            <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-gray-50 text-center sm:text-left">
              {{ $t('examples.modal.title') }}
            </h3>

            <p class="pt-2 text-gray-800 dark:text-gray-300">
              {{ $t('examples.modal.description') }}
            </p>
          </div>
        </div>

        <footer class="pt-8 flex flex-col-reverse sm:flex-row sm:justify-end">
          <MjButton
            variant="secondary"
            @click="$refs.default.close()"
          >
            {{ $t('common.cancel') }}
          </MjButton>

          <MjButton
            class="mb-4 sm:mb-0 sm:ml-2"
            @click="$refs.default.close()"
          >
            {{ $t('common.confirm') }}
          </MjButton>
        </footer>
      </MjModal>
    </Sample>

    <Sample
      :title="$t('props.size')"
      :snippet="samples.size"
    >
      <div class="space-x-4">
        <template v-for="size in ['lg', 'full']">
          <div
            :key="size"
            class="inline-block"
          >
            <MjButton @click="$refs[size][0].open()">
              {{ size }}
            </MjButton>

            <MjModal
              :ref="size"
              :size="size"
            >
              <div class="sm:flex sm:items-start">
                <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  <MjStatusIcon
                    size="lg"
                    status="danger"
                  />
                </div>
                <div class="mt-3 sm:mt-0 sm:ml-4">
                  <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-gray-50 text-center sm:text-left">
                    {{ $t('examples.modal.title') }}
                  </h3>

                  <p class="pt-2 text-gray-800 dark:text-gray-300">
                    {{ $t('examples.modal.description') }}
                  </p>
                </div>
              </div>

              <footer class="pt-8 flex flex-col-reverse sm:flex-row sm:justify-end">
                <MjButton
                  variant="secondary"
                  @click="$refs[size][0].close()"
                >
                  {{ $t('common.cancel') }}
                </MjButton>

                <MjButton
                  class="mb-4 sm:mb-0 sm:ml-2"
                  @click="$refs[size][0].close()"
                >
                  {{ $t('common.confirm') }}
                </MjButton>
              </footer>
            </MjModal>
          </div>
        </template>
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
        default: [
          `<MjButton @click="$refs.default.open()">
  ${this.$t('props.default')}
</MjButton>

<MjModal ref="default">
  ...
</MjModal>`],
        size: [
          `<MjButton @click="$refs.modalLg.open()">
  lg
</MjButton>

<MjModal
  ref="modalLg"
  size="lg"
>
  ...
</MjModal>`,
          `<MjButton @click="$refs.modalFull.open()">
  full
</MjButton>

<MjModal
  ref="modalFull"
  size="full"
>
  ...
</MjModal>`,
        ],
      },
    };
  },
});
</script>
