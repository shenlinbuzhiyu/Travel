<template>
    <div class="icons">
        <swiper :options="swiperOption" v-if="pages.length">
            <swiper-slide v-for="(page,index) in pages" :key="index">
                <div class="icon" v-for="item in page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" alt="">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        loop: true,
        // 自动轮播 关
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      // 把一维数组转为二维数组
      const pages = [] // 定义页码
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)// 超过8就放第二页
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item) // 往页码里放数据 例如第0页放 景点门票
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
    @import '~@/assets/styles/varibles.styl'
    @import '~@/assets/styles/mixin.styl'
    .icons >>> .swiper-container
        height: 0
        padding-bottom: 50%
    .icons
        margin-top .1rem
        .icon
            position:relative
            overflow: hidden
            float: left
            //父元素的高度是0，用来占高度
            padding-bottom: 25%
            width: 25%
            height: 0
            overflow: hidden
            .icon-img
                // 父元素没有设置高度，子元素高度想按百分比设置高度就需要定位position
                position: absolute
                top: 0
                left: 0
                right: 0
                bottom: .44rem
                box-sizing: border-box
                padding:.1rem
                .icon-img-content
                    display: block
                    height: 100%
                    margin: 0 auto
            .icon-desc
                color: $darkTextColor
                text-align: center
                height: .44rem
                line-height: .44rem
                position: absolute
                left: 0
                right: 0
                bottom:0
                ellipsis()
                // overflow: hidden
                // white-space: nowrap
                // text-overflow: ellipsis
</style>
