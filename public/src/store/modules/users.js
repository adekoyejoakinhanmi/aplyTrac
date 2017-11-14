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
         usersRef.child(user.uid).once('value').then(snapshot => {
            commit('setUser', snapshot.val());
         });
         return;
      }
      commit('setUser', null);    
   },
   createUser({ commit }, { user, id }) {
      usersRef.child(id.uid).set(user);
   }
}

const getters = {
   userFirstName(state) {
      if (state.user) {
         return state.user.name.split(' ')[0];
      }
      return '';
   }
}

export default {
   state,
   mutations,
   getters,
   actions,
}