<!-- ******************************************
*  Author : niuzz niuzz@hotmail.com
*  Created On : Mon Jun 18 2018
******************************************* -->
<template>
	<div class="wrap py-5">
    <v-container fluid fill-height class="loginOverlay">
          <v-layout flex align-center justify-center>
            <v-flex xs12 sm8 elevation-6>
              <v-toolbar class="pt-5 orange lighten-1">
                <v-toolbar-title class="black--text">
                  <h4>
                  欢迎登录 Orange.Media
                  美橙软联
                  </h4>
                </v-toolbar-title>
              </v-toolbar>
              <v-card>
                <v-card-text class="pt-4">
                  <div>
                      <v-form ref="loginForm">
                        <v-text-field
                          label="请输入用户名"
                          v-model="loginForm.username"
                          :rules="loginForm.usernameRules"
                          :counter="11"
                          required
                        ></v-text-field>
                        <v-text-field
                          label="请输入密码"
                          v-model="loginForm.password"
                          :rules="loginForm.passwordRules"
                          :append-icon="loginForm.e1 ? 'visibility' : 'visibility_off'"
                          :append-icon-cb="() => (loginForm.e1 = !loginForm.e1)"
                          :type="loginForm.e1 ? 'password' : 'text'"
                          required
                        ></v-text-field>
                        <v-layout justify-space-between>
                            <v-btn @click="submit" class=" orange darken-1 white--text">Login</v-btn>
                            <v-btn color="success" @click="create">添加</v-btn>
                            <v-btn @click="testToken">忘记密码</v-btn>
                        </v-layout>
                      </v-form>
                  </div>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-snackbar
              :timeout="snackbar.timeout"
              :color="snackbar.color"
              :multi-line="snackbar.mode === 'multi-line'"
              :vertical="snackbar.mode === 'vertical'"
              v-model="snackbar.show"
              top
            >
              {{ snackbar.text }}
              <v-btn dark flat @click.native="snackbar.show = false">Close</v-btn>
            </v-snackbar>
          </v-layout>
       </v-container>
	</div>
</template>

<script type="text/ecmascript-6">
import {login, create} from '../../../api/admin'
import { getCookie } from '../../../utils/util'
import axios from 'axios'
import crypto from 'crypto'
export default {
  data () {
    return {
      loginForm: {
        usernmae: '',
        mobileRules: [
          v => !!v || '请填写用户名'
        ],
        password: '',
        passwordRules: [
          v => !!v || '请填写密码',
          v => (v && v.length >= 6) || '密码不得小于6位'
        ],
        e1: true
      },
      snackbar: {
        show: false,
        mode: '',
        timeout: 3000,
        color: 'error',
        text: ''
      }
    }
  },
  methods: {
    submit () {
      let params = {}
      params.username = this.loginForm.username
      let sha1 = crypto.createHash('sha1')
      sha1.update(this.loginForm.password)
      let password = sha1.digest('hex')
      params.password = password
      login(params).then(data => {
        let code = data.data.code
        let result = data.data.data
        if (code === 200) {
          this.snackbar.show = true
          this.snackbar.color = 'success'
          this.snackbar.text = '登录成功'
          console.log(result)
          // this.$store.commit('admin/setUser', result.user)
          // sessionStorage.setItem('username', result.user.username)
          // sessionStorage.setItem('id', result.user.id)
          setTimeout(() => {
              this.$router.push({path: '/admin/media'})
            }, 3000)
        } else {
          this.snackbar.show = true
          this.snackbar.color = 'error'
          this.snackbar.text = data.data.msg
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
    },
    create () {
      let params = {}
      params.username = this.loginForm.username
      let sha1 = crypto.createHash('sha1')
      sha1.update(this.loginForm.password)
      let password = sha1.digest('hex')
      params.password = password
      console.log(params)
      create(params).tehn(response => {
        const code = response.data.code
        console.log(code)
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrap
  min-height 100%
  background linear-gradient(to right bottom, #eee, #FFB74D)
</style>
