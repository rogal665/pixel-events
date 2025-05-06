import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Strona główna - Pixel Events'
    }
  },
  {
    path: '/o-nas',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
    meta: {
      title: 'O nas - Pixel Events'
    }
  },
  {
    path: '/produkty',
    name: 'products',
    component: () => import('@/views/ProductsView.vue'),
    meta: {
      title: 'Produkty - Pixel Events'
    }
  },
  {
    path: '/produkty/:id',
    name: 'product-detail',
    component: () => import('@/views/ProductDetailView.vue'),
    props: true,
    meta: {
      title: 'Szczegóły produktu - Pixel Events'
    }
  },
  {
    path: '/kontakt',
    name: 'contact',
    component: () => import('@/views/ContactView.vue'),
    meta: {
      title: 'Kontakt - Pixel Events'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFoundView.vue'),
    meta: {
      title: 'Strona nie znaleziona - Pixel Events'
    }
  },
  {
    path: '/produkty/snap-track',
    name: 'snap-track',
    component: () => import('@/views/ProductSnapTrackView.vue'),
    meta: {
      title: 'Snap Track - Pixel Events'
    }
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

// Dynamicznie aktualizuj tytuł strony
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Pixel Events'
  next()
})

export default router
