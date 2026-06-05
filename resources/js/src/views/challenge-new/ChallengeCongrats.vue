<template>


    <!-- profile info  -->
    <section id="profile-info">
      
      <b-row class="match-height"> 
        <!-- about suggested page and twitter feed -->
       <b-col md="8 mx-auto">      
         <b-card class="blank-challenge chellenge-detail">  
              <b-row>
           <b-col md="6 mx-auto">
          <b-avatar
        size="lg"
        :src="require('@/assets/images/challengepic/congrats.svg')"
      />
        <b-card-text>
          <h2>Congrats!</h2>
          <span>Your challenge has been successfully created</span>
          <h4>1st log is due in 17	hrs 23 mins</h4>         
        </b-card-text>
         <b-button class="mt-1" 
        variant="primary"
      >Okay, Got it</b-button>      
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
import { BRow, BCol, BCardText, BButton, BImg, BAvatar, BCard, BLink, } from 'bootstrap-vue'


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
    BLink,
    
    
  },
}
/* eslint-disable global-require */
</script>


