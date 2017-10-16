<template>
   <md-layout md-flex="25">
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

            <div class="card-media">
               <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="100" r="100" :style="status" />
               </svg>
            </div>

         </md-card-header>

         <md-card-area v-show="detailsView">
            <md-list>
              <md-subheader>Details</md-subheader>

              <md-list-item>
                <md-icon>location_on</md-icon> <span>{{application.type}}</span>
              </md-list-item>

              <md-list-item>
                <md-icon>send</md-icon> <span>{{application.medium}}</span>
              </md-list-item>

              <md-list-item>
                <md-icon>label</md-icon> <span>{{application.status}}</span>
              </md-list-item>

              <md-list-item>
                <md-icon>access_time</md-icon> <span>{{application.date}}</span>
              </md-list-item>
            </md-list>
         </md-card-area>

<!--
        <md-card-area>
        <flag-input></flag-input>
        </md-card-area>

        -->
         <div class="card-actions">
           <div style="flex: 1">
           </div>
            <app-options></app-options>
         </div>
      </md-card>
   </md-layout>
</template>

<script>
import appOptions from './appOptions.vue';
import flagInput from './flagInput.vue';

export default {
  data(){
    return {
      detailsView : false
    }
  },
  methods : {
    toggleDetails() {
      this.detailsView = !this.detailsView
    }
  },
  props : {
    application : {
      type : Object,
      required : true
    }
  },
  computed : {
    status() {
      return 'fill : #4A1C21';
    }
  },
  components : {
    appOptions,
    flagInput
  }
}
</script>

<style>
.app-card .card-media{
  display: block;
  flex : 0 0 20px;
  width : 20px;
  height: 20px;
  position: relative;
  margin-top: 5px
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
</style>