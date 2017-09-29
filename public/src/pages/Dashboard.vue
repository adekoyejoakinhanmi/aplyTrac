<template>
<div>
  <tool-bar page-title="Applications" extended></tool-bar>
  <div class="fab-wrapper">
    <md-button class="md-fab md-clean md-fab-top-right" @click="toggleFormVisibility">
       <md-icon>add</md-icon>
      </md-button>
  </div>

  <md-layout md-align="center">
      <app-form :form-visible="formVisible" v-on:newApp="addNewApp" v-on:formClosed="toggleFormVisibility">
      </app-form>
  </md-layout>
  
  <md-layout md-gutter md-align="center" >
    <md-layout md-flex="35">
      <md-whiteframe class="mt-2" v-show="emptyList">
        <div class="mt-1 pa tc md-body-2">
          You have added any applications yet
        </div>
      </md-whiteframe>
    </md-layout>
  </md-layout>

      <application :key="application.id" :application="application" v-for="(application, index) in applications" v-on:deleteApp="deleteOne(index)"
        :edited="updateApp" @updated="data => updateApp(index, data)"></application>
</div>
</template>

<script>
import axios from 'axios';;
import base from '../helpers/urls.config';
import _ from 'lodash';

import application from '../reusable/application.vue';
import appForm from '../reusable/appForm.vue';
import toolBar from '../elements/toolBar.vue';

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
     'appForm' : appForm,
     'toolBar' : toolBar
   }
}
</script>

<style>
.fab-wrapper{
  position: absolute;
  right: 0px;
  bottom: 110px;
}
@media screen and (min-width: 1281px){
  .fab-wrapper{
    top: -55px;
    position: relative;
  }
}
</style>