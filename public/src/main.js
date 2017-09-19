import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './router';

Vue.use(VueRouter);

const App = new Vue({
   router,
   el : '#app',
   created() {
      this.$router.push('/dashboard');
   }
});