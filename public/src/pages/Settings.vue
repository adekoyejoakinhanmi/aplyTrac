<template>
<div>
  <tool-bar page-title="Settings"></tool-bar>
   <main>
      <div>
         <h3>Archive on Closed</h3>
         <p>This determines action on when an application status changes to closed either to delete or archive an application</p>
         <select v-model="closedAction"  name="Closed Action">
            <option value="Delete">Delete</option>
            <option value="Archive">Archive</option>
         </select>

      </div>
      <button type="button" @click="updateSettings">Save</button>
   </main>
</div>
</template>

<script>
import axios from 'axios';
import toolBar from '../elements/toolBar.vue';

export default {
   data() {
      return {
         closedAction : "Archive"
      }
   },
   methods : {
      updateSettings() {
         let data = this.closedAction === 'Archive' ? false : true;

         axios.put(`/settings`, {
            deleteOnClosed : data
         }).then(success => {
            console.log('Hurray');
         });
      }
   },
   components : {
      'toolBar' : toolBar
   }
}
</script>

<style>

</style>
