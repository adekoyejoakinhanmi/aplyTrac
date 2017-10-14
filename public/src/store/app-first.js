import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const state = {
   applications : []
}

const actions = {
   LOAD_APPS_LIST : function({ commit }) {
      axios.get('/applications').then(response => {
         commit('SET_APPS_LIST', { list : response.data})
      }, err => {
         console.log(err);
      });
   },
   ADD_NEW_APP : function({ commit }, data) {
      axios.post('/applications', data).then(response => {
         commit('ADD_APP', { application : response.data });
      }, err => {
         console.log(err);
      });
   },
   DELETE_ONE_APP : function({ commit, state }, {application}) {
      axios.delete(`/applications/${application.id}`).then(response => {
         commit('DELETE_APP', {application : response.data});
      }, err => {
         console.log(err);
      });
   },
   UPDATE_ONE_APP : function({ commit, state }, { application }) {
      axios.put(`/applications/${application.id}`, application).then(response => {
         commit('UPDATE_APP', {application : response.data});
      }, err => {
         console.log(err);
      });
   }
}

export const mutations = {
   SET_APPS_LIST : (state, { list }) => {
      state.applications = list
   },
   ADD_APP : (state, { application }) => {
      state.applications.push(application)
   },
   DELETE_APP : (state, { application }) => {
      let idx = state.applications.map(app => app.id).indexOf(application.id);
      state.applications.splice(idx, 1);
   },
   UPDATE_APP : (state, { application }) => {
      let idx = state.applications.map(app => app.id).indexOf(application.id);
      state.applications.splice(idx, 1, application);
   }
};

const store = new Vuex.Store({
   state,
   actions,
   mutations
});

export default store;