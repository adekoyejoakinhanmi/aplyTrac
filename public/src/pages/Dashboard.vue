<template>
<div>
  <tool-bar page-title="Dashboard" extended></tool-bar>
  <div class="fab-wrapper">
    <md-button class="md-fab md-clean md-fab-top-right" id="dialogControl" @click="openForm">
       <md-icon>add</md-icon>
      </md-button>
  </div>

<md-dialog md-open-from="#dialogControl" md-close-to="#dialogControl" ref="appForm">
  <app-form v-show="formVisible" v-on:newApp="addNewApp" v-on:formClosed="closeForm">
  </app-form>
</md-dialog>

  <md-layout md-gutter md-align="center">
    <md-layout md-flex="35">
      <md-whiteframe class="mt-2 block-fill" v-show="emptyList">
        <div class="mt-1 pa tc md-body-2">
          You have added any applications yet
        </div>
      </md-whiteframe>
    </md-layout>
  </md-layout>

<md-layout class="pa" md-gutter="8">
    <md-layout md-flex="25">
    <md-whiteframe class="block-fill">
    <md-toolbar>
      <h1 class="md-title">Stats</h1>
    </md-toolbar>
    </md-whiteframe>
  </md-layout>

  <dataTable v-show="!emptyList">
    <md-table-body slot="table-body">
      <table-row v-for="(application, index) in applications" :application="application" :key="index">
      </table-row>
    </md-table-body>
  </dataTable>
</md-layout>
</div>
</template>

<script>
import axios from 'axios';
import base from '../helpers/urls.config';

import smallDataTable from '../reusable/smallDataTable.vue';
import dataTable from '../reusable/dataTable.vue';
import appForm from '../reusable/appForm.vue';

import toolBar from '../elements/toolBar.vue';
import tableRow from '../elements/tableRow.vue';

export default {
   data(){
      return {
         user : "Adekoyejo",
         formVisible : true,
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
       console.log('Iwas called');
       this.applications.splice(index, 1);
     },
     updateApp(idx, other) {
       this.applications.splice(idx, 1, other);
       return true;
     },
     addNewApp(newData) {
       this.applications.unshift(newData);
     },
     closeForm(){
       this.$refs['appForm'].close();
     },
     openForm(){
       this.$refs['appForm'].open();
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
     smallDataTable,
     appForm,
     toolBar,
     dataTable,
     tableRow
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
@media screen and (min-width: 600px){
    .hide-on-large{
    display: none
  }
}
@media screen and (max-width: 600px){
  .hide-on-small{
    display: none
  }
}
</style>