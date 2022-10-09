import { createRouter, createWebHashHistory  } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { hideNavigation: false },
      component: HomeView
    },
    {
      path: '/painel',
      name: 'painel',
      meta: { hideNavigation: true },
      component: () => import('../views/PainelView.vue')
    },
    {
      path: '/gestor',
      name: 'gestor',
      meta: { hideNavigation: true },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/GestorView.vue')
    }
  ]
})

export default router
