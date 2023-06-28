import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Books from '../views/Books.vue'
import Categories from '../views/Categories.vue';
import Member from '../views/Member.vue';
import Desc from '../views/Desc.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/books',
      name: 'Books',
      component: Books,
    },
    {
      path: '/categories',
      name: 'Categories',
      component: Categories,
    },
    {
      path: '/member',
      name: 'Member',
      component: Member,
    },
    {
      path: '/desc',
      name: 'Desc',
      component: Desc,
    }
  ]
})

export default router
