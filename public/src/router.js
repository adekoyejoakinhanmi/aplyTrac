import VueRouter from 'vue-router';

import Dashboard from './components/Dashboard.vue';
import Settings from './components/Settings.vue';

const routes = [
   {
      name : 'dashboard',
      path : '/dashboard',
      component : Dashboard
   },
   {
      name : 'settings',
      path : '/settings',
      component : Settings
   }
];

const router = new VueRouter({
   routes : routes,
   mode : 'history'
});

export default router;