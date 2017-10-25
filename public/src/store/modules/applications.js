import * as types from '../mutations.types';
import axios from 'axios';
import { firebaseMutations, firebaseAction } from 'vuexfire';

const state = {
   applications : []
}

const getters = {
   activeApps : state => {
      return state.applications.filter(app => !app.archived)
   }
}

const actions = {
   LOAD_APPS_LIST : firebaseAction(({bindFirebaseRef}, ref) => {
     bindFirebaseRef('applications', ref);
     console.log(applications);
   })
}

const mutations = firebaseMutations;


export default {
   state,
   getters,
   mutations,
   actions,
}