<template>
<form class="flex">
   <md-input-container style="flex: 1">
      <label for="New Flag">New Flag</label>
      <md-input v-model="newFlag" type="text" name="New Flag" placeholder="New Flag">
      </md-input>
   </md-input-container>
   <div>
      <md-button class="md-icon-button" @click="createFlag" :disabled="!newFlag">
         <md-icon>done</md-icon>
      </md-button>
      <md-button class="md-warn md-icon-button">
         <md-icon>close</md-icon>
      </md-button>
   </div>
</form>
</template>

<script>
import bus from '../helpers/bus';

export default {
   data() {
      return {
         newFlag : ''
      }
   },
   methods : {
      createFlag() {
         bus.$emit('flagCreated', this.newFlag);
         this.newFlag = '';
      }
   }
}
</script>

<style>

</style>
