<!-- ******************************************
*  Author : niuzz niuzz@hotmail.com
*  Created On : Sun Jun 10 2018
******************************************* -->
<template>
    <v-card
      flat
      tile
      class="orange darken-4 white--text text-xs-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          icon
          class="mx-3 white--text"
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text class="white--text pt-0">
        联系我们
      </v-card-text>
      <v-card-text class="white--text">
        &copy;2018 — <strong>20世纪少年</strong>
      </v-card-text>
    </v-card>
</template>

<script type="text/ecmascript-6">
export default {
    data: () => ({
      icons: ['fab fa-facebook', 'fab fa-twitter', 'fab fa-google-plus', 'fab fa-linkedin', 'fab fa-instagram']
    })
  }
</script>

<style lang="stylus" scoped>
.wrap
  height 60px
  background #666
</style>
