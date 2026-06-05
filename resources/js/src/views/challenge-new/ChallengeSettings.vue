<template>


    <!-- profile info  -->
    <section id="profile-info">
      
      <b-row class="match-height"> 
        <!-- about suggested page and twitter feed -->
       <b-col md="8 mx-auto">
         <b-card class="blank-challenge set-time text-left">                   
<b-row class="match-height">
<b-col md="12">
<h3>Challenge Settings</h3>             
<div class="ch-reminder mt-3">
<h4>Challenge Reminder</h4>    
<p>Select a challenge reminder time</p>
<ul>
<li><a href="#">1 Min Before</a></li>    
<li><a href="#">10 Mins Before</a></li>    
<li><a href="#">20 Min  Before</a></li>    
<li><a href="#">30 Mins Before</a></li>    
</ul>
<b-card-text><feather-icon icon="InfoIcon" /> Default notifications time is 10 minutes before below the task</b-card-text>
</div>

<div class="ch-reminder mt-3">
<h4>Challenge Log Reminder</h4>    
<p><feather-icon icon="InfoIcon" /> Select when you want to receive challenge log notifications after daily task completion</p>
<ul>
<li><a href="#">After 1 Min</a></li>    
<li><a href="#">After 10 Mins</a></li>    
<li><a href="#">After 20 Mins</a></li>    
<li><a href="#">After 30 Mins</a></li>    
</ul>
<b-card-text>Default notifications time is 10 minutes </b-card-text>
</div>

<div class="ch-reminder mt-3">
<h4>Set Log Time Window</h4>    
<p>Select a time within you can enter daily log</p>
<ul>
<li><a href="#">Within 30 Mins</a></li>    
<li><a href="#">Within 1 Hr</a></li>    
<li><a href="#">Within 2 Hrs</a></li>    
<li><a href="#">Within 3 Hrs</a></li>    
</ul>
<b-card-text><feather-icon icon="InfoIcon" /> 2 hours is default log window unless you update also note that your challenge would be failed in case you don’t log within the give timeline.</b-card-text>
</div>

<div class="ch-reminder mt-3">
 <b-button variant="primary"  :to="{name:'challengecongrats'}"  >Finish</b-button>
</div>
</b-col>  
</b-row>                 
</b-card> 
</b-col>
<!--/ about suggested page and twitter feed -->
<!--/ latest photos suggestion and polls -->        
<!--/ load more  -->
</b-row>
</section>
    <!--/ profile info  -->

</template>

<script>
import { BRow, BCol, BCardText, BFormInput, BFormGroup, BButton, BImg, BAvatar, BCard, BInputGroup, BInputGroupPrepend, BSpinner, BLink, } from 'bootstrap-vue'


/* eslint-disable global-require */
export default {
  components: {
    BRow,
    BCol,
    BCardText,
    BButton,
    BImg,
    BAvatar,
    BCard,
    BFormInput, 
    BFormGroup,
    BInputGroup, 
    BInputGroupPrepend,
    BSpinner,
    BLink,    
    
    
    
  },
}
/* eslint-disable global-require */
</script>


