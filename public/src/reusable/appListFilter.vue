<template>
<md-menu md-direction="bottom left" md-size="3">
   <md-button class="md-icon-button" md-menu-trigger>
      <md-icon>filter_list</md-icon>
   </md-button>

   <md-menu-content>
      <md-menu-item>
         <span>All</span>
         <md-icon class="filter-icon">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
               <circle cx="100" cy="100" r="100" />
            </svg>
         </md-icon>
      </md-menu-item>

      <md-menu-item @click="setFilter('Yet to reply')">
         <span>Yet to reply</span>
         <md-icon class="filter-icon">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
               <circle cx="100" cy="100" r="100" class="ytr" />
            </svg>
         </md-icon>
      </md-menu-item>

       <md-menu-item @click="setFilter('Get Back to you')">
         <span>Get Back</span>
         <md-icon class="filter-icon">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
               <circle cx="100" cy="100" r="100" class="getback" />
            </svg>
         </md-icon>
      </md-menu-item>

       <md-menu-item @click="setFilter('Interview')">
         <span>Interview</span>
         <md-icon class="filter-icon">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
               <circle cx="100" cy="100" r="100" class="interview" />
            </svg>
         </md-icon>
      </md-menu-item>

       <md-menu-item @click="setFilter('Rejected')">
         <span>Rejected</span>
         <md-icon class="filter-icon">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
               <circle cx="100" cy="100" r="100" class="rejected" />
            </svg>
         </md-icon>
      </md-menu-item>
   </md-menu-content>
</md-menu>
</template>

<script>
export default {
   methods : {
      setFilter(filter) {
         this.$emit('filterChanged', filter);
      }
   }
}
</script>

<style>
.md-icon.filter-icon{
   width: 18px;
   height: 18px;
   min-width: 18px;
   min-height: 18px
}
</style>
