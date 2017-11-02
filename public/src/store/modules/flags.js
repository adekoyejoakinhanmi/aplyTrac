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
   LOAD_FLAGS_LIST : firebaseAction(({ bindFirebaseRef }) => {
      bindFirebaseRef('flags', flagsRef)
   })
}

export default {
   state,
   getters,
   actions,
}