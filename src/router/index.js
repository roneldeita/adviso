import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
// import Register from '@/components/Register'
import Appointments from '@/components/admin/Appointments'
import NotFound from '@/components/NotFound'

// middlewares
import { requireAuth } from '../assets/utils/auth'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'index', component: Index},
    {path: '/home', name: 'index', component: Index},
    {path: '/about', name: 'index', component: Index},
    {path: '/services', name: 'index', component: Index},
    {path: '/team', name: 'index', component: Index},
    {path: '/contact', name: 'index', component: Index},
    {path: '/login', name: 'login', component: Login},
    // {path: '/register', name: 'register', component: Register},
    {path: '*', component: NotFound},
    {path: '/appointments', name: 'appointments', beforeEnter: requireAuth, component: Appointments}
    // {path: '/appointments', name: 'appointments', component: Appointments}
  ]
})
