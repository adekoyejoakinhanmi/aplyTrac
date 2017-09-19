import VueRouter from 'vue-router';

import Dashboard from './components/Dashboard.vue';

const routes = [
   {
      name : 'dashboard',
      path : '/dashboard',
      component : Dashboard
   }
];

const router = new VueRouter({
   routes : routes,
   mode : 'history'
});

export default router;