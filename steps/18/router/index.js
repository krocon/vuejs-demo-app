import { createRouter, createWebHistory } from 'vue-router'
import ListView from '../views/ListView.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: ListView },
    {
      path: '/erledigt',
      component: () => import('../views/DoneView.vue'),
    },
    {
      path: '/todo/:id',
      name: 'detail',
      component: () => import('../views/DetailView.vue'),
      props: true,
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../views/NotFound.vue'),
    },
  ],
})
