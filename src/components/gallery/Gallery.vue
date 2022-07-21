<template>
  <div class="container" @click="handleGalleryClick">
    <div class="wrapper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(item, index) in gallaryImgs" :key="index">
                <img class="gallery-img" :src="item" />
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true, // 监听到父级元素发生变化时 自动自我刷新一次
        observer: true
      }
    }
  },
  props: {
    gallaryImgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    handleGalleryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped lang="stylus">
    // 样式穿透 外层类 >>> 想要修改类名
    .container >>> .swiper-container
        overflow: inherit
    .container
        display: flex
        background-color: #000
        flex-direction: column
        justify-content: center
        z-index: 99
        left: 0
        right: 0
        top: 0
        bottom: 0
        position:fixed
        .wrapper
            height: 0
            width: 100%
            padding-bottom: 100%
            .gallery-img
                width: 100%
            .swiper-pagination
                color: #fff
                bottom: -1rem
</style>
