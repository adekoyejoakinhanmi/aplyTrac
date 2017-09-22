<template>
  <div>
    <div :class="['row', 'mb-1', formVisible ? '' : 'hidden']">
       <form>
            <div class="col-md-4 mb-1">
                <label for="Company Name">Company Name</label>
                <input class="form-control" v-model="newApp.companyName" type="text" name="Company Name" placeholder="Company Name">
            </div>
            <div class="col-md-4 mb-1">
               <label for="Job Vacancy">Job Vacancy</label>
               <select class="form-control" v-model="newApp.jobVacancy" name="Job Vacancy">
                  <option value="Web Developer">Web Developer</option>
                  <option value="Fron End Developer">Front End Developer</option>
                  <option value="JavaScript Developer">JavaScript Developer</option>
                  <option value="Full Stack Developer">Full Stack Developer</option>
                  <option value="Other">Other</option>
               </select>
            </div>
            <div class="col-md-4 mb-1">
                  <label for="Job Type">Job Type</label>
                  <select class="form-control" v-model="newApp.jobType"  name="Job Type">
                     <option value="Remote / Telecommute">Remote / Telecommute</option>
                     <option value="On Site">On Site</option>
                  </select>
            </div>
            <div class="col-md-4 mb-1">
                  <label for="Application Medium">Application Medium</label>
                  <select class="form-control" v-model="newApp.applicationMedium" name="Application Medium">
                     <option value="Email">Email</option>
                     <option value="Remotee">Remotee</option>
                     <option value="Workable">Workable</option>
                     <option value="Lever.co">Lever.co</option>
                     <option value="Other">Other</option>
                  </select>
            </div>
            <div class="col-md-4 mb-1">
                  <label for="Application Status">Application Status</label>
                  <select class="form-control" v-model="newApp.applicationStatus" name="Application Status">
                     <option value="Yet to reply">Yet to reply</option>
                     <option value="Pending">Pending</option>
                     <option value="Get Back to you">Get Back to you</option>
                     <option value="Rejected/Filled">Rejected/Filled</option>
                  </select>
            </div>
            <div class="col-md-4 mb-1">
                  <label for="Date Applied">Application Date</label>
                  <input class="form-control" v-model="newApp.applicationDate" name="Date Applied" type="date">
            </div>
            <div class="pull-right">
               <button id="cancelNewApplication" class="btn btn-default" type="reset">Cancel</button>
               <button class="btn btn-success" type="button" @click="addNew" :disabled="formValid">Add</button>
            </div>
      </form>
    </div>

     <header class="row mb-1">
      <div class="col-md-9 col-sm-6 col-xs-6">
        <h2>All Jobs for {{user}}</h2>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-6 clearfix">
        <button @click="toggleFormVisiblity" id="addNewApplication" class="pull-right btn btn-success">
         Add New <i class="glyphicon glyphicon-plus"></i>
        </button>
      </div>
      </header>
   
    

    <div class="row">
      
      
      <application :key="application.id"
                   :application="application"
                   v-for="(application, index) in applications"
      ></application>
      

    </div>
  </div>
</template>

<script>
import axios from 'axios';
import application from '../reusable/application.vue';
import base from '../helpers/urls.config';
import uniqid from 'uniqid';

export default {
   data(){
      return {
         user : "Adekoyejo",
         newApp : {
            companyName : '',
            jobVacancy : 'Web Developer',
            jobType : 'Remote / Telecommute',
            applicationMedium : 'Email',
            applicationStatus : 'Yet to reply',
            applicationDate : ''
         },
         formVisible : false,
         applications : []
      }
   },
   methods : {
     getApplications() {
       axios.get(`${base.url}/applications`).then((response) => {
         this.applications = response.data;
       }).catch(err => {
         console.log(err);
       });
     },
     addNew() {
       let id = `${Math.floor(Math.random() * 10)}${uniqid()}${uniqid()}${uniqid()}`;

       let data = {
         id : id.substring(0,19),
         companyName : this.newApp.companyName,
         jobVacancy : this.newApp.jobVacancy,
         jobType : this.newApp.jobType,
         applicationMedium : this.newApp.applicationMedium,
         applicationStatus : this.newApp.applicationStatus,
         applicationDate : this.newApp.applicationDate
       }
       axios.post(`${base.url}/applications`, data).then(success => {
         this.applications.unshift(data);
       }).catch(err => {
         console.log(err);
       });
       this.newApp.companyName = '';
     },
     toggleFormVisiblity(){
       this.formVisible = !this.formVisible;
       return true; 
     }
   },
   computed : {
     formValid() {
       return !this.newApp.companyName && !this.newApp.applicationDate;
     }
   },
   mounted() {
     this.getApplications();
   },
   components : {
     'application' : application
   }
}
</script>

<style>

</style>