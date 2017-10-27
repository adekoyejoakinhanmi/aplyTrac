import * as types from '../mutations.types';
import { firebaseAction } from 'vuexfire';

const state = {
   applications : []
}

const getters = {
   activeApps : state => {
      return state.applications.filter(app => !app.archived)
   },
   getByStatus : (state, getters) => prop => {
     if (typeof prop === 'object') {
      return state.applications.filter(app => app.archived === prop.archived);
     } 
   }
}

const actions = {
   LOAD_APPS_LIST : firebaseAction(({bindFirebaseRef}, ref) => {
     bindFirebaseRef('applications', ref);
   })
}


export default {
   state,
   getters,
   actions,
}