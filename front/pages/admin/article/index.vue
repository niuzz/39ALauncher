<!--  -->
<template>
  <div class='wrap'>
    <v-container grid-list-xs class='my-3'>
        <v-data-table
          :headers="headers"
          :items="tableData"
          hide-actions
          class="elevation-1"
          item-key="id"
          loading="true"
        >
           <template slot="items" slot-scope="props">
             <tr>
               <td>{{ props.item.title }}</td>
               <td>{{ props.item.username}}</td>
             </tr>
           </template>
        </v-data-table>

    </v-container>


  </div>
</template>

<script>
import { getArticle } from '../../../api/article'
export default {
  data () {
    return {
      tableData: [
        {name: 'xx'}
      ],
      headers: [
        {
          text: '标题',
          align: 'left',
          value: 'title',
          sortable: false
        },
        {
          text: '用户',
          align: 'left',
          value: 'username',
          sortable: false
        }
      ]
    }
  },

  components: {},

  computed: {},

  mounted () {
    getArticle({uid: 2}).then(response => {
      let code = response.data.code
      if (code === 200) {
        this.tableData = response.data.data
      }
    })
  },

  methods: {}
}
</script>
<style lang='stylus' scoped>
</style>
