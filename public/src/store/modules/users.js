import { usersRef } from '../../../firebase/index';

const state = {
   user : null,
   userKey : ''
}

const mutations = {
   setUser(state, payload){
      state.user = payload;  
   },
   setKey(state, payload) {
      state.userKey = payload;
   }
}

const actions = {
   setUserState({ commit }, user) {
      if (user) {
         usersRef.child(user.uid).once('value').then(snapshot => {
            commit('setKey', user.uid);
            commit('setUser', snapshot.val());
         });
         return;
      }
      commit('setKey', '');
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