<template>
<md-layout md-flex="50">
  <div class="block-fill">
    <md-toolbar class="pa-1 card-toolbar md-transparent">
      <md-avatar>
        <img src="../../assets/imgs/gb.png" :alt="application.status">
      </md-avatar>
      <h2 class="md-title" style="flex: 1">{{application.company}}</h2>
      <md-button class="md-icon-button">
        <md-icon>edit</md-icon>
      </md-button>
      <md-button class="md-icon-button">
        <md-icon>archive</md-icon>
      </md-button>
      <md-button class="md-icon-button">
        <md-icon>delete</md-icon>
      </md-button>
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
        <md-button class="md-icon-button">
          <md-icon>add</md-icon>
          <md-tooltip md-direction="bottom">Add a new flag</md-tooltip>
        </md-button>
      </header>
      <span class="tc block-fill pa md-body-1" v-show="flags.length === 0">No flags yet</span>
      <md-list class="md-dense">
        <md-list-item class="flag-check-item" v-for="(flag, index) in flags" :key="flag.id">
          <md-checkbox name="completedState" v-model="flag.completed" v-on:change="updateFlag(flag)"></md-checkbox>
          <span>
            {{flag.title}}
          </span>
          <md-button @click="deleteFlag(flag, index)" class="md-icon-button">
            <md-icon>delete</md-icon>
          </md-button>
        </md-list-item>
      </md-list>
    </section>
  </main>
</md-layout>
</template>

<script>
import axios from 'axios';
import base from '../helpers/urls.config';
import bus from '../helpers/bus';

export default {
  data() {
    return {
      flags : []
    }
  },
  props : {
      application : {
        type : Object,
        required : true
      }
  },
  methods : {
    updateFlag(flag) {
      flag.completed = !flag.completed
      axios.put(`${base.url}/flags/${flag.id}`, flag).then(success => {
        console.log('success')
      });
    },
    deleteFlag(flag, idx) {
      axios.delete(`${base.url}/flags/${flag.id}`).then(success => {
        this.flags.splice(idx, 1);
        this.$emit('flagDeleted', flag.id);
      });
    },
    changeFlags(flagData) {
      this.flags = flagData;
    }
  },
  created() {
    bus.$on('cardOpened', this.changeFlags)
  }
}
</script>

<style>
.flex{
  display: flex
}
.card-toolbar{
  border-bottom: 1px solid #eee
}
.app-content{
  padding-top: 1.5em
}
.flag-check-item .md-list-item-container{
  justify-content: flex-start;
}
</style>
