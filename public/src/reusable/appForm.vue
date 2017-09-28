<template>
      <div :class="['row', 'mb-1', formVisible ? '' : 'hidden']">
       <form>
             <div class="field-group">
                  <div>
                  <label for="Company Name">Company Name</label>
                  <input class="form-control" v-model="newApp.company" type="text" name="Company Name" placeholder="Company Name">
                  </div>
            
                  <md-input-container>
                   <label for="Job Vacancy">Job Vacancy</label>
                  <md-select v-model="newApp.vacancy" id="jobVacancy" name="Job Vacancy">
                        <md-option value="Web Developer">Web Developer</md-option>
                        <md-option value="Fron End Developer">Front End Developer</md-option>
                        <md-option value="JavaScript Developer">JavaScript Developer</md-option>
                        <md-option value="Full Stack Developer">Full Stack Developer</md-option>
                        <md-option value="Other">Other</md-option>
                  </md-select>
                  </md-input-container>
           
            <div class="col-md-2 mb-1 col-md-6">
                  <label for="Job Type">Job Type</label>
                  <select class="form-control" v-model="newApp.type"  name="Job Type">
                     <option value="Remote / Telecommute">Remote / Telecommute</option>
                     <option value="On Site">On Site</option>
                  </select>
            </div>
            <div class="col-md-2 mb-1 col-md-6">
                  <label for="Application Medium">Application Medium</label>
                  <select class="form-control" v-model="newApp.medium" name="Application Medium">
                     <option value="Email">Email</option>
                     <option value="Remotee">Remotee</option>
                     <option value="Workable">Workable</option>
                     <option value="Lever.co">Lever.co</option>
                     <option value="Other">Other</option>
                  </select>
            </div>
            <div class="col-md-2 mb-1 col-md-6">
                  <label for="Application Status">Application Status</label>
                  <select class="form-control" v-model="newApp.status" name="Application Status">
                     <option value="Yet to reply">Yet to reply</option>
                     <option value="Pending">Pending</option>
                     <option value="Get Back to you">Get Back to you</option>
                     <option value="Rejected/Filled">Rejected/Filled</option>
                  </select>
            </div>
            <div class="col-md-2 mb-1 col-md-6">
                  <label for="Date Applied">Application Date</label>
                  <input class="form-control" v-model="newApp.date" name="Date Applied" type="date">
            </div>
            <div class="pull-right">
               <button id="cancelNewApplication" class="btn btn-default" type="reset" @click="closeForm">Cancel</button>
               <button class="btn btn-success" type="button" @click="addNew" :disabled="formValid">Add</button>
            </div>
             </div>
      </form>
    </div>
</template>

<script>
import uniqid from 'uniqid';
import axios from 'axios';
import base from '../helpers/urls.config';

export default {
      props : ['formVisible'],
      data() {
            return {
                  newApp : {
                        company : '',
                        vacancy : 'Web Developer',
                        type : 'Remote / Telecommute',
                        medium : 'Email',
                        status : 'Yet to reply',
                        date : ''
                  }
            }
      },
      methods : {
            addNew() {
                  let _id = `${Math.floor(Math.random() * 10)}${uniqid()}${uniqid()}${uniqid()}`;

                  let data = {
                        id : _id.substring(0,19),
                        company : this.newApp.company,
                        vacancy : this.newApp.vacancy,
                        type : this.newApp.type,
                        medium : this.newApp.medium,
                        status : this.newApp.status,
                        date : this.newApp.date
                  }
                  axios.post(`${base.url}/applications`, data).then(success => {
                        this.$emit('newApp', data);
                  }).catch(err => {
                        console.log(err);
                  });
            },
            closeForm() {
                  this.$emit('formClosed');
            }
      },
      computed : {
            formValid() {
                  return !this.newApp.company && !this.newApp.date;
            }
      }
}
</script>

<style>

</style>
