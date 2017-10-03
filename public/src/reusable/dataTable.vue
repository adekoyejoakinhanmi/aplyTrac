<template>
<md-layout class="pa">
  <md-layout md-align="center">
    <md-table>
      <md-table-header>
        <md-table-row>
          <md-table-head>Company Name</md-table-head>
          <md-table-head>Vacancy</md-table-head>
          <md-table-head>Type</md-table-head>
          <md-table-head>Medium</md-table-head>
          <md-table-head>Status</md-table-head>
          <md-table-head>Date Applied</md-table-head>
        </md-table-row>
      </md-table-header>
      <slot name="table-body">
      </slot>
    </md-table>
  </md-layout>
</md-layout>
</template>