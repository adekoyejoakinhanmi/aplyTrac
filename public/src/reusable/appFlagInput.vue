<template>
<form class="pa pb-0 pt-0 flex flag-form" @submit.prevent>
   <md-input-container class="flex-1">
      <label for="New Flag">New Flag</label>
      <md-input v-model="newFlag" type="text" name="New Flag" placeholder="New Flag">
      </md-input>
   </md-input-container>
   <div>
      <md-button class="md-icon-button" @click="createFlag()" :disabled="!newFlag">
         <md-icon>done</md-icon>
      </md-button>
      <md-button class="md-warn md-icon-button" @click="closeFlagInput">
         <md-icon>close</md-icon>
      </md-button>
   </div>
</form>
</template>

<script>
import { idGen } from '../helpers/funcs';

export default {
   props : {
      appId : {
         type : String,
         required : true
      }
   },
   data() {
      return {
         newFlag : ''
      }
   },
   methods : {
      createFlag() {
         let data = {
            id : idGen('f'),
            applicationId : this.appId,
            title : this.newFlag,
            completed : false
         };
         this.$store.dispatch('CREATE_FLAG', data);
         this.closeFlagInput();
      },
      closeFlagInput() {
         this.newFlag = '';
      }
   }
}
</script>

<style>
.flag-form .md-button.md-icon-button {
   margin: 0
}
.flag-form {
   padding-right: 8px
}
</style>
