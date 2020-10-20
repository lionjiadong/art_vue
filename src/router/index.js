import {createRouter, createWebHistory} from 'vue-router'
// import Test from "@/components/Test";
import BasicLayout from "@/layout/BasicLayout";
const routes = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
