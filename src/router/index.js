import Vue from 'vue'
import Router from 'vue-router'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
Vue.use(Router)

import layout from '@/layout/index'
import index from '../views/index'



const router = new Router({
  routes: [
    {
      path: '/',
      component: layout,
      redirect:'/index',
      children:[
        {
          path:'index',
          component:index
        },
        {
          path:'write',
          component:()=>import('@/views/writeNote')
        },
        {
          path:'register',
          component:()=>import('@/views/register')
        }
      ]
    }
  ]
})

router.beforeEach((to,from,next)=>{
  Nprogress.start()
  next()
})
router.afterEach((to,from)=>{
  Nprogress.done()
})

export default router