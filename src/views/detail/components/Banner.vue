<template>
<div>
  <div class="banner" @click="handleBannerClick">
    <img :src="bannerImg" alt="">
    <div class="banner-info">
        <div class="banner-title">
            {{sightName}}
        </div>
        <div class="banner-number">
         <span class="iconfont banner-icon">&#xe692;</span>
            39</div>
    </div>
  </div>
  <FadeAnimation>
    <Gallary :gallaryImgs="gallaryImgs"  v-show="showGallery" @close='handleGallaryClose'></Gallary>
  </FadeAnimation>
</div>
</template>

<script>
import Gallary from '../../../components/gallery/Gallery.vue'
import FadeAnimation from '../../../components/fade/FadeAnimation.vue'
export default {
  name: 'DetailBanner',
  components: {
    Gallary,
    FadeAnimation
  },
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      showGallery: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallery = true
    },
    handleGallaryClose () {
      this.showGallery = false
    }
  }
}
</script>

<style lang="stylus" scoped>
    .banner
        position: relative
        overflow: hidden
        height: 0
        padding-bottom: 55%
        .banner-img
            width: 100%
        .banner-info
            position:absolute
            color: #fff
            left: 0
            right: 0
            bottom: 0
            display: flex
            line-height:.6rem
            background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
            .banner-title
                flex: 1
                padding: 0 .2rem
                font-size: .32rem
            .banner-number
                margin-top: .14rem
                padding:0 .4rem
                height: .32rem
                line-height: .32rem
                border-radius: .2rem
                background: rgba(0,0,0,.8)
                font-size: .24rem
                .banner-icon
                    font-size: .24rem
</style>
