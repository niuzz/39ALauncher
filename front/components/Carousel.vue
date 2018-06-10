<!-- ******************************************
*  Author : niuzz niuzz@hotmail.com
*  Created On : Sun Jun 10 2018
******************************************* -->
<template>
	<div class="wrap">
		<v-carousel>
      <v-carousel-item v-for="(item,i) in imgs" :src="item" :key="i"></v-carousel-item>
    </v-carousel>
	</div>
</template>

<script type="text/ecmascript-6">
export default {
  props: ['imgs']
}
</script>

<style lang="stylus" scoped>

</style>
