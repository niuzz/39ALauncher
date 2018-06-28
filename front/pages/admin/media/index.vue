<!-- ******************************************
*  Author : niuzz niuzz@hotmail.com
*  Created On : Sat Jun 23 2018
******************************************* -->
<template>
<div class="out-wrap">
	<section>
    <v-layout
      column
    >
      <v-flex xs12>
        <v-container>
          <v-btn fab dark small color="primary" class='text-xs-center' @click="openDialog">
            <v-icon color="red">add</v-icon>
          </v-btn>
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
                <td>{{ props.item.category }}</td>
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
      <v-flex>
        <div class="text-xs-center pt-2">
          <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
        </div>
      </v-flex>
    </v-layout>
  </section>
  <v-dialog v-model="dialog" persistent max-width="80%">
      <v-card>
        <v-card-title>
          <span class="headline">添加媒体</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-form ref="form" v-model="valid">
              <v-layout wrap>
                <v-flex xs12 sm6 md2>
                  <v-select :items="categoryType" label="选择类别" :rules="form.categoryTypeRules" v-model="form.categoryType"></v-select>
                </v-flex>
                <v-flex xs12 sm6 md2>
                  <v-select :items="category" label="选择分类" :rules="form.categoryRules" v-model="form.category"></v-select>
                </v-flex>
                <v-flex xs12 sm6 md2>
                  <v-text-field label="媒体名称" :rules="form.mediaNameRules" v-model="form.mediaName" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md2>
                  <v-text-field label="频道" v-model="form.channel" :rules="form.channelRules" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md2>
                  <v-text-field label="位置" v-model="form.position" :rules="form.positionRules" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md2>
                  <v-checkbox
                      label="新闻源"
                      :rules="form.sourceRules"
                      v-model="form.source"
                    ></v-checkbox>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex xs12 sm6 md2>
                  <v-text-field label="媒介报价" v-model="form.media_price" :rules="form.media_priceRules" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md2>
                  <v-text-field label="直客报价" v-model="form.dircet_price" :rules="form.dircet_priceRules" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md2>
                  <v-text-field label="编辑" v-model="form.editor" :rules="form.editorRules" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md2>
                  <v-text-field label="编辑收入" v-model="form.editor_income" :rules="form.editor_incomeRules" required></v-text-field>
                </v-flex>
              </v-layout>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="close">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="submit">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</div>
</template>

<script type="text/ecmascript-6">
import { getMedia, getAllMediaInfo, updateMedia, addMedia } from '../../../api/media'
export default {
  data () {
    return {
      dialog: false,
      valid: true,
      submitType: '',
      selected: [],
      categoryType: [],
      categoryTypeSelected: [],
      categoryData: [],
      categorySelected: [],
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
      form: {
        id: '',
        category: '',
        categoryRules: [
          v => !!v || '请填写媒体分类'
        ],
        categoryType: '',
        categoryTypeRules: [
          v => !!v || '请填写媒体类别'
        ],
        mediaName: '',
        mediaNameRules: [
          v => !!v || '请填写媒体名称'
        ],
        channel: '',
        channelRules: [
          v => !!v || '请填写频道'
        ],
        position: '',
        positionRules: [
          v => !!v || '请选择位置'
        ],
        source: false,
        sourceRules: [
          // v => !!v || '新闻源'
        ],
        media_price: 0,
        media_priceRules: [
          v => !!v || '请填写媒体价格'
        ],
        dircet_price: 0,
        dircet_priceRules: [
          v => !!v || '请填写直客价格'
        ],
        editor: '',
        editorRules: [
          v => !!v || '请填写编辑名'
        ],
        editor_income: '',
        editor_incomeRules: [
          v => !!v || '请填写编辑收入'
        ]
      }
    }
  },
  computed: {
    pages () {
      return Math.ceil(this.tableData.length / 2)
    },
    category: {
      get: function () {
        let type = this.$store.state.user.categoryTypeList.filter(item => {
          return item.name === this.form.categoryType
        })
        let categoryList = this.$store.state.user.categoryList.filter(item => {
          return item.type === {...type[0]}.id
        })
        return categoryList.map(item => {
          return item.name
        })
      },
      set: function () {}
    }

  },
  created () {
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
    getMedia()
  },
  methods: {
    edit (row) {
      this.dialogRow(row)
      this.openDialog()
      this.submitType = 'update'
    },
    editSubmit (row) {
      let params = {}
      params.mediaName = this.form.mediaName
      updateMedia(params).then(data => {
        let code = data.data.code
        if (code === 200) {

        }
      })
    },
    dialogRow (row) {
      this.form.id = row.id
      this.form.mediaName = row.name
      this.form.channel = row.channel
      this.form.position = row.position
      this.form.media_price = row.media_price
      this.form.dircet_price = row.direct_price
      this.form.source = row.source
      this.form.editor = row.editor
      this.form.editor_income = row.editor_income
    },
    openDialog () {
      this.dialog = true
      this.submitType = 'add'
    },
    submit () {
      if (this.$refs.form.validate()) {
        let params = {}
        params.name = this.form.mediaName
        params.id = this.form.id
        if (this.submitType === 'add') {
          delete params.id
          addMedia(params).then(data => {
          let code = data.data.code
          console.log(code)
        })
        } else {
          updateMedia(params).then(data => {
            let code = data.data.code
            console.log(code)
          })
        }
      }
    },
    close () {
      this.dialog = false
      this.$refs.form.reset()
    }
  }
}
</script>

<style lang="stylus" scoped>
.out-wrap
  min-height 100%
  background linear-gradient(to right bottom, #eee, #ffb74d)
</style>
