<template>
<md-layout :class="[formVisible ? '' : 'hidden', 'mt-1']" md-flex="60">
      <md-whiteframe>
            <form>
                  <div class="field-set">
                        <md-input-container>
                              <label for="Company Name">Company Name</label>
                              <md-input v-model="newApp.company" type="text" name="Company Name" placeholder="Company Name">
                              </md-input>
                        </md-input-container>

                        <md-input-container>
                              <label for="Job Vacancy">Job Vacancy</label>
                              <md-select v-model="newApp.vacancy" id="jobVacancy" name="Job Vacancy">
                                    <md-option value="Web Developer">Web Developer</md-option>
                                    <md-option value="Fron End Developer">Front End Developer</md-option>
                                    <md-option value="JavaScript Developer">JavaScript Developer</md-option>
                                    <md-option value="Full Stack Developer">Full Stack Developer</md-option>
                                    <md-option> value="Other">Other</md-option>
                              </md-select>
                        </md-input-container>

                        <md-input-container>
                              <label for="Job Type">Job Type</label>
                              <md-select v-model="newApp.type" name="Job Type">
                                    <md-option value="Remote / Telecommute">Remote / Telecommute</md-option>
                                    <md-option value="On Site">On Site</md-option>
                              </md-select>
                        </md-input-container>

                        <md-input-container>
                              <label for="Application Medium">Application Medium</label>
                              <md-select v-model="newApp.medium" name="Application Medium">
                                    <md-option value="Email">Email</md-option>
                                    <md-option value="Remotee">Remotee</md-option>
                                    <md-option value="Workable">Workable</md-option>
                                    <md-option value="Lever.co">Lever.co</md-option>
                                    <md-option value="Other">Other</md-option>
                              </md-select>
                        </md-input-container>

                        <md-input-container>
                              <label for="Application Status">Application Status</label>
                              <md-select v-model="newApp.status" name="Application Status">
                                    <md-option value="Yet to reply">Yet to reply</md-option>
                                    <md-option value="Pending">Pending</md-option>
                                    <md-option value="Get Back to you">Get Back to you</md-option>
                                    <md-option value="Rejected/Filled">Rejected/Filled</md-option>
                              </md-select>
                        </md-input-container>

                        <md-input-container>
                              <label for="Date Applied">Application Date</label>
                              <md-input v-model="newApp.date" name="Date Applied" type="date"></md-input>
                        </md-input-container>
                  </div>

                  <div class="buttons-holder">
                        <md-button id="cancelNewApplication" class="md-dense" type="reset" @click="closeForm">Cancel</md-button>
                        <md-button class="md-primary" type="button" @click="addNew" :disabled="formValid">Add</md-button>
                  </div>
            </form>
      </md-whiteframe>
</md-layout>
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
form{
      padding: 10px 10px 10px 15px;
}
.field-set{
      display: flex;
      flex-wrap: wrap;
      flex-direction: row
}
.md-input-container{
      max-width: 32.5%;
      margin-right: 5px
}
.md-input-container:last-child{
      margin-right: 0
}
.buttons-holder{
      display: flex;
      justify-content: flex-end;
}
</style>
