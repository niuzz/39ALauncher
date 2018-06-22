<!-- ******************************************
*  Author : niuzz niuzz@hotmail.com
*  Created On : Fri Jun 22 2018
******************************************* -->
<template>
	<div class="wrap py-5">
    <v-container fluid fill-height class='loginOverlay'>
      <v-layout flex align-center justify-center>
        <v-flex xs12 sm8 elevation-6>
          <v-toolbar class='pt-5 orange lighten-1'>
            <v-toolbar-title class="black--text">
              <h4>
                欢迎注册
              </h4>
            </v-toolbar-title>
          </v-toolbar>
          <v-card>
            <v-card-text class='pt-4'>
              <div>
                <v-form ref="regForm" v-model="valid">
                 <v-text-field
                    label="请输入用户名"
                    v-model="registerForm.username"
                    :rules="registerForm.nameRules"
                    :counter="2"
                    required
                  >
                  </v-text-field>
                  <v-text-field
                    label="请输入密码"
                    :append-icon="registerForm.e1 ? 'visibility' : 'visibility_off'"
                    :append-icon-cb="() => (registerForm.e1 = !registerForm.e1)"
                    :type="registerForm.e1 ? 'password' : 'text'"
                    v-model="registerForm.password"
                    :rules="registerForm.passwordRules"
                    :counter="6"
                    required
                  >
                  </v-text-field>
                  <v-text-field
                    label="请重复输入密码"
                    :append-icon="registerForm.e1 ? 'visibility' : 'visibility_off'"
                    :append-icon-cb="() => (registerForm.e2 = !registerForm.e2)"
                    :type="registerForm.e2 ? 'password' : 'text'"
                    v-model="registerForm.repeatPassword"
                    :rules="registerForm.repeatPasswordRules"
                    :counter="6"
                    required
                  >
                  </v-text-field>
                  <v-text-field
                    label="请输入手机号"
                    v-model="registerForm.mobile"
                    :rules="registerForm.mobileRules"
                    :counter="11"
                    required
                  ></v-text-field>
                  <v-layout justify-center>
                    <v-btn @click="submit" class='orange darken-1 white--text'>
                      注册
                    </v-btn>
                    <v-btn @click="clear" >
                      重置
                    </v-btn>
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
import crypto from 'crypto'
import {register} from '../../../api/user'
export default {
  data () {
    return {
      valid: true,
      registerForm: {
        username: '',
        nameRules: [
          v => !!v || '请填写用户名',
          v => (v && v.length >= 2) || '用户名不得小于2'
        ],
        password: '',
        passwordRules: [
          v => !!v || '请填写密码',
          v => (v && v.length >= 6) || '密码不得小于6位'
        ],
        repeatPassword: '',
        repeatPasswordRules: [
          v => !!v || '请重复密码',
          v => (v && v.length >= 6 && v === this.registerForm.password) || '两次输入的密码不同'
        ],
        mobile: '',
        mobileRules: [
          v => !!v || '请填写手机号',
          v => (v && v.length === 11 && /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/.test(v)) || '请输入正确的手机号'
        ],
        e1: true,
        e2: true
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
      if (this.$refs.regForm.validate()) {
        let params = {}
        params.username = this.registerForm.username
        params.password = this.registerForm.password
        let sha1 = crypto.createHash('sha1')
        sha1.update(params.password)
        let shaPassword = sha1.digest('hex')
        params.password = shaPassword
        params.mobile = this.registerForm.mobile
        register(params).then(data => {
          let code = data.data.code
          if (code === 200) {
            this.snackbar.show = true
            this.snackbar.color = 'success'
            this.snackbar.text = '注册成功'
            setTimeout(() => {
              this.$router.push({path: '/user/login'})
            }, 3000)
          } else {
            this.snackbar.show = true
            this.snackbar.color = 'error'
            this.snackbar.text = data.data.msg
          }
        })
      }
    },
    clear () {
      this.$refs.regForm.reset()
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrap
  min-height 100%
  background linear-gradient(to right bottom, #eee, #FFB74D)


</style>
