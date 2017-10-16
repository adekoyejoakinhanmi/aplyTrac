import Vue from 'vue'
import Vuex from 'vuex'
import applications from './modules/applications'
import flags from './modules/flags'

Vue.use(Vuex);

export default new Vuex.Store({
   modules : {
      applications,
      flags
   }
});