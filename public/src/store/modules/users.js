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
      if (user) {
         usersRef.child(user.uid).once('value', (snapshot) => {
            commit('setUser', snapshot.val());
         })
      } else {
         commit('setUser', null);
      }    
   },
   createUser({ commit }, { user, id }) {
      usersRef.child(id.uid).set(user);
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