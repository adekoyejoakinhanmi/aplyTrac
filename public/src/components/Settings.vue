<template>
<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2">
   <header>
      <h2>Your Settings</h2>
   </header>
   <main>
      <div class="mb-1">
         <h3>Archive on Closed</h3>
         <p>This determines action on when an application status changes to closed either to delete or archive an application</p>
         <select class="form-control" v-model="closedAction"  name="Closed Action">
            <option value="Delete">Delete</option>
            <option value="Archive">Archive</option>
         </select>

      </div>
      <button type="button" class="btn btn-success" @click="updateSettings">Save</button>
   </main>
</div>
</template>

<script>
import axios from 'axios';
import base from '../helpers/urls.config';
export default {
   data() {
      return {
         closedAction : "Archive"
      }
   },
   methods : {
      updateSettings() {
         let data = this.closedAction === 'Archive' ? false : true;

         axios.put(`${base.url}/settings`, {
            deleteOnClosed : data
         }).then(success => {
            console.log('Hurray');
         });
      }
   }
}
</script>

<style>

</style>
