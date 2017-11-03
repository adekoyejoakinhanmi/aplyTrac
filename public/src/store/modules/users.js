import { usersRef } from '../../../firebase/index';

const state = {
   user : null
}

const mutations = {
   setUser(state, payload){
      state.user = payload;    
   }
}

const actions = {
   setUserState({ commit }, user) {
      commit('setUser', user);
   },
   createUser({ commit }, { user }) {
      usersRef.push(user);
   }
}

const getters = {

}

export default {
   state,
   mutations,
   getters,
   actions,
}