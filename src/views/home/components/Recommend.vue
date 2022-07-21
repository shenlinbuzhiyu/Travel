<template>
    <div>
            <div class="title">
            热销推荐
            </div>
            <ul>
                <!-- router-link 的 tag 属性可以改变router-link要渲染的元素 -->
                <router-link :to="'/detail/' + item.id" class="item border-bottom"
                 v-for="item in list"
                 :key="item.id"
                 tag="li">
                    <img class="item-img" :src="item.imgUrl" alt="">
                    <div class="item-info">
                        <p class="item-title">{{item.title}}</p>
                        <p class="item-desc">{{item.desc}}</p>
                        <button class="item-button">查看详情</button>
                    </div>
                </router-link>

            </ul>
        </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
    @import '~@/assets/styles/mixin.styl'
    .title
        background: #eee
        margin-top: .2rem
        line-height: .8rem
        text-indent: .2rem
    .item
        overflow: hidden
        display:flex
        height: 1.9rem
        .item-img
            height: 1.7rem
            width: 1.7rem
            padding: .1rem
        .item-info
            flex: 1
            //保证内容不超出外层容器
            min-width:0
            padding:.1rem
            .item-title
                line-height:.54rem
                font-size:.32rem
                ellipsis()
            .item-desc
                line-height:.4rem
                ellipsis()
            .item-button
                background: #ff9300
                border-radius: .06rem
                padding:0 .2rem
                margin-top: .16rem
                line-height: .44rem
                color: #fff

</style>
