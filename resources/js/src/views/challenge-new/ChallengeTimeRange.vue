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
             <p>What time slot you want to save for this</p>   
               </b-col>  
   <b-col md="4">
       <b-link :to="{name:'challengeduration'}" >
               <b-card class="rules-loop health">
   
        <b-card-text>
          <h4>Early morning</h4>         
      3 am to 6 am
        </b-card-text>

        </b-card>        
        </b-link>
           </b-col>
                 <b-col md="4">
                     <b-link :to="{name:'challengeduration'}">
               <b-card class="rules-loop health">
        <b-card-text>
          <h4>Morning</h4>       
     9 am to 12 pm
        </b-card-text>
        </b-card>   
        </b-link>             
           </b-col>
<b-col md="4">
<b-link :to="{name:'challengeduration'}"> 
<b-card class="rules-loop health">
<b-card-text>
<h4>Afternoon</h4>         
12 pm to 3 pm
</b-card-text>
</b-card>  
</b-link>      
</b-col>
<b-col md="4">
<b-link :to="{name:'challengeduration'}"> 
<b-card class="rules-loop health">
<b-card-text>
<h4>Late afternoon</h4>         
3 pm to 6 pm
</b-card-text>
</b-card>  
</b-link>      
</b-col>
<b-col md="4">
<b-link :to="{name:'challengeduration'}"> 
<b-card class="rules-loop health">
<b-card-text>
<h4>Evening</h4>         
6 pm to 9 pm
</b-card-text>
</b-card>  
</b-link>      
</b-col>
<b-col md="4">
<b-link :to="{name:'challengeduration'}"> 
<b-card class="rules-loop health">
<b-card-text>
<h4>Late evening</h4>         
9 pm to 12 am
</b-card-text>
</b-card>  
</b-link>      
</b-col>
<b-col md="4">
<b-link :to="{name:'challengeduration'}"> 
<b-card class="rules-loop health">
<b-card-text>
<h4>Late night</h4>         
12 am to 3 am
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


