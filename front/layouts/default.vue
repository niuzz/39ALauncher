<template>
  <v-app>
    <v-header v-on:menu="showMenu"></v-header>
    <v-content>
      <nuxt />
    </v-content>
    <v-footer height="auto"></v-footer>
    <modia :show="menushow" @close="closeMenu">
      <div class="menu">
        <h2 @click="routeTo('/')">home</h2>
        <h2 @click="routeTo('/user/media')">media</h2>
        <h2 @click="routeTo('/user/package')">package</h2>
        <h2 @click="routeTo('/user/case')">case</h2>
        <h2 @click="routeTo('/user/info')">userInfo</h2>
        <h2 @click="routeTo('/user/about')">about</h2>
        <h2 @click="quit">quit</h2>
      </div>
    </modia>
  </v-app>
</template>

<script>
import VHeader from '../components/Header'
import VFooter from '../components/Footer'
import modia from '../components/Modia'
export default {
  components: {
    VHeader,
    VFooter,
    modia
  },
  data () {
      return {
        title: '联盟',
        menushow: false
      }
  },
  methods: {
    showMenu () {
      this.menushow = true
    },
    closeMenu () {
      this.menushow = false
    },
    routeTo (params) {
      this.menushow = false
      this.$router.push({path: params})
    },
    quit () {
      sessionStorage.setItem('username', '')
      sessionStorage.setItem('id', '')
      this.$store.commit('user/setUser', {username: '', id: ''})
      this.menushow = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.menu
  h2
    cursor pointer
    &:hover
      color #fff
      text-decoration underline
</style>

