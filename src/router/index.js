import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import About from '@/components/About'
import Ethereum from '@/components/Eth'
import Bitcoin from '@/components/bitcoin'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path:'/about',
      //name:'/About',
      component: About
    },
    {
      path:'/ethereum',
      //name:'/Ethereum',
      component: Ethereum
    },
    {
      path:'/bitcoin',
      //name:'/Ethereum',
      component: Bitcoin
    }
  ]
})
