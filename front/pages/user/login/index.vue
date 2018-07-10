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
                          label="请输入手机号"
                          v-model="loginForm.mobile"
                          :rules="loginForm.mobileRules"
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
import {login} from '../../../api/user'
import { getCookie } from '../../../utils/util'
import axios from 'axios'
import crypto from 'crypto'
export default {
  data () {
    return {
      loginForm: {
        mobile: '',
        mobileRules: [
          v => !!v || '请填写手机号',
          v => (v && v.length === 11 && /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/.test(v)) || '请输入正确的手机号'
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
      params.mobile = this.loginForm.mobile
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
          this.$store.commit('user/setUser', result.user)
          sessionStorage.setItem('username', result.user.username)
          sessionStorage.setItem('id', result.user.id)
          setTimeout(() => {
              this.$router.push({path: '/'})
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
      params.id = sessionStorage.getItem('id')
      params.id = 2
      let token = getCookie('token')
      axios({
        method: 'post',
        url: 'http://localhost:7001/api/user/auth',
        data: params,
        headers: {
              'Authorization': 'Bearer ' + token
          }
      }).then(data => {
        console.log(data)
      }).catch(error => {
        alert(error)
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
