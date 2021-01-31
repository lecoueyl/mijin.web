<template>
  <LayoutDoc
    :title="$t('sections.organisms.popover.title')"
  >
    <Sample
      :title="$t('sections.organisms.popover.actionMenu')"
      :snippet="samples.menu"
    >
      <div class="flex justify-center">
        <div
          class="flex"
          role="group"
        >
          <MjButton group="first">
            {{ $t('sections.organisms.popover.edit') }}
          </MjButton>

          <MjPopover
            ref="popover"
            align="right"
          >
            <MjButton group="last">
              <template #icon>
                <MjIcon name="chevron-down" />
              </template>
            </MjButton>

            <template #content>
              <MjPopoverContainer class="py-2 sm:w-64">
                <MjPopoverItem
                  class="mx-1"
                  @click.prevent="toggleSize()"
                >
                  {{ $t('sections.organisms.popover.smallText') }}
                  <template #suffix>
                    <MjToggle
                      v-model="model.size"
                      size="sm"
                    />
                  </template>
                </MjPopoverItem>

                <MjPopoverItem
                  class="mx-1"
                  @click.prevent="model.width = !model.width"
                >
                  {{ $t('sections.organisms.popover.fullWidth') }}
                  <template #suffix>
                    <MjToggle
                      v-model="model.width"
                      size="sm"
                    />
                  </template>
                </MjPopoverItem>

                <MjDivider class="my-2" />

                <MjPopoverItem
                  tag="a"
                  href="#app"
                  class="mx-1"
                >
                  <template #prefix>
                    <MjIcon name="smartphone" />
                  </template>
                  {{ $t('sections.organisms.popover.openApp') }}
                </MjPopoverItem>

                <MjPopoverItem class="mx-1">
                  <template #prefix>
                    <MjIcon name="calendar" />
                  </template>
                  {{ $t('sections.organisms.popover.addToCalendar') }}
                </MjPopoverItem>

                <MjPopoverItem class="mx-1">
                  <template #prefix>
                    <MjIcon name="copy" />
                  </template>
                  {{ $t('sections.organisms.popover.copyLink') }}
                </MjPopoverItem>

                <MjPopoverItem class="mx-1">
                  <template #prefix>
                    <MjIcon name="share" />
                  </template>
                  {{ $t('sections.organisms.popover.share') }}
                </MjPopoverItem>

                <MjDivider class="my-2" />

                <MjPopoverItem class="mx-1">
                  <template #prefix>
                    <MjIcon name="rotate-ccw" />
                  </template>
                  {{ $t('sections.organisms.popover.undo') }}
                </MjPopoverItem>

                <MjPopoverItem
                  variant="danger"
                  class="mx-1"
                  @click="$refs.popover.close()"
                >
                  <template #prefix>
                    <MjIcon name="trash-2" />
                  </template>
                  {{ $t('sections.organisms.popover.delete') }}
                </MjPopoverItem>

                <MjDivider class="my-2" />

                <p class="px-4 py-2 text-gray-600 dark:text-gray-400 text-sm">
                  {{ $t('sections.organisms.popover.lastEdit') }}
                  <br>
                  {{ $t('sections.organisms.popover.today') }}
                </p>
              </MjPopoverContainer>
            </template>
          </MjPopover>
        </div>
      </div>
    </Sample>
  </LayoutDoc>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      model: {
        size: false,
        width: false,
      },
      samples: {
        menu: [
          `<MjButton group="first">
  ${this.$t('sections.organisms.popover.edit')}
</MjButton>

<MjPopover
  ref="popover"
  align="right"
>
  <MjButton group="last">
    <template #prefix>
      <MjIcon name="chevron-down" />
    </template>
  </MjButton>

  <template #content>
    <MjPopoverContainer class="py-2 sm:w-64">
      <MjPopoverItem
        class="mx-1"
        @click.prevent="toggleSize()"
      >
        ${this.$t('sections.organisms.popover.smallText')}
        <template #suffix>
          <MjToggle
            v-model="model.size"
            size="sm"
          />
        </template>
      </MjPopoverItem>

      <MjPopoverItem
        class="mx-1"
        @click.prevent="model.width = !model.width"
      >
        ${this.$t('sections.organisms.popover.fullWidth')}
        <template #suffix>
          <MjToggle
            v-model="model.width"
            size="sm"
          />
        </template>
      </MjPopoverItem>

      <MjDivider class="my-2" />

      <MjPopoverItem
        tag="a"
        href="#app"
        class="mx-1"
      >
        <template #prefix>
          <MjIcon name="smartphone" />
        </template>
        ${this.$t('sections.organisms.popover.openApp')}
      </MjPopoverItem>

      <MjPopoverItem class="mx-1">
        <template #prefix>
          <MjIcon name="calendar" />
        </template>
        ${this.$t('sections.organisms.popover.addToCalendar')}
      </MjPopoverItem>

      <MjPopoverItem class="mx-1">
        <template #prefix>
          <MjIcon name="copy" />
        </template>
        ${this.$t('sections.organisms.popover.copyLink')}
      </MjPopoverItem>

      <MjPopoverItem class="mx-1">
        <template #prefix>
          <MjIcon name="share" />
        </template>
        ${this.$t('sections.organisms.popover.share')}
      </MjPopoverItem>

      <MjDivider class="my-2" />

      <MjPopoverItem class="mx-1">
        <template #prefix>
          <MjIcon name="rotate-ccw" />
        </template>
        ${this.$t('sections.organisms.popover.undo')}
      </MjPopoverItem>

      <MjPopoverItem
        variant="danger"
        class="mx-1"
        @click="$refs.popover.close()"
      >
        <template #prefix>
          <MjIcon name="trash-2" />
        </template>
        ${this.$t('sections.organisms.popover.delete')}
      </MjPopoverItem>

      <MjDivider class="my-2" />

      <p class="px-4 py-2 text-gray-600 dark:text-gray-400 text-sm">
        ${this.$t('sections.organisms.popover.lastEdit')}
        <br>
        ${this.$t('sections.organisms.popover.today')}
      </p>
    </MjPopoverContainer>
  </template>
</MjPopover>`,
        ],
      },
    };
  },

  methods: {
    toggleSize() {
      this.model.size = !this.model.size;
      const { style } = document.documentElement;
      if (this.model.size) {
        style.fontSize = '0.9rem';
      } else {
        style.fontSize = '';
      }
    },
  },
});
</script>
