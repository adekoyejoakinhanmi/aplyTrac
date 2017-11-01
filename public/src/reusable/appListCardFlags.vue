<template>
<div>
  <md-list class="flags-list">
      <md-subheader>
         <span class="flex-1">
            Flags
         </span>
         <md-button class="md-icon-button" @click="toggleFlagInput">
            <md-icon>add</md-icon>
         </md-button>
      </md-subheader>

      <md-list-item v-show="notificationVisible" class="tc">
         No flags added yet
      </md-list-item>

      <md-list-item v-for="flag in flags" :key="flag.id">
         <md-checkbox v-model="flag.completed" @change="updateFlag(flag)"></md-checkbox>
         <span class="flex-1">{{flag.title}}</span>
         <md-button class="md-icon-button" @click="deleteFlag(flag)">
            <md-icon>delete</md-icon>
         </md-button>
      </md-list-item>
      <app-flag-input :app-id="appId" v-show="flagInputView"></app-flag-input>
   </md-list>
   
</div>
</template>

<script>
import appFlagInput from './appFlagInput.vue';
import { flagsRef } from '../../firebase/index';

export default {
   data() {
      return {
         flagInputView : false
      }
   },
   methods : {
      toggleFlagInput() {
         this.flagInputView = !this.flagInputView
      },
      deleteFlag(flag) {
        flagsRef.child(flag['.key']).remove();
      },
      updateFlag(flag) {
        flagsRef.child(flag['.key']).update({
          completed : flag.completed
        });
      }
   },
   computed : {
      flags() {
        return this.$store.getters.getByAppId(this.appId);
      },
      notificationVisible(){
         return !this.flags && !this.flagInputView
      }
   },
   props : {
      appId : {
        type : String,
        required : true
      }
   },
   components : {
      appFlagInput
   }
}
</script>

<style>
.flags-list .md-list-item .md-list-item-container {
   justify-content:initial;
   padding-right: 5px
}
</style>
