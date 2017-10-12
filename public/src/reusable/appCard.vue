<template>
<md-layout md-flex="50">
  <div class="block-fill">
    <md-toolbar class="pa-1 card-toolbar md-transparent">
      <md-avatar>
        <img src="../../assets/imgs/gb.png" :alt="application.status">
      </md-avatar>
      <h2 class="md-title" style="flex: 1">{{application.company}}</h2>
      <app-options :application="application"></app-options>
    </md-toolbar>
  </div>
  <main class="pa-1 app-content block-fill">
    <section>
      <header class="md-body-2">Details</header>
      <md-list class="md-dense">
        <md-list-item>
          <md-icon></md-icon> <span>{{application.vacancy}}</span>
        </md-list-item>

        <md-list-item>
          <md-icon></md-icon> <span>{{application.type}}</span>
        </md-list-item>

        <md-list-item>
          <md-icon></md-icon> <span>{{application.medium}}</span>
        </md-list-item>

        <md-list-item>
          <md-icon></md-icon> <span>{{application.date}}</span>
          <md-divider class="md-inset"></md-divider>
        </md-list-item>
      </md-list>
    </section>
    <section>
      <header class="flex">
        <span class="md-body-2" style="flex: 1">Flags</span>
        <md-button class="md-icon-button" @click="addNewFlag">
          <md-icon>add</md-icon>
          <md-tooltip md-direction="bottom">Add a new flag</md-tooltip>
        </md-button>
      </header>
      <span class="tc block-fill pa md-body-1" v-show="flags.length === 0">No flags yet</span>
      <md-list class="md-dense">
        <md-list-item class="flag-check-item" v-for="(flag, index) in flags" :key="flag.id">
          <md-checkbox name="completedState" v-model="flag.completed" v-on:change="updateFlag(flag)"></md-checkbox>
          <span style="flex: 1">
            {{flag.title}}
          </span>
          <md-button @click="deleteFlag(flag, index)" class="md-icon-button">
            <md-icon>delete</md-icon>
          </md-button>
        </md-list-item>
      </md-list>
      <flag-input v-show="addingNewFlag" v-on:inputClosed="addNewFlag"></flag-input>
    </section>
  </main>
</md-layout>
</template>

<script>
import axios from 'axios';
import uniqid from 'uniqid';
import bus from '../helpers/bus';

import flagInput from '../reusable/flagInput.vue';
import appOptions from './appOptions.vue';

export default {
  data() {
    return {
      flags : [],
      addingNewFlag : false
    }
  },
  props : {
      application : {
        type : Object,
        required : true
      }
  },
  methods : {
    deleteApp() {
      //axios.delete(`/applications/${}`)
      this.$emit('appDeleted')
    },
    updateFlag(flag) {
      flag.completed = !flag.completed
      axios.put(`/flags/${flag.id}`, flag).then(success => {
        console.log('success')
      });
    },
    deleteFlag(flag, idx) {
      axios.delete(`/flags/${flag.id}`).then(success => {
        this.flags.splice(idx, 1);
        this.$emit('flagDeleted', flag.id);
      });
    },
    changeFlags(flagData) {
      this.flags = flagData;
    },
    addNewFlag() {
      this.addingNewFlag = !this.addingNewFlag
    },
    addFlag(flagContent) {
      let data = {
        id : uniqid(),
        applicationId : this.application.id,
        title : flagContent,
        completed : false
      }
      axios.post(`/flags/`, data).then(success => {
        console.log('success')
        this.flags.push(data);
        this.$emit('newFlagCreated', data);
      });
      this.addNewFlag();
    }
  },
  created() {
    bus.$on('cardOpened', this.changeFlags);
    bus.$on('flagCreated', this.addFlag)
  },
  components : {
    flagInput,
    appOptions
  }
}
</script>

<style>
.card-toolbar{
  border-bottom: 1px solid #eee
}
.app-content{
  padding-top: 1.5em
}
.flag-check-item .md-list-item-container{
  justify-content: flex-start;
  padding: 0
}
</style>
