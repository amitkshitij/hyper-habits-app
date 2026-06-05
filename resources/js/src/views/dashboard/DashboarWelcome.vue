<template>


    <!-- profile info  -->
    <section id="profile-info">  
    <b-row class="match-height"> 
        <!-- about suggested page and twitter feed -->
    <b-col md="8 mx-auto">
    <b-card class="blank-challenge">
          <b-avatar
        size="lg"
        :src="require('@/assets/images/dashboard/dashboard-icon.svg')"
      />
    <b-card-text class="mt-2">
          <h3>Be The Change</h3>
        Dashboard screen shows data, charts based on your activities 
        </b-card-text>        
         <b-button 
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="primary"
      >
      + Start New Challenge
    </b-button>
        <em><b>Truly Scientific</b></em>  
    <i><b-img        
        :src="require('@/assets/images/challengepic/midarrow.svg')"
      />      
      </i>
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


