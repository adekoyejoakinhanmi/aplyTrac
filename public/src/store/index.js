import Vue from 'vue'
import Vuex from 'vuex'
import applications from './modules/applications'

Vue.use(Vuex);

export default new Vuex.Store({
   modules : {
      applications
   }
});