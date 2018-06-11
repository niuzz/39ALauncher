<!-- ******************************************
*  Author : niuzz niuzz@hotmail.com
*  Created On : Mon Jun 11 2018
******************************************* -->
<template>

	<v-parallax :src="img" :height="height">
          <v-layout
                  column
                  align-center
                  justify-center
                  class="white--text"
                >
            <img src="/img/logo.png" alt="Vuetify.js" height="100">
            <h1 class="white--text display-1 text-xs-center">发布稿件</h1>
            <div class="subheading mb-1 text-xs-center">快速发稿</div>
            <v-btn
              class="yellow lighten-0 mt-5 black--text"
              large
              href="/pre-made-themes"
            >
              开始…………
            </v-btn>
          </v-layout>
  </v-parallax>

</template>

<script type="text/ecmascript-6">
export default {
  props: ['img', 'height']
}
</script>

<style lang="stylus" scoped>

</style>
