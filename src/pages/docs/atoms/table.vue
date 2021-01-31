<template>
  <LayoutDoc
    :title="$t('sections.atoms.table.title')"
    :components="['Table', 'TableCell', 'TableRow', 'TableHeader']"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <MjTable>
        <MjTableHead>
          <MjTableHeader class="bg-white dark:bg-gray-900">
            {{ $t('examples.itemsHeader.name') }}
          </MjTableHeader>

          <MjTableHeader class="bg-white dark:bg-gray-900">
            {{ $t('examples.itemsHeader.description') }}
          </MjTableHeader>

          <MjTableHeader class="bg-white dark:bg-gray-900">
            {{ $t('examples.itemsHeader.count') }}
          </MjTableHeader>
        </MjTableHead>

        <MjTableBody>
          <MjTableRow
            v-for="(item, key) in array"
            :key="key"
          >
            <MjTableCell>
              {{ item.name }}
            </MjTableCell>

            <MjTableCell>
              {{ item.description }}
            </MjTableCell>

            <MjTableCell text-align="right">
              {{ item.count }}
            </MjTableCell>
          </MjTableRow>
        </MjTableBody>
      </MjTable>
    </Sample>

    <Sample
      :title="$t('props.fixed')"
      :snippet="samples.fixed"
    >
      <MjTable fixed>
        <MjTableHead>
          <MjTableHeader class="bg-white dark:bg-gray-900 w-2/12">
            {{ $t('examples.itemsHeader.name') }}
          </MjTableHeader>

          <MjTableHeader class="bg-white dark:bg-gray-900">
            {{ $t('examples.itemsHeader.description') }}
          </MjTableHeader>

          <MjTableHeader
            text-align="right"
            class="bg-white dark:bg-gray-900 w-1/12"
          >
            {{ $t('examples.itemsHeader.count') }}
          </MjTableHeader>
        </MjTableHead>

        <MjTableBody>
          <MjTableRow
            v-for="(item, key) in array"
            :key="key"
          >
            <MjTableCell>
              {{ item.name }}
            </MjTableCell>

            <MjTableCell>
              {{ item.description }}
            </MjTableCell>

            <MjTableCell text-align="right">
              {{ item.count }}
            </MjTableCell>
          </MjTableRow>
        </MjTableBody>
      </MjTable>
    </Sample>

    <Sample
      :title="$t('props.truncate')"
      :snippet="samples.default"
    >
      <MjTable fixed>
        <MjTableHead>
          <MjTableHeader class="bg-white dark:bg-gray-900 w-2/12">
            {{ $t('examples.itemsHeader.name') }}
          </MjTableHeader>

          <MjTableHeader class="bg-white dark:bg-gray-900">
            {{ $t('examples.itemsHeader.description') }}
          </MjTableHeader>

          <MjTableHeader
            text-align="right"
            class="bg-white dark:bg-gray-900 w-1/12"
          >
            {{ $t('examples.itemsHeader.count') }}
          </MjTableHeader>
        </MjTableHead>

        <MjTableBody>
          <MjTableRow
            v-for="(item, key) in array"
            :key="key"
          >
            <MjTableCell>
              {{ item.name }}
            </MjTableCell>

            <MjTableCell truncate>
              {{ item.description }}
            </MjTableCell>

            <MjTableCell text-align="right">
              {{ item.count }}
            </MjTableCell>
          </MjTableRow>
        </MjTableBody>
      </MjTable>
    </Sample>

    <Sample
      :title="$t('props.density')"
      :snippet="samples.fixed"
    >
      <MjTable density="tight">
        <MjTableHead>
          <MjTableHeader class="bg-white dark:bg-gray-900">
            {{ $t('examples.itemsHeader.name') }}
          </MjTableHeader>

          <MjTableHeader class="bg-white dark:bg-gray-900">
            {{ $t('examples.itemsHeader.description') }}
          </MjTableHeader>

          <MjTableHeader class="bg-white dark:bg-gray-900">
            {{ $t('examples.itemsHeader.count') }}
          </MjTableHeader>
        </MjTableHead>

        <MjTableBody>
          <MjTableRow
            v-for="(item, key) in array"
            :key="key"
          >
            <MjTableCell>
              {{ item.name }}
            </MjTableCell>

            <MjTableCell>
              {{ item.description }}
            </MjTableCell>

            <MjTableCell text-align="right">
              {{ item.count }}
            </MjTableCell>
          </MjTableRow>
        </MjTableBody>
      </MjTable>
    </Sample>

    <Sample
      :title="$t('props.clickable')"
      :snippet="samples.fixed"
    >
      <MjTable>
        <MjTableHead>
          <MjTableHeader class="bg-white dark:bg-gray-900">
            {{ $t('examples.itemsHeader.name') }}
          </MjTableHeader>

          <MjTableHeader class="bg-white dark:bg-gray-900">
            {{ $t('examples.itemsHeader.description') }}
          </MjTableHeader>

          <MjTableHeader class="bg-white dark:bg-gray-900">
            {{ $t('examples.itemsHeader.count') }}
          </MjTableHeader>
        </MjTableHead>

        <MjTableBody>
          <MjTableRow
            v-for="(item, key) in array"
            :key="key"
            clickable
          >
            <MjTableCell>
              {{ item.name }}
            </MjTableCell>

            <MjTableCell>
              {{ item.description }}
            </MjTableCell>

            <MjTableCell text-align="right">
              {{ item.count }}
            </MjTableCell>
          </MjTableRow>
        </MjTableBody>
      </MjTable>
    </Sample>

    <Sample
      :title="$t('props.sort')"
      :snippet="samples.sort"
    >
      <MjTable>
        <MjTableHead>
          <MjTableHeader
            class="bg-white dark:bg-gray-900"
            :sort="isSorted('name')"
            @click="sortColumn('name')"
          >
            {{ $t('examples.itemsHeader.name') }}
          </MjTableHeader>

          <MjTableHeader
            class="bg-white dark:bg-gray-900"
            :sort="isSorted('description')"
            @click="sortColumn('description')"
          >
            {{ $t('examples.itemsHeader.description') }}
          </MjTableHeader>

          <MjTableHeader
            class="bg-white dark:bg-gray-900"
            :sort="isSorted('count')"
            @click="sortColumn('count')"
          >
            {{ $t('examples.itemsHeader.count') }}
          </MjTableHeader>
        </MjTableHead>

        <MjTableBody>
          <MjTableRow
            v-for="(item, key) in sortedArray"
            :key="key"
          >
            <MjTableCell>
              {{ item.name }}
            </MjTableCell>

            <MjTableCell>
              {{ item.description }}
            </MjTableCell>

            <MjTableCell text-align="right">
              {{ item.count }}
            </MjTableCell>
          </MjTableRow>
        </MjTableBody>
      </MjTable>
    </Sample>
  </LayoutDoc>
</template>

<script lang="ts">
import Vue from 'vue';

interface ExampleArray {
  name: string,
  description: string,
  count: number,
}

export default Vue.extend({
  data() {
    const sort = {
      column: 'description',
      dir: 1,
    };

    return {
      sort,
    };
  },

  computed: {
    array(): Array<ExampleArray> {
      return [
        {
          name: `${this.$t('examples.items.1.name')}`,
          description: `${this.$t('examples.items.1.description')}`,
          count: 20,
        },
        {
          name: `${this.$t('examples.items.2.name')}`,
          description: `${this.$t('examples.items.2.description')}`,
          count: 16,
        },
        {
          name: `${this.$t('examples.items.3.name')}`,
          description: `${this.$t('examples.items.3.description')}`,
          count: 186,
        },
      ];
    },

    sortedArray(): Array<object> {
      const data = [...this.array];
      return data.sort((a:any, b:any) => {
        if (a[this.sort.column] < b[this.sort.column]) return -1 * this.sort.dir;
        if (a[this.sort.column] > b[this.sort.column]) return 1 * this.sort.dir;
        return 0;
      });
    },

    samples(): Object {
      return {
        default: [
          `<MjTable>
  <MjTableHead>
    <MjTableHeader class="bg-white dark:bg-gray-900">
      ${this.$t('examples.itemsHeader.name')}
    </MjTableHeader>

    <MjTableHeader class="bg-white dark:bg-gray-900">
      ${this.$t('examples.itemsHeader.description')}
    </MjTableHeader>

    <MjTableHeader class="bg-white dark:bg-gray-900">
      ${this.$t('examples.itemsHeader.count')}
    </MjTableHeader>
  </MjTableHead>

  <TableBody>
    <MjTableRow>
      <MjTableCell>
        ${this.array[0].name}
      </MjTableCell>

      <MjTableCell>
        ${this.array[0].description}
      </MjTableCell>

      <MjTableCell>
        ${this.array[0].count}
      </MjTableCell>
    </MjTableRow>

    <MjTableRow>
      <MjTableCell>
        ${this.array[1].name}
      </MjTableCell>

      <MjTableCell>
        ${this.array[1].description}
      </MjTableCell>

      <MjTableCell>
        ${this.array[1].count}
      </MjTableCell>
    </MjTableRow>

    <MjTableRow>
      <MjTableCell>
        ${this.array[2].name}
      </MjTableCell>

      <MjTableCell>
        ${this.array[2].description}
      </MjTableCell>

      <MjTableCell>
        ${this.array[2].count}
      </MjTableCell>
    </MjTableRow>
  </TableBody>
</MjTable>`,
        ],
      };
    },
  },

  methods: {
    isSorted(column: string) {
      if (column !== this.sort.column) return true;

      return this.sort.dir === 1 ? 'asc' : 'desc';
    },

    sortColumn(column: string) {
      if (column !== this.sort.column) {
        this.sort.column = column;
        this.sort.dir = 1;
      } else {
        this.sort.dir *= -1;
      }
    },
  },
});
</script>
