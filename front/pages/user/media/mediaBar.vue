<!-- bar -->
<template>
  <div :class='visible === true ? "wrap show" : "wrap hide"'>
    <span>已选择1家媒体，合计xx元</span>
    <v-btn color="success">发布</v-btn>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: true
    }
  },

  components: {},

  computed: {},

  mounted () {},

  methods: {}
}
</script>
<style lang='stylus' scoped>
.wrap {
  position fixed;
  background #fff;
  bottom 0;
  left 0;
  right 0;
  text-align center;
  z-index 999;
  padding 10px 0;
  &.show {
    display block;
  }
  &.hide {
    display none;
  }
}
</style>
