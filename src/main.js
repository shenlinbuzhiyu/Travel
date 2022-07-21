import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/reset.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 引入VueAwesomeSwiper 还要引入样式swiper.css
import 'swiper/dist/css/swiper.css'
// 引入字体图标
import './assets/styles/iconfont.css'
// 解决一像素边框
import './assets/styles/border.css'
// 解决一些手机点击事件有300毫秒延迟
import fastClick from 'fastclick'

fastClick.attach(document.body)
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
