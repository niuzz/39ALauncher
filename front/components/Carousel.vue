<!-- ******************************************
*  Author : niuzz niuzz@hotmail.com
*  Created On : Sun Jun 10 2018
******************************************* -->
<template>
	<div>
    <v-layout row wrap>
      <v-flex>
        <v-carousel>
          <v-carousel-item v-for="(item,i) in imgs" :src="item" :key="i"></v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
  </div>


</template>

<script type="text/ecmascript-6">
export default {
  props: ['imgs'],
  methods: {
    handleClick: function (e) {
      console.log(e)
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
