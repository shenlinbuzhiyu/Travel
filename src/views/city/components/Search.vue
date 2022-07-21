<template>
<div>
  <div class="search">
    <input type="text" v-model="keyword" class="search-input" placeholder="请输入城市名或拼音" />
  </div>
  <div class="search-content" v-show="keyword" ref="search">
      <ul>
        <li class="search-item border-bottom" @click="handleCityClick(item.name)" v-for="item in list"  :key="item.id">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="!list.length">没有找到匹配的数据</li>
      </ul>
  </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'

export default {
  name: 'CitySearch',
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  props: {
    cities: Object
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
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (const i in this.cities) {
          this.cities[i].forEach(value => {
            if (value.spell.indexOf(this.keyword) > -1 ||
               value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  }
}
</script>

<style lang="stylus" scoped>
    @import '~@/assets/styles/varibles.styl'
    .search
        background-color: $bgColor
        height: .72rem
        padding: 0 .1rem
        .search-input
            text-align: center
            box-sizing: border-box
            padding: 0 .1rem
            color: #666
            width: 100%
            border-radius: .06rem
            height: .62rem
            line-height:.62rem
    .search-content
      z-index: 1
      position: absolute
      overflow: hidden
      top: 1.58rem
      left: 0
      right: 0
      bottom: 0
      .search-item
        line-height:.62rem
        padding-left: .2rem
        background:#fff
        color: #666
</style>
