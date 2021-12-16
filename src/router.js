import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/', name: 'index', component: () => import('./views/Home.vue') }],
});

export default router;
