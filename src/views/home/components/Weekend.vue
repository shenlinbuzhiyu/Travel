<template>
    <div>
        <div class="title">
        周末去哪儿
        </div>
        <ul>
            <li class="item border-bottom" v-for="item in list" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" alt="">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>

</template>

<script>
export default {
  name: 'HomeWeeknd',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
    @import '~@/assets/styles/mixin.styl'
    .title
        background: #eee
        line-height: .8rem
        text-indent: .2rem
    .item-info
        padding:.1rem
        .item-img-wrapper
            overflow: hidden
            height: 0
            padding-bottom: 37.09%
            .item-img
                width: 100%
        .item-title
            line-height:.54rem
            font-size:.32rem
            ellipsis()
        .item-desc
            line-height:.4rem
            ellipsis()
</style>
