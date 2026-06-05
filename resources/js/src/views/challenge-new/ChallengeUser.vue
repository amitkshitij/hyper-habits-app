<template>


    <!-- profile info  -->
    <section id="profile-info">
      
      <b-row class="match-height"> 
        <!-- about suggested page and twitter feed -->
       <b-col md="8 mx-auto">
         <b-card class="blank-challenge challengeuser">      
          <b-img
        size="lg"
        :src="require('@/assets/images/challengepic/challenge-user.png')"
      />
          <h2 class="mt-2">Change is beautiful</h2>
         <p>Lao Tzu said: A journey of a thousand miles begins with a single step. It’s commendable that you took that step, not everyone does that.</p>
         <b-button class="" :to="{name:'rules'}"
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="pink-btn"
        size="lg"
        block
      >
       Get Started
      </b-button>
      
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


