<template>


    <!-- profile info  -->
    <section id="profile-info">
      
      <b-row class="match-height"> 
        <!-- about suggested page and twitter feed -->
       <b-col md="8 mx-auto">
         <b-card class="blank-challenge set-time text-left">                   
             

                          <b-row class="match-height">
             <b-col md="12">
             <h3>Set Time</h3>
             <p>Set the srtart & end time of  the challenge</p>   
               </b-col>  



<b-col md="8" class="set-time">
<ul>
<li>From <span>7:00 AM</span></li>
<li>To <span>7:20 AM</span></li>
</ul>  
<b-card-text class="mt-2">This time range  is based on your previous selection “20 minutes” in “morning”.</b-card-text>
 <b-button  variant="primary" :to="{name:'challengesettings'}" >Continue</b-button>
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


