import * as types from '../mutations.types';
import axios from 'axios';

const state = {
   flags : []
}

const getters = {
   getByAppId(state, getters) {
      return (appId) => {
         return state.flags.filter(flag => {
            return flag.applicationId === appId
         });
      }
   }
}

const actions = {
   LOAD_FLAGS_LIST({ commit }) {
      axios.get('/flags').then(res => {
         commit(types.GET_ALL_FLAGS, {list : res.data });
      }, err => {
         console.log(err)
      })
   },
   DELETE_ONE_FLAG({ commit, state }, { flag }) {
      axios.delete(`/flags/${flag.id}`).then(response => {
         commit(types.DELETE_FLAG, {flag : flag});
      }, err => {
         console.log(err);
      });
   },
   CREATE_ONE_FLAG({ commit, state }, { flag }) {
      axios.post(`/flags`, flag).then(response => {
         commit(types.CREATE_FLAG, {flag : flag});
      }, err => {
         console.log(err);
      });
   },
   UPDATE_ONE_FLAG({ commit, state }, { flag }) {
      axios.put(`/flags/${flag.id}`, flag).then(response => {
         commit(types.UPDATE_FLAG, {flag : flag});
      }, err => {
         console.log(err);
      });
   }
}

const mutations = {
   [types.GET_ALL_FLAGS] (state, { list }) {
      state.flags = list
   },
   [types.CREATE_FLAG] (state, { flag }) {
      state.flags.push(flag)
   },
   [types.UPDATE_FLAG] (state, { flag }) {
      let idx = state.flags.map(flag => flag.id).indexOf(flag.id);
      state.flags.splice(idx, 1, flag)    
   },
   [types.DELETE_FLAG] (state, { flag }) {
      let idx = state.flags.map(flag => flag.id).indexOf(flag.id);
      state.flags.splice(idx, 1)    
   }
}

export default {
   state,
   getters,
   actions,
   mutations
}