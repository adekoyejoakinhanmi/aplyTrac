import * as types from '../mutations.types';
import axios from 'axios';
import { firebaseMutations, firebaseAction } from 'vuexfire';

const state = {
   applications : []
}

const getters = {
   activeApps : state => {
      return state.applications//.filter(app => !app.archived)
   }
}

const actions = {
   LOAD_APPS_LIST : firebaseAction(({bindFirebaseRef}, ref) => {
     bindFirebaseRef('applications', ref);
   })
     /*
     appsRef.once('value', success => {
       console.log(success.val());
      commit(types.GET_ALL_APPS, { list : success.val() });
     });
     */
   }/*,
   DELETE_ONE_APP({ commit, state }, { application }) {
      axios.delete(`/applications/${application.id}`).then(response => {
         commit(types.DELETE_APP, { application : response.data });
      }, err => {
         console.log(err)
      });
   },
   UPDATE_ONE_APP({ commit, state }, { application }) {
     return axios.put(`/applications/${application.id}`, application).then(response => {
         commit(types.UPDATE_APP, { application : response.data });
      });
   },
   CREATE_ONE_APP({ commit, state }, { application }) {
     appsRef.push(application, success => {
      commit(types.CREATE_APP, { application : application });
     });
   }
}
*/
const mutations = firebaseMutations;
  /*
   [types.GET_ALL_APPS] (state, { list }) {
      state.applications = list
   },
   [types.CREATE_APP] (state, { application }) {
      state.applications.push(application);
   },
   [types.DELETE_APP] (state, { application }) {
      let idx = state.applications.map(app => app.id).indexOf(application.id);
      state.applications.splice(idx, 1);
   },
   [types.UPDATE_APP] (state, { application }) {
      let idx = state.applications.map(app => app.id).indexOf(application.id);
      state.applications.splice(idx, 1, application);  
   }
  */

export default {
   state,
   getters,
   mutations,
   actions,
}