
import Vue from 'vue'
import Router from 'vue-router'
function loadView (pages) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/pages/${pages}.vue`)
}
Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: loadView('home'),
    children: [
      {
        path: '/',
        component: loadView('index'),
        meta: {
          requireAuth: true,
          nav: ['首页']
        }
      }
    ]
  },
  {
    path: '*',
    component: loadView('notFound')
  }
]

export default new Router({
  linkActiveClass: 'active',
  routes
  // strict: process.env.NODE_ENV !== 'production',
})
