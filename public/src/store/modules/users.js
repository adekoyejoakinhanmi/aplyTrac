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
      let currentUser = null;
      if (user) {
         usersRef.child(user.uid).once('value', (snapshot) => {
            currentUser = snapshot.val();
         })
      }
      commit('setUser', currentUser);
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