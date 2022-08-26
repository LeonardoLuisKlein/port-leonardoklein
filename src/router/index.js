import Vue from 'vue'
import VueRouter from 'vue-router'
import Error404 from '../components/containers/error404/error404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
  },
  {
    path: "*",
    name: "Error404",
    component: Error404,
  },
]

const router = new VueRouter({
  routes
})

export default router
