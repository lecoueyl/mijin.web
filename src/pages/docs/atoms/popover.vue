<template>
  <LayoutDoc
    ref="layout"
    :title="$t('sections.atoms.popover.title')"
    :components="['Popover', 'PopoverItem']"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <MjPopover align="left">
        <MjButton class="w-full">
          {{ $t('props.default') }}
        </MjButton>

        <template #content>
          <MjPopoverContainer class="p-2 sm:w-48">
            <MjPopoverItem
              v-for="item in $t('examples.items')"
              :key="item.name"
            >
              {{ item.name }}
            </MjPopoverItem>
          </MjPopoverContainer>
        </template>
      </MjPopover>
    </Sample>

    <Sample
      :title="$t('props.dismissible')"
      :snippet="samples.dismissible"
    >
      <MjPopover
        align="left"
        dismissible
      >
        <MjButton>
          {{ $t('props.dismissible') }}
        </MjButton>

        <template #content>
          <MjPopoverContainer class="p-2 sm:w-48">
            <MjPopoverItem
              v-for="item in $t('examples.items')"
              :key="item.name"
            >
              {{ item.name }}
            </MjPopoverItem>
          </MjPopoverContainer>
        </template>
      </MjPopover>
    </Sample>

    <Sample
      :title="$t('props.position')"
      :snippet="samples.position"
    >
      <div class="grid gap-4 sm:grid-cols-4">
        <div
          v-for="position in ['top', 'right', 'bottom', 'left']"
          :key="position"
        >
          <MjPopover
            :position="position"
          >
            <MjButton>
              {{ position }}
            </MjButton>

            <template #content>
              <MjPopoverContainer class="p-2 sm:w-48">
                <MjPopoverItem
                  v-for="item in $t('examples.items')"
                  :key="item.name"
                >
                  {{ item.name }}
                </MjPopoverItem>
              </MjPopoverContainer>
            </template>
          </MjPopover>
        </div>
      </div>
    </Sample>

    <Sample
      :title="$t('props.align')"
      :snippet="samples.align"
    >
      <div class="grid gap-4 sm:grid-cols-3">
        <div
          v-for="props in [
            {
              align: 'left',
              position: 'bottom',
            },
            {
              align: 'center',
              position: 'bottom',
            },
            {
              align: 'right',
              position: 'bottom',
            },
            {
              align: 'left',
              position: 'top',
            },
            {
              align: 'center',
              position: 'top',
            },
            {
              align: 'right',
              position: 'top',
            },
            {
              align: 'top',
              position: 'left',
            },
            {
              align: 'middle',
              position: 'left',
            },
            {
              align: 'bottom',
              position: 'left',
            },
            {
              align: 'top',
              position: 'right',
            },
            {
              align: 'middle',
              position: 'right',
            },
            {
              align: 'bottom',
              position: 'right',
            },
          ]"
          :key="`${props.position}-${props.align}`"
        >
          <MjPopover
            :align="props.align"
            :position="props.position"
          >
            <MjButton>
              {{ props.position }} / {{ props.align }}
            </MjButton>

            <template #content>
              <MjPopoverContainer class="p-2 sm:w-48">
                <MjPopoverItem
                  v-for="item in $t('examples.items')"
                  :key="item.name"
                >
                  {{ item.name }}
                </MjPopoverItem>
              </MjPopoverContainer>
            </template>
          </MjPopover>
        </div>
      </div>
    </Sample>

    <Sample
      :title="$t('common.slots')"
      :snippet="samples.slots"
    >
      <MjPopover align="left">
        <MjButton>
          prefix
        </MjButton>

        <template #content>
          <MjPopoverContainer class="p-2 sm:w-48">
            <MjPopoverItem>
              <template #prefix>
                <MjIcon name="share" />
              </template>

              {{ $t('examples.items.1.name') }}
            </MjPopoverItem>

            <MjPopoverItem>
              <template #prefix>
                <MjIcon name="calendar" />
              </template>

              {{ $t('examples.items.2.name') }}
            </MjPopoverItem>

            <MjPopoverItem>
              <template #prefix>
                <MjIcon name="copy" />
              </template>

              {{ $t('examples.items.3.name') }}
            </MjPopoverItem>
          </MjPopoverContainer>
        </template>
      </MjPopover>

      <MjPopover align="left">
        <MjButton>
          suffix
        </MjButton>

        <template #content>
          <MjPopoverContainer class="p-2 sm:w-48">
            <MjPopoverItem>
              <template #suffix>
                <MjIcon name="share" />
              </template>

              {{ $t('examples.items.1.name') }}
            </MjPopoverItem>

            <MjPopoverItem>
              <template #suffix>
                <MjIcon name="calendar" />
              </template>

              {{ $t('examples.items.2.name') }}
            </MjPopoverItem>

            <MjPopoverItem>
              <template #suffix>
                <MjIcon name="copy" />
              </template>

              {{ $t('examples.items.3.name') }}
            </MjPopoverItem>
          </MjPopoverContainer>
        </template>
      </MjPopover>
    </Sample>

    <Sample
      :title="$t('props.disabled')"
      :snippet="samples.disabled"
    >
      <MjPopover align="left">
        <MjButton>
          {{ $t('props.disabled') }}
        </MjButton>

        <template #content>
          <MjPopoverContainer class="p-2 sm:w-48">
            <MjPopoverItem>
              <template #prefix>
                <MjIcon name="share" />
              </template>

              {{ $t('examples.items.1.name') }}
            </MjPopoverItem>

            <MjPopoverItem disabled>
              <template #prefix>
                <MjIcon name="calendar" />
              </template>

              {{ $t('examples.items.2.name') }}
            </MjPopoverItem>

            <MjPopoverItem>
              <template #prefix>
                <MjIcon name="copy" />
              </template>

              {{ $t('examples.items.3.name') }}
            </MjPopoverItem>
          </MjPopoverContainer>
        </template>
      </MjPopover>
    </Sample>

    <Sample
      :title="$t('common.events')"
      :snippet="samples.events"
    >
      <MjPopover
        align="left"
        @close="$refs.layout.showEvent('close')"
        @open="$refs.layout.showEvent('open')"
        @toggle="$refs.layout.showEvent('toggle')"
      >
        <MjButton>
          {{ $t('common.events') }}
        </MjButton>

        <template #content>
          <MjPopoverContainer class="p-2 sm:w-48">
            <MjPopoverItem>
              {{ $t('examples.items.1.name') }}
            </MjPopoverItem>

            <MjPopoverItem>
              {{ $t('examples.items.2.name') }}
            </MjPopoverItem>

            <MjPopoverItem>
              {{ $t('examples.items.3.name') }}
            </MjPopoverItem>
          </MjPopoverContainer>
        </template>
      </MjPopover>
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
          `<MjPopover align="left">
  <MjButton>
    ${this.$t('props.default')}
  </MjButton>

  <template #content>
    <MjPopoverContainer class="p-2 sm:w-48">
      <MjPopoverItem>${this.$t('examples.items.1.name')}</MjPopoverItem>
      <MjPopoverItem>${this.$t('examples.items.2.name')}</MjPopoverItem>
      <MjPopoverItem>${this.$t('examples.items.3.name')}</MjPopoverItem>
    </MjPopoverContainer>
  </template>
</MjPopover>`,
        ],
        dismissible: [
          `<MjPopover
  align="left"
  dismissible
>
  <MjButton>
    ${this.$t('props.dismissible')}
  </MjButton>

  <template #content>
    <MjPopoverContainer class="p-2 sm:w-48">
      <MjPopoverItem>${this.$t('examples.items.1.name')}</MjPopoverItem>
      <MjPopoverItem>${this.$t('examples.items.2.name')}</MjPopoverItem>
      <MjPopoverItem>${this.$t('examples.items.3.name')}</MjPopoverItem>
    </MjPopoverContainer>
  </template>
</MjPopover>`,
        ],
        position: [
          `<MjPopover position="top">
  <MjButton>
    ${this.$t('props.position')}
  </MjButton>

  <template #content>
    <MjPopoverContainer class="p-2 sm:w-48">
      <MjPopoverItem>${this.$t('examples.items.1.name')}</MjPopoverItem>
      <MjPopoverItem>${this.$t('examples.items.2.name')}</MjPopoverItem>
      <MjPopoverItem>${this.$t('examples.items.3.name')}</MjPopoverItem>
    </MjPopoverContainer>
  </template>
</MjPopover>`,
        ],
        align: [
          `<MjPopover
  align="left"
  position="bottom"
>
  <MjButton>
    ${this.$t('props.align')}
  </MjButton>

  <template #content>
    <MjPopoverContainer class="p-2 sm:w-48">
      <MjPopoverItem>${this.$t('examples.items.1.name')}</MjPopoverItem>
      <MjPopoverItem>${this.$t('examples.items.2.name')}</MjPopoverItem>
      <MjPopoverItem>${this.$t('examples.items.3.name')}</MjPopoverItem>
    </MjPopoverContainer>
  </template>
</MjPopover>`,
        ],
        slots: [
          `<MjPopover align="left">
<MjButton>
  prefix
</MjButton>

<template #content>
  <MjPopoverContainer class="p-2 sm:w-48">
    <MjPopoverItem>
      <template #prefix>
        <MjIcon name="share" />
      </template>

      ${this.$t('examples.items.1.name')}
    </MjPopoverItem>

    <MjPopoverItem>
      <template #prefix>
        <MjIcon name="calendar" />
      </template>

      ${this.$t('examples.items.2.name')}
    </MjPopoverItem>

    <MjPopoverItem>
      <template #prefix>
        <MjIcon name="copy" />
      </template>

      ${this.$t('examples.items.3.name')}
    </MjPopoverItem>
  </MjPopoverContainer>
</template>
</MjPopover>`,

          `<MjPopover align="left">
  <MjButton>
    prefix
  </MjButton>

  <template #content>
    <MjPopoverContainer class="p-2 sm:w-48">
      <MjPopoverItem>
        <template #suffix>
          <MjIcon name="share" />
        </template>

        ${this.$t('examples.items.1.name')}
      </MjPopoverItem>

      <MjPopoverItem>
        <template #suffix>
          <MjIcon name="calendar" />
        </template>

        ${this.$t('examples.items.2.name')}
      </MjPopoverItem>

      <MjPopoverItem>
        <template #suffix>
          <MjIcon name="copy" />
        </template>

        ${this.$t('examples.items.3.name')}
      </MjPopoverItem>
    </MjPopoverContainer>
  </template>
</MjPopover>`,
        ],

        disabled: [
          `<MjPopover align="left">
  <MjButton>
    ${this.$t('props.disabled')}
  </MjButton>

  <template #content>
    <MjPopoverContainer class="p-2 sm:w-48">
      <MjPopoverItem>
        <template #prefix>
          <MjIcon name="share" />
        </template>

        ${this.$t('examples.items.1.name')}
      </MjPopoverItem>

      <MjPopoverItem disabled>
        <template #prefix>
          <MjIcon name="calendar" />
        </template>

        ${this.$t('examples.items.2.name')}
      </MjPopoverItem>

      <MjPopoverItem>
        <template #prefix>
          <MjIcon name="copy" />
        </template>

        ${this.$t('examples.items.3.name')}
      </MjPopoverItem>
    </MjPopoverContainer>
  </template>
</MjPopover>`,
        ],
      },
    };
  },
});
</script>
