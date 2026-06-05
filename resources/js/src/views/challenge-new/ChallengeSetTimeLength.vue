<template>


    <!-- profile info  -->
    <section id="profile-info">
      
      <b-row class="match-height"> 
        <!-- about suggested page and twitter feed -->
       <b-col md="8 mx-auto">
         <b-card class="blank-challenge set-time text-left">                   
             

                          <b-row class="match-height">
             <b-col md="12">
             <h3>Set Time Length</h3>
             <p>Some challenges like Quit Smoking runs all day and to make it handy for uses we count  a day not as 24 hours perhaps a time range of active day time</p>   
               </b-col>  
   <b-col md="4">
       <b-link :to="{name:'challengetimerangeselector'}" >
               <b-card class="rules-loop health">
   
        <b-card-text>
          <h4>9 Hours</h4>         
      Select 9 hours No Smoking challenge per day
        </b-card-text>

        </b-card>        
        </b-link>
           </b-col>
                 <b-col md="4">
                     <b-link :to="{name:'challengetimerangeselector'}">
               <b-card class="rules-loop health">
        <b-card-text>
          <h4>12 Hours</h4>       
         Select 12 hours No Smoking challenge per day
        </b-card-text>
        </b-card>   
        </b-link>             
           </b-col>
<b-col md="4">
<b-link :to="{name:'challengetimerangeselector'}"> 
<b-card class="rules-loop health">
        <b-card-text>
          <h4>15 Hours</h4>         
         Select 15 hours No Smoking challenge per day
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


