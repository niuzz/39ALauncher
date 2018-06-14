<!-- ******************************************
*  Author : niuzz niuzz@hotmail.com
*  Created On : Fri Jun 08 2018
******************************************* -->
<template>
	<!-- <v-container fluid>
    <carousel :imgs='imgs'></carousel>
    <description></description>
	</v-container> -->
  <div>
    <parallax img="/img/orange.jpg" height="400"></parallax>
    <description></description>
    <parallax img="/img/orange.jpg" height="400"></parallax>
    <description></description>
  </div>
</template>

<script type="text/ecmascript-6">
// import carousel from '../components/Carousel'
import description from '../components//Description'
import parallax from '../components//Parallax'

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
    parallax,
    // carousel,
    description

  }
}
</script>

<style lang="stylus" scoped>
h1
	font-size 12px
</style>
