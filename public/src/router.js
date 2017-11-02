import VueRouter from 'vue-router';

import Dashboard from './pages/Dashboard.vue';
import Archive from './pages/Archive.vue';
import Auth from './pages/Auth.vue';

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
      name : 'auth',
      path : '/auth',
      component : Auth
   }
];

const router = new VueRouter({
   routes : routes,
   mode : 'history'
});

export default router;