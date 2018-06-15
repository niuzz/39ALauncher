<!-- ******************************************
*  Author : niuzz niuzz@hotmail.com
*  Created On : Thu Jun 14 2018
******************************************* -->
<template>
	<div :class="show ? 'wrap show': 'wrap hide'">
    <div class='close-box'>
      <v-btn fab color="red" dark class="text-xs-center" @click="close">
        <v-icon dark right>block</v-icon>
      </v-btn>
    </div>
	</div>
</template>

<script type="text/ecmascript-6">
export default {
  props: ['show'],
  methods: {
    close () {
      this.$emit('close')
    }
  }
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
  .close-box
    display flex
    justify-content flex-end
.show
  display block
.hide
  display none
.btn
  .icon--right
    margin-left 0
</style>
