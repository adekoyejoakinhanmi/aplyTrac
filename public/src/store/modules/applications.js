import * as types from '../mutations.types';
import axios from 'axios';

const state = {
   applications : []
}

const getters = {
   allApps : state => state.applications
}

const actions = {
   LOAD_APPS_LIST({ commit }) {
      axios.get(`/applications`).then(res => {
         commit(types.GET_ALL_APPS, { list : res.data });
      }, err => {
         console.log(err);
      });
   }
}

const mutations = {
   [types.GET_ALL_APPS] (state, { list }) {
      state.applications = list
   }
}

export default {
   state,
   getters,
   actions,
   mutations
}