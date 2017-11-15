import { usersRef } from '../../../firebase/index';

const state = {
   user : null
}

const mutations = {
   SET_USER (state, payload){
      state.user = payload;  
   }
}

const actions = {
   SET_USER_STATE({ commit }, user) {
      if (user) {
         usersRef.child(user.uid).once('value').then(snapshot => {
            commit('SET_USER', snapshot.val());
         });
         return;
      }
      commit('SET_USER', null);    
   },
   CREATE_USER({ commit }, { user, id }) {
      usersRef.child(id).set(user);
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