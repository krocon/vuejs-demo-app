import { createRouter, createWebHistory } from 'vue-router'
import ListView from '../views/ListView.vue'
import DoneView from '../views/DoneView.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: ListView },
    { path: '/erledigt', component: DoneView },
  ],
})
