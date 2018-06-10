<!-- ******************************************
*  Author : niuzz niuzz@hotmail.com
*  Created On : Fri Jun 08 2018
******************************************* -->
<template>
	<div class="wrap">
		<carousel :imgs='imgs'></carousel>
	</div>
</template>

<script type="text/ecmascript-6">
import carousel from '../components/Carousel'
export default {
  data () {
    return {
      imgs: [
        '/static/img/banner0.jpg',
        '/static/img/banner1.jpg',
        '/static/img/banner2.jpg'
      ]
    }
  },
  components: {
    carousel
  }
}
</script>

<style lang="stylus" scoped>
h1
	font-size 12px
</style>
