import { createRouter, createWebHashHistory } from 'vue-router'
import todolist from '../views/todolist/index.vue'
const routes = [
  {
    path: '/',
    name: 'todolist',
    component: todolist
  },
  
 // {
 //   path: '/my/my',
 //   name: 'My',
 //   // route level code-splitting
 //   // this generates a separate chunk (about.[hash].js) for this route
 //   // which is lazy-loaded when the route is visited.
 //   component: function () {
 //     return import(/* webpackChunkName: "about" */ '../views/my/index.vue')
 //   }
 // },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
