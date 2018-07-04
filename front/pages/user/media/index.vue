<template>
	<section>
    <v-layout
      column
      wrap
      class="mt-5"
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
              <tr>
                <td @click="props.selected = !props.selected">
                  <v-checkbox
                    :input-value="props.selected"
                    hide-details
                  ></v-checkbox>
                </td>
                <td>{{ props.item.name }}
                  <v-tooltip bottom>
                    <v-icon slot="activator" dark color="primary" small>home</v-icon>
                    <span>{{ props.item.description }}</span>
                  </v-tooltip>
                </td>
                <td>{{ props.item.category_name }}</td>
                <td>{{ props.item.channel }}</td>
                <td>{{ props.item.position }}</td>
                <td>{{ props.item.source }}</td>
                <td>
                  {{ props.item.media_price }}
                </td>
                <td>
                  {{ props.item.direct_price }}
                </td>
                <td>
                  {{ props.item.editor }}
                </td>
                <td>
                  {{ props.item.editor_income }}
                </td>
                <td>
                  {{ props.item.status === 1 ? '正常' : '暂停' }}
                </td>
                <td>
                  <v-btn icon class="mx-0" @click="edit (props.item)">
                    <v-icon color="teal">edit</v-icon>
                  </v-btn>
                </td>
              </tr>
            </template>
            <template slot="no-data">
              <v-alert :value="true" color="orange darken-1" icon="warning">
                暂无相关数据，请刷新重试:(
              </v-alert>
            </template>
          </v-data-table>
        </v-container>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <div class="text-xs-center my-5">
          <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
        </div>
      </v-flex>
    </v-layout>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">发布稿件</span>
        </v-card-title>
        <v-card-text>
          <v-form v-model="valid">
            <v-text-field
              v-model="name"
              :rules="nameRules"
              :counter="10"
              label="标题"
              required
            ></v-text-field>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="url上传"
              required
            ></v-text-field>
            <upload-button title="上传文件" :selectedCallback="uploadFile"></upload-button>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </section>
</template>

<script type="text/ecmascript-6">
import { getAllMediaInfo } from '../../../api/media'
import UploadButton from '../../../components/UploadButton'
export default {
  data () {
    return {
      dialog: false,
      selected: [],
      pagination: {
        page: 1
      },
      headers: [
        {
          text: '名称',
          align: 'left',
          value: 'name',
          sortable: false,
          width: '400'
        },
        {
          text: '分类',
          align: 'left',
          value: 'category',
          sortable: false,
          width: '150'
        },
        {
          text: '频道',
          align: 'left',
          value: 'channel',
          sortable: false,
          width: '150'
        },
        {
          text: '位置',
          align: 'left',
          value: 'positon',
          sortable: false,
          width: '150'
        },
        {
          text: '新闻源',
          align: 'left',
          value: 'source',
          sortable: false
        },
        {
          text: '媒介报价',
          align: 'left',
          value: 'media_price',
          sortable: false
        },
        {
          text: '直客报价',
          align: 'left',
          value: 'direct_price',
          sortable: false
        },
        {
          text: '编辑',
          align: 'left',
          value: 'editor',
          sortable: false,
          width: '150'
        },
        {
          text: '编辑收入',
          align: 'left',
          value: 'editor_income',
          sortable: false
        },
        {
          text: '状态',
          align: 'left',
          value: 'status',
          sortable: false,
          width: 100
        },
        { text: '操作', value: 'option' }
      ],
      tableData: [
      ],
      valid: false,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  computed: {
    pages () {
      return Math.ceil(this.tableData.length / 2)
    }
  },
  components: {
    UploadButton
  },
  created () {
    this._getData()
  },
  methods: {
    _getData () {
      getAllMediaInfo().then(data => {
        let result = data.data.data
        let categoryType = result.categoryType
        this.$store.commit('user/setCategoryTypeList', result.categoryType)
        this.$store.commit('user/setCategoryList', result.category)
        let c = categoryType.map(item => {
          return item.name
        })
        this.categoryType = c
        this.categoryData = result.category.map(item => {
          return item.name
        })
        this.tableData = result.media
      })
    },
    edit (row) {
      this.dialog = true
    },
    del (num) {
      console.log(num)
    },
    uploadFile (file) {
      console.log(file)
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
