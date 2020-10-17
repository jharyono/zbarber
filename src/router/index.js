import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/service',
    name: 'Services',
    component: () => import('../views/Service.vue')
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('../views/Gallery.vue')
  },
  {
    path: '/contact',
    name: 'Contact Us',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/location',
    name: 'Location',
    component: () => import('../views/Location.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
