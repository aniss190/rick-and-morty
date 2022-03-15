import { createRouter, createWebHistory } from 'vue-router'
import Characters from '../views/Characters.vue'
import Card from '../views/Card.vue'

const routes = [

  {
    path: '',
    redirect: '/characters'
  },
  {
    path: '/characters',
    name: 'characters',
    component: Characters
  },
  {
    path: `/characters/:id`,
    name: 'card',
    component: Card
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
