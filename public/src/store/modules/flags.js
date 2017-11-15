import * as firebase from 'firebase';
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
      let path = firebase.auth().currentUser.uid;
      bindFirebaseRef('flags', flagsRef.child(path));
   }),
   CREATE_FLAG : ({ commit }, data) => {
      let path = firebase.auth().currentUser.uid;
      flagsRef.child(path).push(data);
   },
   DELETE_FLAG : ({ commit }, key) => {
      let path = firebase.auth().currentUser.uid;
      flagsRef.child(path).child(key).remove();
   },
   UPDATE_FLAG : ({ commit }, { key, data }) => {
      let path = firebase.auth().currentUser.uid;
      flagsRef.child(path).child(key).update(data);
   }
}

export default {
   state,
   getters,
   actions,
}