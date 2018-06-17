<!-- ******************************************
*  Author : niuzz niuzz@hotmail.com
*  Created On : Sat Jun 16 2018
******************************************* -->
<template>
	<div class="wrap">
    <v-card>

    </v-card>
    <UB :selectedCallback="upload" title="上传测试"></UB>
	</div>
</template>

<script type="text/ecmascript-6">
import UB from '../../../components/UploadBtn'
import axios from 'axios'
export default {
  components: {
    UB
  },
  methods: {
    upload (file) {
      let data = new FormData()
      data.append('name', file.name)
      data.append('file', file)
      axios.post('http://localhost:7001/api/source/file', data)
      .then(data => {
        console.log('-----------------------')
        console.log(data)
        console.log('-----------------------')
      })
      .catch(err => {
        console.log('-----------------------')
        console.log(err)
        console.log('-----------------------')
      })
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
