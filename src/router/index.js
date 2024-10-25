import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/sobre-monte',
      name: 'about-monte',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutMonte.vue')
    },
    {
      path: '/backstage',
      name: 'backstage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Backstage.vue')
    },
    {
      path: '/capitulos',
      name: 'Chapters',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Chapters.vue')
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      top: 0 ,
      behavior: 'smooth'
    }
  }
})

export default router
