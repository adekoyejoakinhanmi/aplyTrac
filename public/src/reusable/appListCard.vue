<template>
  <md-layout class="appList" md-flex-xsmall="100" md-flex-small="50" md-flex-medium="33">
    <md-card class="app-card block-fill">
      <md-card-header class="has-ripple" @click.native="toggleDetails">
        <md-ink-ripple />
        <md-card-header-text>
          <div class="md-title">{{application.company}}</div>
          <div class="md-subhead">{{application.vacancy}}</div>
          <div class="md-body-2">
            <timeago :since="application.date"></timeago>
          </div>
        </md-card-header-text>
      </md-card-header>

      <div class="card-media">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="100" :class="status" />
        </svg>
      </div>


      <md-card-area v-show="detailsView">
        <app-list-card-details :application="application">
        </app-list-card-details>
        <app-list-card-flags :app-id="application.id">
        </app-list-card-flags>
      </md-card-area>


      <div class="card-actions">
        <md-select name="applicationStatus" id="appStatus" v-model="s" md-align-trigger :md-menu-options="menuOptions">
          <md-button class="md-icon-button" md-menu-trigger slot="icon">
            <md-icon>edit</md-icon>
          </md-button>

          <md-subheader>
            <small>Change Status</small>
          </md-subheader>
          <md-option v-for="status in statuses" :value="status" :key="status">
            {{status}}
          </md-option>
        </md-select>

        <div class="flex-1">
        </div>

        <app-list-card-buttons :archive-status="application.archived" 
        @appDeleted="openDialog" 
        @appArchived="archiveApp" 
        @appUnarchived="unarchiveApp">
        </app-list-card-buttons>
      </div>

      <confirm-delete @deleteConfirmed="deleteApp" ref="deleteDialog"></confirm-delete>

    </md-card>
  </md-layout>
</template>

<script>
import { appsRef } from '../../firebase/index';

import appListCardButtons from './appListCardButtons.vue';
import appListCardDetails from './appListCardDetails.vue';
import appListCardFlags from './appListCardFlags.vue';

import confirmDelete from '../elements/confirmDelete.vue';


export default {
    data() {
      return {
        detailsView: false,
        menuOptions: {
          mdDirection: "top right"
        },
        s: this.application.status,
        statuses: ['Get Back to you', 'Yet to reply', 'Rejected/Filled', 'Interview']
      }
    },
    watch: {
      s: function (val, oldVal) {
        this.updateApp({ status : val });
      }
    },
    methods: {
      toggleDetails() {
        this.detailsView = !this.detailsView
      },
      updateApp(data) {
        let key = this.application['.key'];
        this.$store.dispatch('UPDATE_APP', {
          key, data
        })
      },
      archiveApp() {
        this.updateApp({ archived : true });
        this.$emit('appArchived');
      },
      unarchiveApp() {
        this.updateApp({ archived : false });
      },
      openDialog() {
        this.$refs['deleteDialog'].open();
      },
      closeDialog() {
        this.$refs['deleteDialog'].close();
      },
      deleteApp() {
        this.closeDialog();
        this.$store.dispatch('DELETE_APP', this.application['.key']);
      }
    },
    props: {
      application: {
        type: Object,
        required: true
      }
    },
    computed: {
      status() {
        let s = this.application.status;

        if (s === 'Get Back to you') {
          return 'getback';
        } else if (s === 'Yet to reply') {
          return 'ytr';
        } else if (s === 'Interview') {
          return 'interview';
        } else {
          return 'rejected'
        }
      }
    },
    components: {
      appListCardButtons,
      appListCardDetails,
      appListCardFlags,
      confirmDelete
    }
  }
</script>

<style>
.app-card .card-media{
  display: block;
  width : 20px;
  height: 20px;
  position: absolute;
  top: 10px;
  right: 10px;
}
.app-card{
  margin-bottom: 20px;
}
.blue{
  background-color: #80D8FF
}
.app-card.md-card .md-card-header:first-child > .md-card-header-text > .md-title:first-child{
  margin-top: 0;
  font-size: 24px
}
.app-card .md-card-header.md-card-header-flex{
  border-bottom: 1px solid rgba(0, 0, 0, .12);
}
.app-card .card-actions{
  display: flex;
  align-items: center;
  padding: 3px 5px;
  -webkit-text-size-adjust: 100%;
  line-height: 20px;
}
.md-list-item .md-list-item-container{
  font-size: 14px;
}

.app-card.md-card .md-card-header{
  cursor: pointer;
}

.app-card .md-list-item .md-list-item-container > .md-icon:first-child{
  margin-right: 15px
}
.app-card .has-ripple{
  position: relative;
}
.app-card .md-subheader{
  padding-right: 4px
}
.app-card .card-actions .md-select{
  width: 0%;
  min-width: 0;
}
.app-card .card-media .md-button.md-icon-button{
  margin: 0;
  padding: 0;
  width: 20px;
  min-width: 20px;
  height: 20px;
  min-height: 2px
}
.md-select-content .md-list-item .md-list-item-container span .color-code{
  width: 10px;
  height: 10px;
  margin-right: 5px
}
.app-card .md-button.md-icon-button {
  margin: 0;
}
.appList {
  align-items: flex-start;
}
.card-actions .md-select{
  position: static;
  display: flex;
  align-items: center
}
.card-actions .md-select .md-menu{
  height: auto;
}

@media screen and (min-width: 601px) and (max-width: 944px){
  .md-layout.appList.md-flex-small-50{
    min-width: 50%;
    flex: 0 1 50%;
  }
}
/* color statuses */
.ytr {
  fill: #ffea00
}
.getback{
  fill: #00bcd4
}
.interview{
  fill: #009688
}
.rejected{
  fill: #E91E63
}
</style>