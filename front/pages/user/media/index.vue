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
          <v-form ref="form" v-model="valid">
            <v-text-field
              v-model="title"
              :rules="titleRules"
              :counter="10"
              label="标题"
              required
            ></v-text-field>
            <v-text-field
              v-model="url"
              :rules="urlRules"
              label="url上传"
              required
            ></v-text-field>
            <upload-button title="上传文件" :selectedCallback="uploadFile"></upload-button>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="close">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="submit">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </section>
</template>

<script type="text/ecmascript-6">
import { getAllMediaInfo } from '../../../api/media'
import { addArticle } from '../../../api/article'
import UploadButton from '../../../components/UploadButton'
import { uploadFile } from '../../../api/source'
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
      title: '',
      titleRules: [
        v => !!v || '请输入标题',
        v => v.length <= 10 || 'Name must be less than 10 characters'
      ],
      url: '',
      urlRules: [
        v => !!v || '请输入url'
      ],
      file_url: ''
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
      let data = new FormData()
      data.append('name', file.name)
      data.append('uid', 77)
      data.append('file', file)
      uploadFile(data).then(response => {
        this.file_url = response.data.url
      }).catch(error => {
        console.log(error)
      })
    },
    close () {},
    submit () {
      if (this.$refs.form.validate()) {
          const params = {
            uid: '77',
            url: this.url,
            file_url: this.file_url,
            title: this.title
          }
          addArticle(params).then(response => {
            console.log(response)
          })
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
