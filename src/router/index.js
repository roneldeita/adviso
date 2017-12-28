import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
// import Register from '@/components/Register'
import Profile from '@/components/admin/Profile'
import Appointments from '@/components/admin/Appointments'
import Subscriptions from '@/components/admin/Subscriptions'
import MasMailing from '@/components/admin/MasMailing'
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
    {path: '/profile', name: 'profile', beforeEnter: requireAuth, component: Profile},
    {path: '/appointments', name: 'appointments', beforeEnter: requireAuth, component: Appointments},
    {path: '/subscriptions', name: 'subscriptions', beforeEnter: requireAuth, component: Subscriptions},
    {path: '/masmailing', name: 'masmailing', beforeEnter: requireAuth, component: MasMailing}
    // {path: '/appointments', name: 'appointments', component: Appointments}
  ]
})
