<!-- ******************************************
*  Author : niuzz niuzz@hotmail.com
*  Created On : Thu Jun 07 2018
******************************************* -->
<template>
<div class="wrap">
账号：<input type="text" v-model="username"/>
<br />
密码: <input type="password"/>
<br />
<input type="submit" @click="submit" value="submit"/>
</div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    submit() {
      console.log(this.username);
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
