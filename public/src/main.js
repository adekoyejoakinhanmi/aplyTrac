import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './router';

Vue.use(VueRouter);

var App = new Vue({
   router,
   el : '#app',
   mounted() {
      this.$router.push('/dashboard');
   }
});

window.$vm = App;