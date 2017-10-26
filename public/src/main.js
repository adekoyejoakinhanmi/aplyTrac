import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueMaterial from 'vue-material';
import VueTimeago from "vue-timeago";
import router from './router';
import store from './store';

Vue.use(VueRouter);
Vue.use(VueMaterial);
Vue.use(VueTimeago, {
  name : 'timeago',
  locale : 'en-US',
  locales : {
    'en-US' : require('vue-timeago/locales/en-US.json')
  }
});

Vue.material.registerTheme('default', {
   primary: 'blue',
   accent: 'red',
   warn: 'red',
   background: { 
      color: 'grey',
      hue : 100
   }
 });

var vm = new Vue({
   router,
   el : '#app',
   store,
   mounted() {
      this.$router.push('/dashboard');
   },
   render : h => h(App)
});