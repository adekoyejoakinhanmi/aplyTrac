import Vue from 'vue';
import Vuex from 'vuex';
import applications from './modules/applications';
import flags from './modules/flags';
import users from './modules/users';
import { firebaseMutations } from 'vuexfire';

Vue.use(Vuex);

export default new Vuex.Store({
   modules : {
      applications,
      flags,
      users
   },
   mutations : firebaseMutations
});