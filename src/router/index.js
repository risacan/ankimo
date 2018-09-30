import Vue from 'vue'
import Router from 'vue-router'
import Buki from '@/components/Buki'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Buki',
      component: Buki
    }
  ]
})
