import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Appointments from '@/components/admin/Appointments'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'index', component: Index},
    { path: '*', component: NotFound },
    {path: '/appointments', name: 'appointments', component: Appointments}
  ],
  mode: 'history'
})
