import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue';
import AboutPage from '../views/AboutPage.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
