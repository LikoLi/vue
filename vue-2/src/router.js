import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BABEL_ENV,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    }, {
      path: '/home',
      name: 'home',
      component: Home,
      children: [{
        path: 'list',
        name: 'list',
        component: () => import(/* webpackChunkName: "list" */ './views/List.vue')
      }, {
        path: 'user',
        name: 'user',
        component: () => import(/* webpackChunkName: "user" */ './views/User.vue')
      }]
    }, {
      path: '/add',
      name: 'add',
      component: () => import(/* webpackChunkName: "user" */ './views/Add.vue')
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
