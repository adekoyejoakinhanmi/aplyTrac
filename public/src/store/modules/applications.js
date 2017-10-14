import * as types from '../mutations.types';
import axios from 'axios';

const state = {
   applications : [],
   current : {
      "company": "Aln Tun",
      "vacancy": "Front-End",
      "type": "Remote",
      "status": "Pending",
      "date": "29-10-2017",
      "medium": "Email"
   }
}

const getters = {
   activeApps : state => {
      return state.applications.filter(app => !app.archived)
   },
   currentApp : state => state.current
}

const actions = {
   LOAD_APPS_LIST({ commit }) {
      axios.get(`/applications`).then(res => {
         commit(types.GET_ALL_APPS, { list : res.data });
      }, err => {
         console.log(err);
      });
   },
   READ_ONE_APP({ commit, state }, {application}) {
      commit(types.READ_APP, { application : application });
   },
   DELETE_ONE_APP({ commit, state }, { application }) {
      axios.delete(`/applications/${application.id}`).then(response => {
         commit(types.DELETE_APP, { application : response.data });
      }, err => {
         console.log(err);
      });
   },
   UPDATE_ONE_APP({ commit, state }, { application }) {
      axios.put(`/applications/${application.id}`, application).then(response => {
         commit(types.UPDATE_APP, { application : response.data });
      }, err => {
         console.log(err);
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
      state.applications.splice(idx, 1)
   },
   [types.UPDATE_APP] (state, { application }) {
      console.log('Hello World')
   }
}

export default {
   state,
   getters,
   actions,
   mutations
}