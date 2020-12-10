import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/Main.vue') //懒加载
  }
]

const router = new VueRouter({
  routes
})

export default router
