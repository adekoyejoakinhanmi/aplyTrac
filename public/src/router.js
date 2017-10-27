import VueRouter from 'vue-router';

import Dashboard from './pages/Dashboard.vue';
import Archive from './pages/Archive.vue';

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
   }
];

const router = new VueRouter({
   routes : routes,
   mode : 'history'
});

export default router;