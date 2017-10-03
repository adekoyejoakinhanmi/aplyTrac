<template>
<md-layout class="pa" md-align="center" md-gutter>
      <md-layout class="mt-2" md-flex="40">
            <md-whiteframe class="block-fill">
                  <md-toolbar class="md-transparent">
                        <h1 class="md-title">Add New Application</h1>
                  </md-toolbar>
                  <form class="field-set">
                              <md-input-container>
                                    <label for="Company Name">Company Name</label>
                                    <md-input v-model="newApp.company" type="text" name="Company Name" placeholder="Company Name">
                                    </md-input>
                              </md-input-container>

                              <md-input-container>
                                    <label for="Job Vacancy">Job Vacancy</label>
                                    <md-autocomplete v-model="newApp.vacancy"
                                                     :list="vacancies"
                                                     :filter-list="appFilter"
                                                     print-attribute="title"
                                                     :min-chars="0"
                                                     :max-height="6"
                                                     :debounce="500">
                                    </md-autocomplete>
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
                                    <md-autocomplete v-model="newApp.medium"
                                                     :list="medium"
                                                     :filter-list="appFilter"
                                                     print-attribute="title"
                                                     :min-chars="0"
                                                     :max-height="3"
                                                     :debounce="500">
                                    </md-autocomplete>
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
</md-layout>
</template>

<script>
import uniqid from 'uniqid';
import axios from 'axios';
import base from '../helpers/urls.config';

export default {
      data() {
            return {
                  newApp : {
                        company : '',
                        vacancy : '',
                        type : 'Remote / Telecommute',
                        medium : '',
                        date : '',
                        status : 'Yet to reply'
                  },
                  vacancies : [
                        {title : 'Web Developer'}, 
                        {title : 'Teacher'}, 
                        {title : 'Content Developer'},
                        {title : 'Front End Developer'}, 
                        {title : 'JavaScript Developer'},
                        {title : 'Copy Writer'},
                        {title : 'Misc Teacher'},
                        {title : 'Full Stack Developer'},
                        {title : 'Wordpress Developer'}
                  ],
                  medium : [
                        {title : 'Email'},
                        {title : 'Paper'},
                        {title : 'Workable'},
                        {title : 'Lever.co'},
                        {title : 'Remotee'}
                  ]
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
                        date : this.newApp.date,
                        status : this.newApp.status                        
                  }
                  axios.post(`${base.url}/applications`, data).then(success => {
                        this.$emit('newApp', data);
                  }).catch(err => {
                        console.log(err);
                  });
            },
            closeForm() {
                  this.$emit('formClosed');
            },
            appFilter(list, query) {
                  let arr = [];
                  for (var i = 0; i < list.length; i++) {
                        if (list[i].title.indexOf(query) !== -1) {
                              arr.push(list[i]);
                              if (arr.length > 5) break;
                        }
                  }
                  return arr;
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
