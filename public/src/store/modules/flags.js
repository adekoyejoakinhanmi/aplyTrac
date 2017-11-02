import { flagsRef } from '../../../firebase/index';
import { firebaseAction } from 'vuexfire';


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
   LOAD_FLAGS_LIST : firebaseAction(({ bindFirebaseRef }, ref) => {
      bindFirebaseRef('flags', ref)
   })
}

export default {
   state,
   getters,
   actions,
}