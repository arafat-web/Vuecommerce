import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue';
import AboutPage from '../views/AboutPage.vue';
import ProductDetailsPage from '../views/ProductDetailsPage.vue';
import ContactPage from '../views/ContactPage.vue';
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
  {
    path: '/product/:id',
    name: 'productDetails',
    component: ProductDetailsPage
  },
  {
    path: '/contact',
    name: 'ContactPage',
    component: ContactPage
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
