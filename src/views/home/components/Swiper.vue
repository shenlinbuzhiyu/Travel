<template>
  <div class="wrapper">
    <!-- ajax的数据是异步的，一开始是空数组，会导致呈现的是最后一个图片，使用v-if -->
    <swiper :options="swiperOption" v-if="list.length">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        // 自动轮播
        autoplay: 2000,
        // 滑动后继续播放
        autoplayDisableOnInteraction: false
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  // 样式穿透>>> 局部组件中修改第三方组件库样式
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    background: #eee
    .swiper-img
      width: 100%
</style>
