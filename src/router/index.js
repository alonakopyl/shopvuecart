import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartView from '../views/CartView.vue'
import HatView from '../views/HatView.vue'

const routes = [
  {path: '/', name: 'home', component: HomeView},
  {path: '/hat', name: 'HatView', component: HatView},
  {path: '/cart', name: 'CartView', component: CartView},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
