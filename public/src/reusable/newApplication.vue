<template>
      <form>
         <div class="col-md-4 mb-1">
            <label for="Company Name">Company Name</label>
            <input class="form-control" v-model="newApp.companyName" type="text" name="Company Name" placeholder="Company Name">
         </div>
         <div class="col-md-4 mb-1">
               <label for="Job Vacancy">Job Vacancy</label>
               <select class="form-control" v-model="newApp.jobVacancy" type="text" name="Job Vacancy" placeholder="Web Developer">
                  <option value="Web Developer">Web Developer</option>
                  <option value="Fron End Developer">Front End Developer</option>
                  <option value="JavaScript Developer">JavaScript Developer</option>
                  <option value="Full Stack Developer">Full Stack Developer</option>
                  <option value="Other">Other</option>
               </select>
            </div>
            <div class="col-md-4 mb-1">
                  <label for="Job Type">Job Type</label>
                  <select class="form-control" v-model="newApp.jobType" type="text" name="Job Type" placeholder="Remote">
                     <option value="Remote">Remote / Telecommute</option>
                     <option value="On Site">On Site</option>
                  </select>
            </div>
            <div class="col-md-4 mb-1">
                  <label for="Application Medium">Application Medium</label>
                  <select class="form-control" v-model="newApp.applicationMedium" name="Application Medium" placeholder="Email">
                     <option value="Email">Email</option>
                     <option value="Remotee">Remotee</option>
                     <option value="Workable">Workable</option>
                     <option value="Lever.co">Lever.co</option>
                     <option value="Other">Other</option>
                  </select>
            </div>
            <div class="col-md-4 mb-1">
                  <label for="Application Status">Application Status</label>
                  <select class="form-control" v-model="newApp.applicationStatus" name="Application Status" placeholder="Yet to reply">
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
</template>

<script>
export default {
   props : ['newApplication'],
   data() {
      return {
         newApp : {
            companyName : '',
            jobVacancy : '',
            jobType : '',
            applicationMedium : '',
            applicationStatus : '',
            applicationDate : ''
         }
      }
   }
}
</script>

<style>

</style>
