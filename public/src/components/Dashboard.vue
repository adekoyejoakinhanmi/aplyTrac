<template>
  <div>
   <div :class="['row', 'mb-1', formState ? 'hidden' : '']">
       <form>
            <div class="col-md-4 mb-1">
                <label for="Company Name">Company Name</label>
                <input class="form-control" v-model="newApp.companyName" type="text" name="Company Name" placeholder="Company Name">
            </div>
            <div class="col-md-4 mb-1">
               <label for="Job Vacancy">Job Vacancy</label>
               <select class="form-control" v-model="newApp.jobVacancy" type="text" name="Job Vacancy">
                  <option value="Web Developer">Web Developer</option>
                  <option value="Fron End Developer">Front End Developer</option>
                  <option value="JavaScript Developer">JavaScript Developer</option>
                  <option value="Full Stack Developer">Full Stack Developer</option>
                  <option value="Other">Other</option>
               </select>
            </div>
            <div class="col-md-4 mb-1">
                  <label for="Job Type">Job Type</label>
                  <select class="form-control" v-model="newApp.jobType" type="text" name="Job Type">
                     <option value="Remote">Remote / Telecommute</option>
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
                     <option value="yetToReply">Yet to reply</option>
                     <option value="pending">Pending</option>
                     <option value="getBack">Get Back to you</option>
                     <option value="rejected">Rejected/Filled</option>
                  </select>
            </div>
            <div class="col-md-4 mb-1">
                  <label for="Date Applied">Application Date</label>
                  <input class="form-control" v-model="applicationDate" name="Date Applied" type="date">
            </div>
            <div class="pull-right">
               <button id="cancelNewApplication" class="btn btn-default" type="reset">Cancel</button>
               <button class="btn btn-success" type="submit">Add</button>
            </div>
      </form>
    </div>

     <header class="row mb-1">
     <div class="col-md-9 col-sm-6 col-xs-6">
      <h2>All Jobs for {{user}}</h2>
     </div>
     <div class="col-md-3 col-sm-6 col-xs-6 clearfix">
      <button @click="toggleFormState" id="addNewApplication" class="pull-right btn btn-success">
         Add New <i class="glyphicon glyphicon-plus"></i>
      </button>
     </div>
   </header>
   
    

    <div class="row">
      
      
      <application :key="application.id"
                   :application="application"
                   v-for="application in applications"
      ></application>
      

    </div>
  </div>
</template>

<script>
import axios from 'axios';
import application from '../reusable/application.vue';
import newApplication from '../reusable/newApplication.vue';

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
         formState : true,
         applications : [{
              "id" : "4576546d6ere165e4d7",
              "companyName" : "Dply",
              "jobType" : "Remote",
              "jobVacancy" : "Front End Developer",
              "applicationMedium" : "Email",
              "applicationStatus" : "YTR", 
              "applicationDate" : "2017-09-14"
            },{
              "id" : "4576546a4we4q75er2",
              "companyName" : "Gridium",
              "jobType" : "Remote",
              "jobVacancy" : "Front End Developer",
              "applicationMedium" : "Remotee",
              "applicationStatus" : "Closed", 
              "applicationDate" : "2017-09-15"
            },{
              "id" : "12321214557sd4587g",
              "companyName" : "Employeed",
              "jobType" : "On Site",
              "jobVacancy" : "JavaScript Developer",
              "applicationMedium" : "Email",
              "applicationStatus" : "YTR", 
              "applicationDate" : "2017-09-17"
            }]
      }
   },
   methods : {
     getApplications() {
       axios.get('/api/applications').then(response => {
         this.applications = response.data.results;
       }).catch(err => {
         console.log(err);
       });
     },
     addNew(data) {
       this.applications.push(data)
     },
     toggleFormState(){
       this.formState = !this.formState;
       return true; 
     }
   },
   mounted() {
     //this.getApplications();
   },
   components : {
     'application' : application,
     'new_application' : newApplication
   }
}
</script>

<style>

</style>
