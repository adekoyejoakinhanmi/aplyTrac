<template>
  <div>
    <app-form :form-visible="formVisible"
              v-on:newApp="addNewApp"
              v-on:formClosed="toggleFormVisibility"
    ></app-form>

    <header>
      <div>
        <h2>All Jobs for {{user}}</h2>
      </div>
      <div>
        <button @click="toggleFormVisibility">
         Add New
        </button>
        </div>
    </header>

    <div>
      <div v-show="emptyList">
        You have added any applications yet
      </div>

      <application :key="application.id"
                   :application="application"
                   v-for="(application, index) in applications"
                   v-on:deleteApp="deleteOne(index)"
                   :edited="updateApp" @updated="data => updateApp(index, data)"
      ></application>
    </div>
  </div>
</template>

<script>
import axios from 'axios';;
import base from '../helpers/urls.config';
import _ from 'lodash';

import application from '../reusable/application.vue';
import appForm from '../reusable/appForm.vue';

export default {
   data(){
      return {
         user : "Adekoyejo",
         formVisible : false,
         applications : []
      }
   },
   methods : {
     getApplications() {
       axios.get(`${base.url}/applications`).then((response) => {
         this.applications = response.data;
         this.applications.reverse();
       }).catch(err => {
         console.log(err);
       });
     },
     deleteOne(index) {
       this.applications.splice(index, 1);
     },
     updateApp(idx, other) {
       this.applications.splice(idx, 1, other);
       return true;
     },
     addNewApp(newData) {
       this.applications.unshift(newData);
     },
     toggleFormVisibility(){
       this.formVisible = !this.formVisible;
       return true; 
     }
   },
   computed : {
     emptyList() {
       return this.applications.length === 0;
     }
   },
   mounted() {
     this.getApplications();
   },
   components : {
     'application' : application,
     'appForm' : appForm
   }
}
</script>

<style>

</style>