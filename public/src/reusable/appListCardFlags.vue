<template>
<div>
  <md-list>
      <md-subheader>
         <span style="flex : 1">
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
         <md-checkbox v-model="flag.completed"></md-checkbox>
         <span>{{flag.title}}</span>
         <md-button class="md-icon-button">
            <md-icon>delete</md-icon>
         </md-button>
      </md-list-item>
      <flag-input v-show="flagInputView"></flag-input>
   </md-list>
   
</div>
</template>

<script>
import flagInput from './flagInput.vue';


export default {
   data() {
      return {
         flagInputView : false
      }
   },
   methods : {
      toggleFlagInput() {
         this.flagInputView = !this.flagInputView
      }
   },
   computed : {
      notificationVisible(){
         return this.flags.length === 0 && !this.flagInputView
      }
   },
   props : {
      flags : {
         type : Array,
         required : true
      }
   },
   components : {
      flagInput
   }
}
</script>

<style>

</style>
