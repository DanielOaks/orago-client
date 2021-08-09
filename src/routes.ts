import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    name: 'main',
    path: '/',
    component: () => import('./views/MainInterface.vue'),
  },
  {
    name: 'onboard',
    path: '/onboard',
    component: () => import('@/views/Onboard.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// check whether user's been onboarded
router.beforeEach((to, from) => {
  //TODO(dan): switch this to checking if user's onboarded with our stored state.
  // (the ui state blob which we grabbed from the Storage worker when we started up)
  // if (to.name !== 'onboard') return '/onboard'
  return true
})

export default router
