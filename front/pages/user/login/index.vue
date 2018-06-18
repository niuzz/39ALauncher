<!-- ******************************************
*  Author : niuzz niuzz@hotmail.com
*  Created On : Mon Jun 18 2018
******************************************* -->
<template>
	<div class="wrap my-5">
    <v-container fluid fill-height class="loginOverlay">
          <v-layout flex align-center justify-center>
            <v-flex xs12 sm8 elevation-6>
              <v-toolbar class="pt-5 orange darken-4">
                <v-toolbar-title class="white--text"><h4>欢迎登录 Orange.Media 美橙软联</h4></v-toolbar-title>
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
                            <a href="">忘记密码</a>
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
      console.log('-----------------------')
      console.log(this.loginForm.username)
      console.log('-----------------------')
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
