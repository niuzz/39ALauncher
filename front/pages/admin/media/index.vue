<!-- ******************************************
*  Author : niuzz niuzz@hotmail.com
*  Created On : Sat Jun 23 2018
******************************************* -->
<template>
<div>
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
                <td>{{ props.item.positon }}</td>
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
                  <v-btn icon class="mx-0" @click="del (props.item)">
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
    <v-layout>

    </v-layout>
  </section>
  <v-dialog v-model="dialog" persistent max-width="80%">
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Legal first name" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Legal middle name" hint="example of helper text only on focus"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="Legal last name"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Email" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Password" type="password" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Age"
                  required
                ></v-select>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                  label="Interests"
                  multiple
                  autocomplete
                  chips
                ></v-select>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</div>
</template>

<script type="text/ecmascript-6">
import {getMedia} from '../../../api/media'
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
          width: '200'
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
        {
          value: false,
          name: '凤凰网',
          category: '新闻综合',
          channel: '新闻',
          positon: '网站首页',
          source: '是',
          description: '凤凰网是一家老牌的香港媒体，在全球华人圈有广泛的影响力',
          media_price: 100,
          direct_price: 200,
          editor: '王大锤',
          editor_income: 30,
          status: 1
        },
        {
          value: false,
          name: '凤凰网',
          category: '新闻综合',
          channel: '新闻',
          positon: '网站首页',
          source: '是',
          description: '凤凰网是一家老牌的香港媒体，在全球华人圈有广泛的影响力',
          media_price: 100,
          direct_price: 200,
          editor: '王大锤',
          editor_income: 30,
          status: 1
        },
        {
          value: false,
          name: '凤凰网',
          category: '新闻综合',
          channel: '新闻',
          positon: '网站首页',
          source: '是',
          description: '凤凰网是一家老牌的香港媒体，在全球华人圈有广泛的影响力',
          media_price: 100,
          direct_price: 200,
          editor: '王大锤',
          editor_income: 30,
          status: 1
        },
        {
          value: false,
          name: '凤凰网',
          category: '新闻综合',
          channel: '新闻',
          positon: '网站首页',
          source: '是',
          description: '凤凰网是一家老牌的香港媒体，在全球华人圈有广泛的影响力',
          media_price: 100,
          direct_price: 200,
          editor: '王大锤',
          editor_income: 30,
          status: 1
        },
        {
          value: false,
          name: '凤凰网',
          category: '新闻综合',
          channel: '新闻',
          positon: '网站首页',
          source: '是',
          description: '凤凰网是一家老牌的香港媒体，在全球华人圈有广泛的影响力',
          media_price: 100,
          direct_price: 200,
          editor: '王大锤',
          editor_income: 30,
          status: 1
        },
        {
          value: false,
          name: '凤凰网',
          category: '新闻综合',
          channel: '新闻',
          positon: '网站首页',
          source: '是',
          description: '凤凰网是一家老牌的香港媒体，在全球华人圈有广泛的影响力',
          media_price: 100,
          direct_price: 200,
          editor: '王大锤',
          editor_income: 30,
          status: 1
        },
        {
          value: false,
          name: '凤凰网',
          category: '新闻综合',
          channel: '新闻',
          positon: '网站首页',
          source: '是',
          description: '凤凰网是一家老牌的香港媒体，在全球华人圈有广泛的影响力',
          media_price: 100,
          direct_price: 200,
          editor: '王大锤',
          editor_income: 30,
          status: 1
        },
        {
          value: false,
          name: '凤凰网',
          category: '新闻综合',
          channel: '新闻',
          positon: '网站首页',
          source: '是',
          description: '凤凰网是一家老牌的香港媒体，在全球华人圈有广泛的影响力',
          media_price: 100,
          direct_price: 200,
          editor: '王大锤',
          editor_income: 30,
          status: 1
        },
        {
          value: false,
          name: '凤凰网',
          category: '新闻综合',
          channel: '新闻',
          positon: '网站首页',
          source: '是',
          description: '凤凰网是一家老牌的香港媒体，在全球华人圈有广泛的影响力',
          media_price: 100,
          direct_price: 200,
          editor: '王大锤',
          editor_income: 30,
          status: 1
        },
        {
          value: false,
          name: '凤凰网',
          category: '新闻综合',
          channel: '新闻',
          positon: '网站首页',
          source: '是',
          description: '凤凰网是一家老牌的香港媒体，在全球华人圈有广泛的影响力',
          media_price: 100,
          direct_price: 200,
          editor: '王大锤',
          editor_income: 30,
          status: 1
        },
        {
          value: false,
          name: '凤凰网',
          category: '新闻综合',
          channel: '新闻',
          positon: '网站首页',
          source: '是',
          description: '凤凰网是一家老牌的香港媒体，在全球华人圈有广泛的影响力',
          media_price: 100,
          direct_price: 200,
          editor: '王大锤',
          editor_income: 30,
          status: 1
        },
        {
          value: false,
          name: '凤凰网',
          category: '新闻综合',
          channel: '新闻',
          positon: '网站首页',
          source: '是',
          description: '凤凰网是一家老牌的香港媒体，在全球华人圈有广泛的影响力',
          media_price: 100,
          direct_price: 200,
          editor: '王大锤',
          editor_income: 30,
          status: 1
        },
        {
          value: false,
          name: '凤凰网',
          category: '新闻综合',
          channel: '新闻',
          positon: '网站首页',
          source: '是',
          description: '凤凰网是一家老牌的香港媒体，在全球华人圈有广泛的影响力',
          media_price: 100,
          direct_price: 200,
          editor: '王大锤',
          editor_income: 30,
          status: 1
        },
        {
          value: false,
          name: '凤凰网',
          category: '新闻综合',
          channel: '新闻',
          positon: '网站首页',
          source: '是',
          description: '凤凰网是一家老牌的香港媒体，在全球华人圈有广泛的影响力',
          media_price: 100,
          direct_price: 200,
          editor: '王大锤',
          editor_income: 30,
          status: 1
        },
        {
          value: false,
          name: '凤凰网',
          category: '新闻综合',
          channel: '新闻',
          positon: '网站首页',
          source: '是',
          description: '凤凰网是一家老牌的香港媒体，在全球华人圈有广泛的影响力',
          media_price: 100,
          direct_price: 200,
          editor: '王大锤',
          editor_income: 30,
          status: 1
        },
        {
          value: false,
          name: '凤凰网',
          category: '新闻综合',
          channel: '新闻',
          positon: '网站首页',
          source: '是',
          description: '凤凰网是一家老牌的香港媒体，在全球华人圈有广泛的影响力',
          media_price: 100,
          direct_price: 200,
          editor: '王大锤',
          editor_income: 30,
          status: 1
        },
        {
          value: false,
          name: '凤凰网',
          category: '新闻综合',
          channel: '新闻',
          positon: '网站首页',
          source: '是',
          description: '凤凰网是一家老牌的香港媒体，在全球华人圈有广泛的影响力',
          media_price: 100,
          direct_price: 200,
          editor: '王大锤',
          editor_income: 30,
          status: 1
        },
        {
          value: false,
          name: '凤凰网',
          category: '新闻综合',
          channel: '新闻',
          positon: '网站首页',
          source: '是',
          description: '凤凰网是一家老牌的香港媒体，在全球华人圈有广泛的影响力',
          media_price: 100,
          direct_price: 200,
          editor: '王大锤',
          editor_income: 30,
          status: 1
        },
        {
          value: false,
          name: '凤凰网',
          category: '新闻综合',
          channel: '新闻',
          positon: '网站首页',
          source: '是',
          description: '凤凰网是一家老牌的香港媒体，在全球华人圈有广泛的影响力',
          media_price: 100,
          direct_price: 200,
          editor: '王大锤',
          editor_income: 30,
          status: 1
        },
        {
          value: false,
          name: '凤凰网',
          category: '新闻综合',
          channel: '新闻',
          positon: '网站首页',
          source: '是',
          description: '凤凰网是一家老牌的香港媒体，在全球华人圈有广泛的影响力',
          media_price: 100,
          direct_price: 200,
          editor: '王大锤',
          editor_income: 30,
          status: 1
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
    getMedia().then(data => {
    })
  },
  methods: {
    del (num) {
      console.log(num)
    },
    openDialog () {
      this.dialog = true
    }
  }
}
</script>

<style lang="stylus" scoped>
section
  min-height 100%
  background linear-gradient(to right bottom, #eee, #ffb74d)
</style>
