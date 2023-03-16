import {createRouter, createWebHistory} from 'vue-router'
import Login from './modules/login'
import Home from './modules/home'
const router = createRouter({
  history: createWebHistory('/baobao'),
  routes: [
    {
      path:'/',
      redirect: 'login'
    },
    Login,
    Home
  ]
})
export default router;