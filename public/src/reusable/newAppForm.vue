<template>
   <md-whiteframe class="block-fill full-on-small">
      <md-dialog-title>Add New Application</md-dialog-title>
      <md-dialog-content>
         <form>
            <md-input-container>
               <label for="Company Name">Company Name</label>
               <md-input v-model="app.company" type="text" name="Company Name" placeholder="Company Name">
               </md-input>
            </md-input-container>

            <md-input-container>
               <label for="Job Vacancy">Job Vacancy</label>
               <md-autocomplete v-model="app.vacancy" :list="vacancies" :filter-list="appFilter" print-attribute="title" :min-chars="0"
                  :max-height="6" :debounce="500">
               </md-autocomplete>
            </md-input-container>

            <md-input-container>
               <label for="Job Type">Job Type</label>
               <md-select v-model="app.type" name="Job Type">
                  <md-option value="Remote / Telecommute">Remote / Telecommute</md-option>
                  <md-option value="On Site">On Site</md-option>
               </md-select>
            </md-input-container>

            <md-input-container>
               <label for="Application Medium">Application Medium</label>
               <md-autocomplete v-model="app.medium" :list="medium" :filter-list="appFilter" print-attribute="title" :min-chars="0" :max-height="3"
                  :debounce="500">
               </md-autocomplete>
            </md-input-container>

            <md-input-container>
               <label for="Application Status">Application Status</label>
               <md-select v-model="app.status" name="Application Status">
                  <md-option value="Yet to reply">Yet to reply</md-option>
                  <md-option value="Pending">Pending</md-option>
                  <md-option value="Get Back to you">Get Back to you</md-option>
                  <md-option value="Rejected/Filled">Rejected/Filled</md-option>
               </md-select>
            </md-input-container>

            <md-input-container>
               <label for="Date Applied">Application Date</label>
               <md-input v-model="app.date" name="Date Applied" type="date" required></md-input>
            </md-input-container>
            </div>
         </form>
      </md-dialog-content>
      <md-dialog-actions>
         <md-button class="md-dense" type="reset" @click="closeForm">Cancel</md-button>
         <md-button class="md-primary" type="submit" @click="addNew" :disabled="formValid">Add</md-button>
      </md-dialog-actions>
   </md-whiteframe>
</template>

<script>
import uniqid from 'uniqid';
import { appsRef } from '../../firebase';

export default {
data() {
      return {
         app: {
            company: '',
            vacancy: '',
            type: 'Remote / Telecommute',
            medium: '',
            date: '',
            status: 'Yet to reply'
         },
         vacancies: [{
               title: 'Web Developer'
            },
            {
               title: 'Teacher'
            },
            {
               title: 'Content Developer'
            },
            {
               title: 'Front End Developer'
            },
            {
               title: 'JavaScript Developer'
            },
            {
               title: 'Copy Writer'
            },
            {
               title: 'Misc Teacher'
            },
            {
               title: 'Full Stack Developer'
            },
            {
               title: 'Wordpress Developer'
            }
         ],
         medium: [{
               title: 'Email'
            },
            {
               title: 'Paper'
            },
            {
               title: 'Workable'
            },
            {
               title: 'Lever.co'
            },
            {
               title: 'Remotee'
            }
         ]
      }
   },
   methods: {
      addNew() {
         let _id = `${Math.floor(Math.random() * 10)}${uniqid()}${uniqid()}${uniqid()}`;

         let data = {
            id: _id.substring(0, 19),
            company: this.app.company,
            vacancy: this.app.vacancy,
            type: this.app.type,
            medium: this.app.medium,
            date: this.app.date,
            status: this.app.status,
            archived: false
         }
         appsRef.push(data);
         this.closeForm();
      },
      closeForm() {
         this.app = {
            company: '',
            vacancy: '',
            type: 'Remote / Telecommute',
            medium: '',
            date: '',
            status: 'Yet to reply'
         }
         this.$emit('formClosed');
      },
      validateDate(date) {
         var t = /^(?=.+([\/.-])..\1)(?=.{10}$)(?:(\d{4}).|)(\d\d).(\d\d)(?:.(\d{4})|)$/;
         date.replace(t, function ($, _, y, m, d, y2) {
            $ = new Date(y = y || y2, m, d);
            t = $.getFullYear() != y || $.getMonth() != m || $.getDate() != d;
         });
         return !t;
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
   computed: {
      formValid() {
         return (!this.app.company || 
                 !this.validateDate(this.app.date) || 
                 !this.app.vacancy || 
                 !this.app.medium);
      }
   }
}
</script>

<style>
@media screen and (max-width: 600px){
     .md-dialog-container.md-active .md-dialog{
           width: 100%;
           height: 100%;
           max-width: 100%;
           max-height: 100%;
           margin: auto;
     }
     .full-on-small{
           height: 100%;
     }
     .full-on-small .md-dialog-title.md-title{
          background: #eee;
          padding-bottom: 12px;
     }
}
.md-dialog-container.md-active .md-dialog{
      overflow: auto
}
</style>
