import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: HomeView
  },
  {
    path: '/carrinho',
    name: 'carrinho',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CarrinhoView.vue')
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },

  {
    path: '/produto',
    name: 'produto',
    component: () => import('../views/ProdutoView.vue')
  },

  {
    path: '/perfil',
    name: 'perfil',
    component: () => import('../views/UserdataView.vue')
  },
  
  {
    path: '/userCrud',
    name: 'userCrud',
    component: () => import('../views/UsercrudView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
