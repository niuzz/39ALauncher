<!-- ******************************************
*  Author : niuzz niuzz@hotmail.com
*  Created On : Fri Jun 08 2018
******************************************* -->
<template>
	<v-container fluid>
    <carousel :imgs='imgs'></carousel>
    <description></description>
	</v-container>
</template>

<script type="text/ecmascript-6">
import carousel from '../components/Carousel'
import description from '../components//Description'
export default {
  data () {
    return {
      imgs: [
        '/img/banner0.jpg',
        '/img/banner1.jpg',
        '/img/banner2.jpg'
      ]
    }
  },
  components: {
    carousel,
    description
  }
}
</script>

<style lang="stylus" scoped>
h1
	font-size 12px
</style>
