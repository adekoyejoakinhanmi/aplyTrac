import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
   state : {
      applications : []
   },
   actions : {
      LOAD_APPS_LIST : function({ commit }) {
         axios.get('/applications').then(response => {
            commit('SET_APPS_LIST', { list : response.data})
         })
      }
   },
   mutations : {

   },
   getters : {

   },
   modules : {

   }
});

export default store;