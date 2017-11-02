import VueRouter from 'vue-router';

import Dashboard from './pages/Dashboard.vue';
import Archive from './pages/Archive.vue';
import Login from './pages/Login.vue';
import Register from './pages/Register.vue';

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
   },
   {
      name : 'register',
      path : '/register',
      component : Register
   }
];

const router = new VueRouter({
   routes : routes,
   mode : 'history'
});

export default router;