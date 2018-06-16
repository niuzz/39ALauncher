<template>
  <v-app>
    <v-header v-on:menu="showMenu"></v-header>
    <v-content>
      <nuxt />
    </v-content>
    <v-footer height="auto"></v-footer>
    <modia :show="menushow" @close="closeMenu">
      <div>
        <h2 @click="routeTo('/')">home</h2>
        <h2 @click="routeTo('/media')">media</h2>
        <h2 @click="routeTo('/package')">package</h2>
        <h2 @click="routeTo('/case')">case</h2>
        <h2 @click="routeTo('/info')">userInfo</h2>
        <h2 @click="routeTo('/about')">about</h2>
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
    }
  }
}
</script>
