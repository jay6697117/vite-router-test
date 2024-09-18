import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChildView from '../views/ChildView.vue'
import ChildView1 from '../views/ChildView1.vue'

const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/parent',
    name: 'parent',
    component: () => import('../views/ParentView.vue'),
    children: [
      {
        path: 'child',
        name: 'child',
        component: ChildView
      },
      {
        path: 'child1',
        name: 'child1',
        component: ChildView1
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
