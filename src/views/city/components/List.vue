<template>
        <div class="list" ref="wrapper">
            <div>
                <div class="area">
                    <div class="title border-topbottom">当前城市</div>
                    <div class="button-list">
                        <div class="button-wrapper">
                            <div class="button">{{currentCity}}</div>
                        </div>
                    </div>
                </div>
                <div class="area">
                    <div class="title border-topbottom">热门城市</div>
                    <div class="button-list">
                        <div class="button-wrapper"
                         v-for="item in hot"
                         :key="item.id"
                         @click="handleCityClick(item.name)"
                         >
                            <div class="button">{{item.name}}</div>
                        </div>
                    </div>
                </div>
                <div class="area" v-for="(item,key) in cities"
                :ref="key"
                :key="key">
                    <div class="title border-topbottom">{{key}}</div>
                    <div class="item-list">
                        <div class="item border-bottom"
                         v-for="city in item"
                         :key="city.id"
                         @click="handleCityClick(city.name)"
                         >{{city.name}}</div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hot: Array,
    letter: String
  },
  computed: {
    ...mapState({ currentCity: 'city' })
  },
  methods: {
    handleCityClick (city) {
      // this.$store.commit('CHANGECITY', city)
      this.CHANGECITY(city)
      this.$router.push('/')
    },
    // ...mapMutations({ handleCityClick: 'CHANGECITY' }) 不会执行this.$router.push('/')
    ...mapMutations(['CHANGECITY'])

  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0] // 直接获取的element是数组，用[0]取值
        this.scroll.scrollToElement(element) // 可以滚动到指定dom元素
      }
    }
  },
  mounted () {
    // 滑动不了，降低better-scroll 版本
    this.scroll = new Bscroll(this.$refs.wrapper, {
      click: true
    })
  }
}
</script>

<style lang="stylus" scoped>
    //控制一像素边框颜色
    .border-topbottom
        &:before
            border-color:#ccc
        &:after
            border-color:#ccc
    .border-bottom
        &:before
            border-color:#ccc
    .list
        overflow: hidden
        position: absolute
        left: 0
        right: 0
        top: 1.58rem
        bottom: 0
        .title
            line-height:.54rem
            background: #eee
            font-size: .26rem
            color: #666
            padding-left: .2rem
        .button-list
            overflow hidden
            padding:.1rem .6rem .1rem .1rem
            .button-wrapper
                width: 33.33%
                float: left
                .button
                    text-align: center
                    margin: .1rem
                    padding: .1rem 0
                    border: .02rem solid #ccc
                    border-radius: .06rem

        .item-list
            .item
                line-height:.76rem
                padding-left: .2rem
</style>
