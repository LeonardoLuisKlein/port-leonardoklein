import Vue from 'vue'
import VueRouter from 'vue-router'
import Error404 from '../components/containers/error404/error404.vue'
import Page from '../components/containers/page/Page.vue'
import paginaProjetos from '../components/containers/paginaprojetos/paginaProjetos.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Page
  },
  {
    path: '/projetos',
    name: 'paginaProjetos',
    component: paginaProjetos
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
