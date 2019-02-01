import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('@/components/index'),
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'index',
          component: () => import('@/view/home/index')
        },
        {
          path: '/tree',
          name: 'tree',
          component: () => import('@/view/home/tree')
        },
        {
          path: '/msg',
          name: 'msg',
          component: () => import('@/view/home/message')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/view/login/login')
    }
  ]
})
