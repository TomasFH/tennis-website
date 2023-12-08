import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactUs from '../views/ContactUs.vue'
import ProductsView from '../views/ProductsView.vue'
import CrudView from '../views/CrudView.vue'
import EditView from '../views/EditView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactUs
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsView
    },
    {
      path: '/crud',
      name: 'crud',
      component: CrudView
    },
    {
      path: '/crud',
      name: 'crud',
      component: CrudView
    },
    {
      path: '/edit/:id&:nombre&:precio&:stock&:imagen',
      name: 'edit-product',
      component: EditView,
      props: true
    },

  ]
})

export default router
