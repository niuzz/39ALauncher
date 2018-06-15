<template>
  <v-app>
    <v-header v-on:menu="showMenu"></v-header>
    <v-content>
      <nuxt />
    </v-content>
    <v-footer height="auto"></v-footer>
    <modia :show="menushow" @close="closeMenu"></modia>
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
    }
  }
}
</script>
