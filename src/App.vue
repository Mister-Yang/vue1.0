<template>
  <div>
    <v-header :seller="seller" ref="nihao"></v-header>
    <div class="tab border-1px">
      <div class="tab-item" rel="nihao">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from './components/header/header.vue';

  const ERR_OK = 0;

  export default {
      data() {
        return {
         seller: {}
        };
      },
      created() {
        this.$http.get('/api/seller').then((response) => {
          response = response.body;
          if (response.errno === ERR_OK) {
            this.seller = response.data;
            // console.log(this.seller);
            this.$nextTick(() => {
              this.getChild();
            });
          }
        });
      },
      components: {
        'v-header': header
      },
      methods: {
        getChild() {
            console.log(this.$refs.nihao.title);
          }
        }
  };

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixin.styl"

    .tab
      display:flex
      width:100%
      line-height: 40px
      // border-bottom: 1px solid rgba(7, 17, 27, 0.5)
      border-1px(rgba(7, 17, 27, 0.5))
      .tab-item
        flex:1
        text-align:center
        & > a
          display: block
          font-size: 14px
          color: rgb(77, 85, 93)
          &.active
            color: rgb(240, 20, 20)
</style>
