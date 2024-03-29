import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/Home'
import City from '@/views/city/City'
import Detail from '@/views/detail/Detail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/city',
    name: 'City',
    component: City
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }

]

const router = new VueRouter({
  routes,
  // 切换路由时 x位置为0，y位置也为0
  scrollBehavior (to, from, savePosition) {
    return { x: 0, y: 0 }
  }
})

export default router
