<template>
  <v-app>
    <v-header></v-header>
    <v-content>
      <nuxt />
    </v-content>
    <v-footer></v-footer>
  </v-app>
</template>

<script>
import VHeader from '../components/Header'
import VFooter from '../components/Footer'
export default {
  components: {
    VHeader,
    VFooter
  },
  data () {
      return {
        title: '联盟'
      }
    }
}
</script>
