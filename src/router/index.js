import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'  
import DetailsView from '../views/DetailsView.vue'

const routes = [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: "/details/:countryName",
      name: "details",
      component: DetailsView,
      props: true, // 傳遞路由參數作為組件的 props
    },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router
