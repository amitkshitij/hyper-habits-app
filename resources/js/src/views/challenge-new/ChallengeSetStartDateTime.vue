<template>


    <!-- profile info  -->
    <section id="profile-info">
      
      <b-row class="match-height"> 
        <!-- about suggested page and twitter feed -->
       <b-col md="8 mx-auto">
         <b-card class="blank-challenge set-time text-left">                   
             

                          <b-row class="match-height">
             <b-col md="12">
             <h3>Set Start Date & Time</h3>
             <p>Taking challenges to build great habits is not easy.
it requires courage & decipiline to bring the change.
Select a suitable challenge start date & time</p>   
               </b-col>  
   <b-col md="4">
       <b-link :to="{name:'settimelength'}" >
               <b-card class="rules-loop health">
   
        <b-card-text>
          <h4>From Today</h4>         
       Monday, 19 Dec - 7:20 AM
        </b-card-text>

        </b-card>        
        </b-link>
           </b-col>
                 <b-col md="4">
                     <b-link :to="{name:'settimelength'}">
               <b-card class="rules-loop health">
        <b-card-text>
          <h4>From Tomorrow</h4>       
         Tuesday, 20 Dec 2021
        </b-card-text>
        </b-card>   
        </b-link>             
           </b-col>
<b-col md="4">
<b-link :to="{name:'settimelength'}"> 
<b-card class="rules-loop health">
        <b-card-text>
          <h4>Custom</h4>         
          Set Custom Challenge Start Date & Time
        </b-card-text>
 
        </b-card>  
        </b-link>      
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


