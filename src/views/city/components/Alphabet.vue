<template>
  <div class="list">
    <div class="item" v-for="item in letters" :key="item"  :ref="item"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleLetterClick">{{item}}</div>
  </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      timer: null
    }
  },
  computed: {
    letters () {
      const letters = []
      // 循环把citis的键名放到letters
      for (const i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  updated () {
    // 一开始渲染页面是数据是空，通过ajax获取数据重新渲染时会触发updated钩子函数
    this.startY = this.$refs.A[0].offsetTop // A的第0项才是真正的项目
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      /*
        防抖，在频繁触发的前提下,让函数只在特定的时间内没有触发执行条件才执行一次代码
        比如点赞，只发送最后一次
        方法是在外面设置一个timer = null,if(timer){clearTimeout(tier)},
        不然就执行timer = setTimerout()

        节流，一些频繁触发的事件，但是规定在一段时间内只触发一次
        但是节流函数的第一次是执行的，然后在某个时间内，不管事件被触发多少次都不执行。
        方法是设置一个 startTimer ,
        获取执行的时间currentTimer,if(currentTimer - startTimer > delay)就执行函数
        执行完，startTimer = currentTimer，重新获取currentTimer，如果时间差小于delay就不执行
      */
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
    @import '~@/assets/styles/varibles.styl'
    .list
        display: flex
        flex-direction: column
        justify-content: center
        position:absolute
        right: 0
        bottom: 0
        top: 1.58rem
        width: .4rem
        .item
            text-align: center
            color:$bgColor
            line-height: .4rem
</style>
