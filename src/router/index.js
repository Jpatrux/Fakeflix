import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/favoris',
    name: 'FavMovie',
    component: () => import( '../views/FavMovie.vue')
  },
  {
    path: '/watchlist',
    name: 'WatchList',
    component: () => import('../views/WatchList.vue')
  },
  {
    path: '/movie/:id',
    name: 'MoviePost',
    component: () => import('../views/ResultMovie.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
