import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'categories',
    component: () => import('../views/Categories.vue'),
    children: [
      {
        path: '/:categoryslug',
        name: 'pranks',
        component: () => import('../views/Pranks.vue'),
        meta: {
          showModal: true
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
