<!-- ******************************************
*  Author : niuzz niuzz@hotmail.com
*  Created On : Mon Jun 18 2018
******************************************* -->
<template>
	<div class="wrap my-5">
    <v-container fluid fill-height class="loginOverlay">
          <v-layout flex align-center justify-center>
            <v-flex xs12 sm8 elevation-6>
              <v-toolbar class="pt-5 orange light-1">
                <v-toolbar-title class="white--black">
                  <h4>
                  欢迎登录 Orange.Media
                  美橙软联
                  </h4>
                </v-toolbar-title>
              </v-toolbar>
              <v-card>
                <v-card-text class="pt-4">
                  <div>
                      <v-form :v-model="loginForm">
                        <v-text-field
                          label="请输入用户名"
                          v-model="loginForm.username"
                          required
                        ></v-text-field>
                        <v-text-field
                          label="请输入密码"
                          v-model="loginForm.password"
                          required
                        ></v-text-field>
                        <v-layout justify-space-between>
                            <v-btn @click="submit" class=" orange darken-1 white--text">Login</v-btn>
                            <v-btn @click="testToken">忘记密码</v-btn>
                        </v-layout>
                      </v-form>
                  </div>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
       </v-container>
	</div>
</template>

<script type="text/ecmascript-6">
import {login} from '../../../api/user'
import { getCookie } from '../../../utils/util'
import axios from 'axios'
import crypto from 'crypto'
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    submit () {
      let params = {}
      params.username = this.loginForm.username
      let md5 = crypto.createHash('md5')
      md5.update(this.loginForm.password)
      let password = md5.digest('hex')
      params.password = password
      login(params).then(data => {
        let code = data.data.code
        if (code === 200) {
        }
      })
    },
    testToken () {
      let params = {}
      params.username = this.loginForm.username
      let md5 = crypto.createHash('md5')
      md5.update(this.loginForm.password)
      let password = md5.digest('hex')
      params.password = password
      let token = getCookie('token')
      axios({
        method: 'post',
        url: 'http://localhost:7001/api/user/auth',
        data: params,
        headers: {
              'Authorization': 'Bearer ' + token
          }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
