<template>
<md-layout class="pa pt-0" md-align="center">
    <md-layout md-flex="70">
      <md-card>
    <md-list class="block-fill">
      <md-list-item class="thead">
        <md-avatar>&nbsp;</md-avatar>
        <div class="table">
          <div class="table-row">
            <div class="tcell md-subhead col-2">Company</div>
            <div class="tcell md-subhead col-2">Vacancy</div>
            <div class="tcell md-subhead col-1">Date</div>
          </div>              
        </div>
        <span class="placehold">&nbsp;</span>
      </md-list-item>

      <slot name="application-row">
      </slot>
      
    </md-list>
      </md-card>
    </md-layout>
  </md-layout>
</template>

<script>
import base from '../helpers/urls.config';
import axios from 'axios';

export default {
   data(){
      return {
         editing : false
      }
   },
   methods : {
      editApplication () {
         this.editing = !this.editing;
      },
      deleteApp() {
        axios.delete(`${base.url}/applications/${this.application.id}`);
        this.$emit('deleteApp');
      }
    }
}
</script>

<style>
   
</style>
