<template>
	<section>
    <v-layout
      column
      wrap
      class="my-5"
    >
      <v-flex xs12>
        <v-container >
          <v-data-table
            v-model="selected"
            :items="tableData"
            :headers="headers"
            select-all
            item-key="name"
            class="elevation-1"
            hide-actions
          >
            <template slot="items" slot-scope="props">
              <!-- <tr :active="props.selected" @click="props.selected = !props.selected"> -->
              <tr>
                <td @click="props.selected = !props.selected">
                  <v-checkbox
                    :input-value="props.selected"
                    hide-details
                  ></v-checkbox>
                </td>
                <td>{{ props.item.name }}</td>
                <td class="text-xs-right">{{ props.item.calories }}</td>
                <td class="text-xs-right">{{ props.item.fat }}</td>
                <td class="text-xs-right">{{ props.item.carbs }}</td>
                <td class="text-xs-right">{{ props.item.protein }}</td>
                <td class="text-xs-right">{{ props.item.iron }}</td>
                <td>
                  <v-btn @click="del(props.item)">删除</v-btn>
                </td>
              </tr>
            </template>
          </v-data-table>
        </v-container>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <div class="text-xs-center pt-2">
          <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
        </div>
      </v-flex>
    </v-layout>
  </section>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      selected: [],
      pagination: {
        page: 1
      },
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'left',
          value: 'name',
          sortable: false
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' },
        { text: 'option' }
      ],
      tableData: [
        {
          value: false,
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%'
        },
        {
          value: false,
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%'
        },
        {
          value: false,
          name: 'Ice cream sandwicha',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%'
        }
      ]
    }
  },
  computed: {
    pages () {
      return Math.ceil(this.tableData.length / 2)
    }
  },
  created () {
  },
  methods: {
    del (num) {
      console.log(num)
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
