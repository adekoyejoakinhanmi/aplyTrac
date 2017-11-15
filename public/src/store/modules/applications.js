import * as firebase from "firebase";
import { firebaseAction } from 'vuexfire';
import { appsRef } from '../../../firebase/index';

const state = {
   applications : []
}

const getters = {
   activeApps : state => {
      return state.applications.filter(app => !app.archived)
   },
   getByStatus : (state, getters) => prop => {
     if (typeof prop === 'object') {
      return state.applications.filter(app => app.archived === prop.archived);
     } 
   }
}

const actions = {
   LOAD_APPS_LIST : firebaseAction(({bindFirebaseRef}) => {
    let path = firebase.auth().currentUser.uid;
     bindFirebaseRef('applications', appsRef.child(path));
   }),
   CREATE_APP : ({ commit }, app) => {
    let path = firebase.auth().currentUser.uid;
     appsRef.child(path).push(app);
   },
   DELETE_APP : ({ commit }, key) => {
    let path = firebase.auth().currentUser.uid;
     appsRef.child(path).child(key).remove();
   },
   UPDATE_APP : ({ commit }, { key, data }) => {
    let path = firebase.auth().currentUser.uid;
     appsRef.child(path).child(key).update(data)
   }
}


export default {
   state,
   getters,
   actions,
}