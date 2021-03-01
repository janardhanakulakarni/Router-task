import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import info from '@/components/info'
import form from '@/components/form'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/about',
      name:'About',
      component:About
    },
    {
      path:'/info',
      name:'info',
      component:info
    },
    {
      path:'/form',
      name:'form',
      component:form
    }
  ]
})
