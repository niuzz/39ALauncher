<!-- ******************************************
*  Author : niuzz niuzz@hotmail.com
*  Created On : Sun Jun 10 2018
******************************************* -->
<template>
  <v-container>
    <h2 class='inner-title'>
      我们能做什么
    </h2>
	  <v-layout row wrap>
          <v-flex xs12 md4>
            <v-card color="blue-grey darken-2" class="white--text">
              <v-card-title primary-title>
                <div class="headline">软文推广</div>
                <div>为企业提供各种形式的新闻报道，发布在权威的网络媒体上，提高公众对企业产品或服务的认知度，塑造良好品牌形象，并提高销售转化率的营销服务。</div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat dark>了解更多……</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex xs12 md4>
            <v-card color="cyan darken-2" class="white--text">
              <v-card-title primary-title>
                <div class="headline">新闻源营销</div>
                <div>一般指在百度上，发布带有“百度新闻源”属性的媒体，通过搜索相关关键字就可直接在百度首页相关信息区域展示，在最短的时间内获得最大的信息曝光率。</div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat dark>了解更多……</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex xs12 md4>
            <v-card color="yellow darken-2" class="black--text">
              <v-card-title primary-title>
                <div class="headline">微信、微博推广</div>
                <div>利用微博大V和微信公众账户的大量精准粉丝进行推广，企业根据不同的行业广告选择适合的公众号，提供用户需要的信息，推广自己的产品，从而实现点对点的营销。</div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat dark>了解更多……</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
    </v-layout>
  </v-container>
</template>

<script type="text/ecmascript-6">
export default {}
</script>

<style lang="stylus" scoped>
.inner-title
  color #666
  text-align center
  font-size 38px
</style>
