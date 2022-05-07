import {createRouter, createWebHistory} from 'vue-router'
import Login from './modules/login'
const router = createRouter({
  history: createWebHistory('/baobao'),
  routes: [
    {
      path:'/',
      redirect: 'login'
    },
    Login
  ]
})
export default router;