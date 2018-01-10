import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import City from '@/pages/city'
import Detail from '@/pages/detail'
import Beijing from '@/pages/beijing'
import Order from '@/pages/order'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/beijing',
      name: 'Beijing',
      component: Beijing
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    }
  ]
})
