<template>


    <!-- profile info  -->
    <section id="profile-info">
      
      <b-row class="match-height"> 
        <!-- about suggested page and twitter feed -->
       <b-col md="8 mx-auto">
         <b-card class="blank-challenge set-time text-left">                   
             

                          <b-row class="match-height">
             <b-col md="12">
             <h3>Time Per Day</h3>
             <p>What time slot you want to save for this</p>   
               </b-col>  
   <b-col md="4">
<b-link :to="{name:'challengesettime'}" >
<b-card class="rules-loop health">
<b-card-text>
<h4>15 Minutes</h4>             
</b-card-text>
</b-card>        
</b-link>
</b-col>
<b-col md="4">
<b-link :to="{name:'challengesettime'}">
<b-card class="rules-loop health">
<b-card-text>
<h4>20 Minutes</h4>       
</b-card-text>
</b-card>   
</b-link>             
</b-col>
<b-col md="4">
<b-link :to="{name:'challengesettime'}"> 
<b-card class="rules-loop health">
<b-card-text>
<h4>30 Minutes</h4>         
</b-card-text>
</b-card>  
</b-link>      
</b-col>
<b-col md="4">
<b-link :to="{name:'challengesettime'}"> 
<b-card class="rules-loop health">
<b-card-text>
<h4>45 Minutes</h4>         
</b-card-text>
</b-card>  
</b-link>      
</b-col>
<b-col md="4">
<b-link :to="{name:'challengesettime'}"> 
<b-card class="rules-loop health">
<b-card-text>
<h4>1 Hours</h4>         
</b-card-text>
</b-card>  
</b-link>      
</b-col>
<b-col md="4">
<b-link :to="{name:'challengesettime'}"> 
<b-card class="rules-loop health">
<b-card-text>
<h4>90 Minutes</h4>              
</b-card-text>
</b-card>  
</b-link>      
</b-col>
<b-col md="4">
<b-link :to="{name:'challengesettime'}"> 
<b-card class="rules-loop health">
<b-card-text>
<h4>2 Hours</h4>         
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


