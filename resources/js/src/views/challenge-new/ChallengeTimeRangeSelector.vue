<template>


    <!-- profile info  -->
    <section id="profile-info">
      
      <b-row class="match-height"> 
        <!-- about suggested page and twitter feed -->
       <b-col md="8 mx-auto">
         <b-card class="blank-challenge set-time text-left">                   
             

                          <b-row class="match-height">
             <b-col md="12">
             <h3>Time Range</h3>
             <p>Select a time range  best suitable to  schedule</p>   
               </b-col>  
   <b-col md="4">
       <b-link :to="{name:'challengesettings'}" >
               <b-card class="rules-loop health">
   
        <b-card-text>
          <h4>8 am  to  5 pm</h4>         
      For 9 Hours
        </b-card-text>

        </b-card>        
        </b-link>
           </b-col>
                 <b-col md="4">
                     <b-link :to="{name:'challengesettings'}">
               <b-card class="rules-loop health">
        <b-card-text>
          <h4>9 am  to  6 pm</h4>       
         For 9 Hours
        </b-card-text>
        </b-card>   
        </b-link>             
           </b-col>
<b-col md="4">
<b-link :to="{name:'challengesettings'}"> 
<b-card class="rules-loop health">
        <b-card-text>
          <h4>10 am  to  7 pm</h4>         
        For 9 Hours
        </b-card-text>
 
        </b-card>  
        </b-link>      
           </b-col>
<b-col md="4" class="offset-md-4">
<b-link :to="{name:'challengesettings'}"> 
<b-card class="rules-loop health">
        <b-card-text>
          <h4>11 am  to  8 pm</h4>         
        For 9 Hours
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


