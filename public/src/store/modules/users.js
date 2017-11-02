const state = {
   user : null
}

const mutations = {
   setUser(state, payload){
      state.user = payload;
      console.log(state.user, payload);    
   }
}

const actions = {
   setUserState({ commit }, user) {
      commit('setUser', user);
   }
}

export default {
   state,
   mutations,
   actions,
}