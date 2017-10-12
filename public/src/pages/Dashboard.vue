<template>
<div>
  <tool-bar page-title="Dashboard"></tool-bar>
  <div class="fab-wrapper">
    <md-button class="md-fab md-clean md-fab-top-right" id="dialogControl" @click="openForm">
      <md-icon>add</md-icon>
    </md-button>
  </div>

  <md-dialog md-open-from="#dialogControl" md-close-to="#dialogControl" ref="appForm">
    <app-form v-show="formVisible" v-on:newApp="addNewApp" v-on:formClosed="closeForm">
    </app-form>
  </md-dialog>

  <md-dialog ref="appView">
    <app-card :application="currentApplication"
              v-on:flagDeleted="deleteFlag"
              v-on:newFlagCreated="addNewFlag">
    </app-card>
  </md-dialog>

  <md-layout class="pa pb-0" md-align="center">
    <md-layout md-flex="70">

      <md-toolbar class="md-transparent">
        <div class="block-fill">
          <h1 class="md-title">Your Applications</h1>
        </div>
      </md-toolbar>

    </md-layout>
  </md-layout>


  <md-layout v-cloak md-gutter md-align="center" v-show="emptyList">
    <md-layout md-flex="35">
      <md-whiteframe class="mt-2 block-fill">
        <div class="mt-1 pa tc md-body-2">
          You have added any applications yet
        </div>
      </md-whiteframe>
    </md-layout>
  </md-layout>


  <app-table v-cloak>
    <div slot="application-row">
      <app-row v-for="application in applications"
               v-on:rowClicked="openCard" 
               :key="application.id" 
               :application="application"></app-row>
    </div>
  </app-table>
</div>
</template>

<script>
  import axios from 'axios';
  import _ from 'underscore';
  import base from '../helpers/urls.config';
  import bus from '../helpers/bus';

  import appTable from '../reusable/appTable.vue';
  import appRow from '../reusable/appRow.vue';
  import appForm from '../reusable/appForm.vue';
  import appCard from '../reusable/appCard.vue';

  import toolBar from '../elements/toolBar.vue';

  export default {
    data(){
        return {
          formVisible : true,
          applications : [],
          flags : [],
          currentApplication : {company:'', type:'', status:'', vacancy:'', status:'', date: ''}
        }
    },
    methods : {
      init() {
        axios.get(`${base.url}/applications`).then(response => {
          this.applications = response.data;
        });
        axios.get(`${base.url}/flags`).then(response => {
          this.flags = response.data;
        });
      },
      deleteApp(app) {
        let idx = _.findLastIndex(this.applications, {
          id : app.id
        });
        axios.delete(`${base.url}/applications/${app.id}`).then(success => {
           this.applications.splice(idx, 1);
           if (this.$refs['appView'].active) {
             this.closeCard()
           }
        });
        //console.log(this.$refs['appView'].active)
      },
      updateApp(idx, other) {
        this.applications.splice(idx, 1, other);
        return true;
      },
      addNewApp(newData) {
        this.applications.unshift(newData);
      },
      deleteFlag(flagId) {
        var idx = _.findLastIndex(this.flags, {
          id : flagId
        });
        this.flags.splice(idx, 1);
      },
      addNewFlag(newFlagData) {
        this.flags.push(newFlagData);
      },
      closeForm(){
        this.$refs['appForm'].close();
      },
      openForm(){
        this.$refs['appForm'].open();
      },
      openCard(app) {
        this.currentApplication = app;
        var _cflags = _.where(this.flags, {applicationId : app.id})
        bus.$emit('cardOpened', _cflags);
        this.$refs['appView'].open();
      },
      closeCard() {
        this.$refs['appView'].close();
      }
    },
    computed : {
      emptyList() {
        return this.applications.length === 0;
      },
      filteredApps() {
        let apps = this.applications;
        if (this.filter === 'All') return apps;
        return apps.filter(function(app){
          app.status === this.filter
        });
      }
    },
    created() {
      this.init();
      bus.$on('appDeleted', this.deleteApp)
    },
    components : {
      appTable,
      appForm,
      toolBar,
      appRow,
      appCard
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



/*Table Display*/
.table{
  display: table;
  width: 92%;
  border-collapse: collapse
}
.table-row{
  display: table-row;
  width: 100%;
}

.tcell{
  display: table-cell;
  padding: 1em;
  vertical-align: middle
}
.thead{
  border-bottom: 1px solid #eeeeee;
  /*margin-bottom: 8px;*/
}
.placehold{
  width: 40px;
}
.col-1 { width: 5%; }
.col-2 { /*width: 16.666667%;*/ width:15% }
.col-3 { width: 25%; }
.click-wrapper{
  display: inherit;
  cursor: pointer;
}
.app-row:hover{
  background-color: #f9f9f9
}
.has-ripple{
  position: relative;
}
</style>