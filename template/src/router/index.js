import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
{{#garudaAdmin}}
import AdminPanel from '@/components/AdminPanel';
{{/garudaAdmin}}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {{#garudaAdmin}}
    {
      path: '/admin',
      name: 'AdminPanel',
      component: AdminPanel,
    },
    {{/garudaAdmin}}
  ]
})
