<template>
   <div class="col-md-3 col-sm-6 col-xs-12">
      <div class="panel panel-default">
         <div class="panel-heading">
            <strong>
               {{application.company}}
               <span :title="application.status" :class="['status_badge', 'pull-right', bgColor]">&nbsp;</span>
            </strong>
         </div>

         <div class="panel-body">
            <p><em>{{application.vacancy}} | {{application.type}}</em></p>
            <p>via {{application.medium}} on {{application.date}}</p>
            <div :class="[editing ? '' : 'hidden']">
               <label for="Application Status">Status</label>
               <select class="mb-1 form-control" name="Application Status" v-model="status">
                  <option value="Yet to reply">Yet to reply</option>
                  <option value="Pending">Pending</option>
                  <option value="Get Back to you">Get Back to you</option>
                  <option value="Rejected/Filled">Rejected/Filled</option>
               </select>
               
               <button class="btn btn-default" type="button" @click="updateApplication">Go!</button>
            </div>

         </div>
         <div class="panel-footer clearfix">
            <div class="pull-right">
               <span @click="editApplication"><i class="glyphicon glyphicon-pencil"></i></span>
               <span @click="deleteApp"><i class="glyphicon glyphicon-trash"></i></span>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import base from '../helpers/urls.config';
import axios from 'axios';

export default {
   data(){
      return {
         editing : false,
         status : this.application.status
      }
   },
   methods : {
      editApplication () {
         this.editing = !this.editing;
      },
      updateApplication() {
        let data =  {
          company : this.application.company,
          type : this.application.type,
          vacancy : this.application.vacancy,
          medium : this.application.medium,
          status : this.status,
          date : this.application.date
        };
        axios.put(`${base.url}/applications/${this.application.id}`, data);
        // This is to ensure that the parent gets full
        // update data;
        data.id = this.application.id;
        this.$emit('updated', data)
        this.editApplication();
      },
      deleteApp() {
        axios.delete(`${base.url}/applications/${this.application.id}`);
        this.$emit('deleteApp');
      }
    },
   props : ['application'],
   computed : {
      bgColor() {
        let status = this.application.status;
         if (status === 'Yet to reply') {
           return 'bg-warning';
         } else if (status === 'Rejected/Filled') {
           return 'bg-danger';
         } else if (status === 'Get Back to you') {
           return 'bg-primary';
         }
         return 'bg-success'
      }
   }
}
</script>

<style>
   .status_badge{
      display: inline-block;
      min-width: 0;
      padding: 0px 4px;
      line-height: 0.8;
      color: #fff;
      border-radius: 10px;
      vertical-align: middle;
      margin-top: 4px;
      cursor: pointer;
   }
   .bg-danger{
     background-color: #ce2c2c
   }
   .bg-success{
     background-color: #4e9a2e
   }
   .bg-warning{
     background-color: #efe04e
   }
</style>
