<template>
  <md-layout md-flex="80">
    <md-table-card class="block-fill">
      <md-toolbar>
        <h1 class="md-title">Applications</h1>
        <slot name="filter-list"></slot>
      </md-toolbar>
      <md-table>
        <md-table-header>
          <md-table-row>
            <md-table-head>Company Name</md-table-head>
            <md-table-head>Vacancy</md-table-head>
            <md-table-head>Type</md-table-head>
            <md-table-head>Medium</md-table-head>
            <md-table-head>Date Applied</md-table-head>
            <md-table-head>Status</md-table-head>
          </md-table-row>
        </md-table-header>
        <slot name="table-body">
        </slot>
      </md-table>
    </md-table-card>
  </md-layout>
</template>
<script>
export default {
  data(){
    return {
      filter : 'All',
      list : ['All', 'Pending', 'Yet to reply', 'Get Back to you']
    }
  },
  methods : {
    filterList(){
      this.$emit('filterBy', filter);
    }
  }
}
</script>
