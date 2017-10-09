<template>
<md-list-item class="app-row has-ripple">
  <md-ink-ripple />
  <div class="click-wrapper" @click="showThisRow">
    <md-avatar><img src="../../assets/imgs/gb.png"></md-avatar>
    <div class="table">
      <div class="table-row">
        <div class="tcell col-3 md-body-2">{{application.company}}</div>
        <div class="tcell col-3 md-body-1 hide-on-small">{{application.vacancy}}</div>
        <div class="tcell col-1 md-body-1">{{application.date}}</div>
      </div>
    </div>
  </div>
  <app-options :application="application"></app-options>
</md-list-item>
</template>
<script>
import appOptions from './appOptions.vue';

export default {
  props : {
    application : {
      type : Object,
      required : true
    }
  },
  methods : {
    showThisRow() {
      this.$emit('rowClicked', this.application);
    }
  },
  components : {
    appOptions
  }
}
</script>
