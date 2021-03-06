import VueRouter from 'vue-router';
import * as firebase from 'firebase';

import Dashboard from './pages/Dashboard.vue';
import Archive from './pages/Archive.vue';
import Login from './pages/Login.vue';
import Register from './pages/Register.vue';

const routes = [
   {
      path: '*',
      redirect : '/login'
   },
   {
      name : 'dashboard',
      path : '/dashboard',
      component : Dashboard,
      meta : {
         requiresAuth : true
      }
   },
   {
      name : 'archive',
      path : '/archive',
      component : Archive,
      meta : {
         requiresAuth : true
      }
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