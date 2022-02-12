import { createRouter, createWebHashHistory } from 'vue-router'
import ProductList from '../components/ProductList.vue'
import ProductEdit from "../components/ProductEdit"
import Contact from "../components/Contact"

const routes = [
  {
    path: '/productlist',
    name: 'ProductList',
    component: ProductList,
  },
  {
    path: '/productedit',
    name: 'ProductEdit',
    component: ProductEdit,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
