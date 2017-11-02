import VueRouter from 'vue-router';

import Dashboard from './pages/Dashboard.vue';
import Archive from './pages/Archive.vue';
import Login from './pages/Login.vue';

const routes = [
   {
      name : 'dashboard',
      path : '/dashboard',
      component : Dashboard
   },
   {
      name : 'archive',
      path : '/archive',
      component : Archive
   },
   {
      name : 'login',
      path : '/login',
      component : Login
   }
];

const router = new VueRouter({
   routes : routes,
   mode : 'history'
});

export default router;