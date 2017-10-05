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
    <app-content :application="currentApplication"></app-content>
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


  <md-layout v-cloak md-gutter md-align="center" v-if="emptyList">
    <md-layout md-flex="35">
      <md-whiteframe class="mt-2 block-fill">
        <div class="mt-1 pa tc md-body-2">
          You have added any applications yet
        </div>
      </md-whiteframe>
    </md-layout>
  </md-layout>


  <small-data-table v-cloak v-else>
    <div slot="application-row">
      <md-list-item class="app-row has-ripple" v-for="application in applications" :key="application.id">
        <md-ink-ripple />
        <div class="click-wrapper" @click="showCard(application)">
          <md-avatar><img src="../../assets/imgs/gb.png"></md-avatar>
          <div class="table">
            <div class="table-row">
              <div class="tcell col-3 md-body-2">{{application.company}}</div>
              <div class="tcell col-3 md-body-1 hide-on-small">{{application.vacancy}}</div>
              <div class="tcell col-1 md-body-1">{{application.date}}</div>
            </div>
          </div>
        </div>
        <md-button class="md-icon-button">
          <md-icon>more_vert</md-icon>
        </md-button>
      </md-list-item>
    </div>
  </small-data-table>

<!--
<md-layout class="pa" md-align="center">
  <div class="table-row">
    <div class="thead col-1">&nbsp;</div>
    <div class="thead col-3">Company</div>
    <div class="thead col-3">Vacancy</div>
    <div class="thead col-2">Date</div>
    <div class="thead col-1">&nbsp;</div>
  </div>

  <div class="table-row">
    <div class="tcell col-1"><md-avatar><img src="../../assets/imgs/gb.png"></md-avatar></div>
    <div class="tcell col-3">Gridium</div>
    <div class="tcell col-3">Front End Developer</div>
    <div class="tcell col-2">Today</div>
    <div class="tcell col-1">
      <md-button class="md-icon-button">
        <md-icon>more_vert</md-icon>
      </md-button>
    </div>
  </div>

</md-layout>
-->
<!--
  <md-layout class="pa" md-align="center">
    <md-layout md-flex="90">
    <md-tabs>
      
      <md-tab id="all" md-label="All">
        <md-layout md-gutter="16">

          <app-content v-for="application in applications" 
                      :application="application"
                      :key="application.id">
          </app-content>

        </md-layout>
      </md-tab>



      <md-tab id="getback" md-label="Get Back to you">
        <p>Noting to see here</p>
      </md-tab>
    </md-tabs>
    </md-layout>
  </md-layout>

-->

<!--
  <dataTable v-show="!emptyList">
    <filter-control v-on:filterBy="filterChange" slot="filter-control"></filter-control>
    <md-table-body slot="table-body">
      <table-row v-for="(application, index) in filteredApps" :application="application" :key="index">
      </table-row>
    </md-table-body>
  </dataTable>
-->
</div>
</template>

<script>
  import axios from 'axios';
  import base from '../helpers/urls.config';

  import smallDataTable from '../reusable/smallDataTable.vue';
  import dataTable from '../reusable/dataTable.vue';
  import appForm from '../reusable/appForm.vue';
  import appContent from '../reusable/appContent.vue';

  import toolBar from '../elements/toolBar.vue';
  import tableRow from '../elements/tableRow.vue';

  export default {
    data(){
        return {
          user : "Adekoyejo",
          formVisible : true,
          filter : 'All',
          applications : [],
          currentApplication : {company:'', type:'', status:'', vacancy:'', status:'', date: ''}
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
      closeForm(){
        this.$refs['appForm'].close();
      },
      openForm(){
        this.$refs['appForm'].open();
      },
      filterChange(newFilter){
        this.filter = newFilter;
      },
      showCard(app) {
        this.currentApplication = app;
        this.$refs['appView'].open();
        //alert(app.company);
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
    mounted() {
      this.getApplications();
    },
    components : {
      smallDataTable,
      appForm,
      toolBar,
      dataTable,
      tableRow,
      appContent
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
  margin-bottom: 8px;
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