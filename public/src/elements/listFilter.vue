<template>
 <div class="">
   <span>Showing:</span>
   <md-select v-model="filter" @change="filterList">
   <md-option v-for="status in list"
   :key="status" :value="status">{{status}}</md-option>
   </md-select>
</div> 
</template>
