<template>
 <md-layout md-flex="25">
    <md-card class="block-fill mb-2">
       <md-card-area>
        <md-card-header>
           <md-avatar class="md-large">
              <img src="../../assets/imgs/gb.png" :alt="application.status">
           </md-avatar>
          <md-card-header-text>
             <div class="md-title">{{application.company}}</div>
             <div class="md-subhead">{{application.vacancy}}</div>
          </md-card-header-text>
        </md-card-header>
        <md-card-content>
          Medium : {{application.medium}} <br>
          Type : {{application.type}} <br>
          Date : {{application.date}}
        </md-card-content>
       </md-card-area>
        <md-card-actions>
          <md-button class="md-icon-button">
             <md-icon>edit</md-icon>
          </md-button>
          <md-button class="md-icon-button">
             <md-icon>archive</md-icon>
          </md-button>
          <md-button class="md-icon-button">
             <md-icon>delete</md-icon>
          </md-button>
        </md-card-actions>
        </md-card>
   </md-layout> 
</template>

<script>
export default {
   props : {
      application : Object,
      required : true
   }
}
</script>

<style>

</style>
