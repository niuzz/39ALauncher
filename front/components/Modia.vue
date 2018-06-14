<!-- ******************************************
*  Author : niuzz niuzz@hotmail.com
*  Created On : Thu Jun 14 2018
******************************************* -->
<template>
	<div :class="show? 'wrap show': 'wrap hide'">
    <h5>modia</h5>
	</div>
</template>

<script type="text/ecmascript-6">
export default {
  props: ['show']
}
</script>

<style lang="stylus" scoped>
.wrap
  position fixed
  top 0
  bottom 0
  left 0
  right 0
  width 100%
  height 100%
  background #FFA726
  z-index: 100
.show
  display block
.hide
  display none
</style>
