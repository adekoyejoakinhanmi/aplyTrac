import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueMaterial from 'vue-material';
import router from './router';

Vue.use(VueRouter);
Vue.use(VueMaterial);

var vm = new Vue({
   router,
   el : '#app',
   mounted() {
      this.$router.push('/dashboard');
   },
   render : h => h(App)
});