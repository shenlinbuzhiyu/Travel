<template>
  <div class="header">
    <div class="header-left">
        <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
        <span class="iconfont">&#xe632;</span>
        输入城市/景点/游玩主题
    </div>
    <!-- 用router-link把整个div包起来，不然设置字体颜色失效 -->
    <router-link to='/city'>
      <div class="header-right">
        {{city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>

  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Header',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
    @import '~@/assets/styles/varibles.styl'
    .header
        font-size: 0
        display: flex
        line-height: .86rem
        background-color: $bgColor
        color:#fff
        .header-left
            width: .64rem
            float: left
            .back-icon
                text-align: center
                font-size: .4rem
        .header-input
            font-size: .24rem
            flex: 1
            height: .64rem
            line-height: .64rem
            margin-top: .12rem
            margin-left: .2rem
            background: #ff
            border-radius: .1rem
            color: #ccc
            padding-left: .2rem
        .header-right
            color: #fff
            font-size: .24rem
            min-width: 1.04rem
            padding:0 .1rem
            float: right
            text-align center
            .arrow-icon
                font-size: .24rem
</style>
