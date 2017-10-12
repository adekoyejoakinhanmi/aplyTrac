import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueMaterial from 'vue-material';
import router from './router';
import store from './store';
import axios from 'axios';

Vue.use(VueRouter);
Vue.use(VueMaterial);

axios.defaults.baseURL = 'http://127.0.0.1:3000';

var vm = new Vue({
   router,
   el : '#app',
   store,
   mounted() {
      this.$router.push('/dashboard');
   },
   render : h => h(App)
});