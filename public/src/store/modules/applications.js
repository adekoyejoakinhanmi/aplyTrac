import * as types from '../mutations.types';
import axios from 'axios';

const state = {
   applications : []
}

const getters = {
   activeApps : state => {
      return state.applications.filter(app => !app.archived)
   }
}

const actions = {
   LOAD_APPS_LIST({ commit }) {
      axios.get(`/applications`).then(res => {
         commit(types.GET_ALL_APPS, { list : res.data });
      }, err => {
         console.log(err);
      });
   },
   DELETE_ONE_APP({ commit, state }, { application }) {
      axios.delete(`/applications/${application.id}`).then(response => {
         commit(types.DELETE_APP, { application : response.data });
      }, err => {
         console.log(err)
      });
   },
   UPDATE_ONE_APP({ commit, state }, { application, cb }) {
     return axios.put(`/applications/${application.id}`, application).then(response => {
         commit(types.UPDATE_APP, { application : response.data });
      });
   }
}

const mutations = {
   [types.GET_ALL_APPS] (state, { list }) {
      state.applications = list
   },
   [types.READ_APP] (state, { application }) {
      state.current = application
   },
   [types.DELETE_APP] (state, { application }) {
      let idx = state.applications.map(app => app.id).indexOf(application.id);
      state.applications.splice(idx, 1);
   },
   [types.UPDATE_APP] (state, { application }) {
      let idx = state.applications.map(app => app.id).indexOf(application.id);
      state.applications.splice(idx, 1, application);  
   }
}

export default {
   state,
   getters,
   actions,
   mutations
}