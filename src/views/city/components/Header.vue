<template>
  <div class="header">城市选择
    <router-link to='/'>
    <div class="header-left">
        <div class="iconfont back-icon">&#xe624;</div>
    </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
    @import '~@/assets/styles/varibles.styl'
    .header
        background-color: $bgColor
        height: .86rem
        line-height: .86rem
        text-align: center
        overflow: hidden
        color: #fff
        font-size: .4rem
        .header-left
            color: #fff
            width: .64rem
            float: left
            .back-icon
                text-align: center
                font-size: .4rem
</style>
