<template>


    <!-- profile info  -->
    <section id="profile-info">
      
      <b-row class="match-height"> 
        <!-- about suggested page and twitter feed -->
       <b-col md="8 mx-auto">
         <b-card class="blank-challenge challengeuser rules">
             <h2>Challenge Rules</h2>
             <p>Please provide some text for here</p>
       
       <b-row class="match-height mt-2"> 
           <b-col md="4">
               <b-card class="rules-loop">
        <b-img        
        :src="require('@/assets/images/challengepic/rules-icon1.svg')"
        size="60"
      />

          <h3>Challenges not streaks</h3>
         <p>Complete 21/91 days challenge without any break</p>
        
        </b-card>
           </b-col>
                      <b-col md="4">
                           <b-card class="rules-loop"> 
<b-img
          size="60"
        :src="require('@/assets/images/challengepic/rules-icon2.svg')"
      />
       <h3>Take it serious</h3>
         <p>Complete a challenge in 3 attempts or wait for 60 days</p>
</b-card>
           </b-col>
                      <b-col md="4">
                           <b-card class="rules-loop">
<b-img
          size="60"
        :src="require('@/assets/images/challengepic/rules-icon3.svg')"
      />
          <h3>Be authentic</h3>
         <p>The challenge is to do it with a pure heart, no tricks.</p>        
         </b-card>
           </b-col>
       </b-row>
          
         <b-button class="mt-2" :to="{name:'start'}"
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="pink-btn"
        size="lg"
        block
      >
   Yes, I’m In
      </b-button>
      <b-card-text class="mt-2">
          <a href="#">No, I am not yet ready</a>
          </b-card-text>
      
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


