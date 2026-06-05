<template>


    <!-- profile info  -->
    <section id="profile-info">
      
      <b-row class="match-height"> 
        <!-- about suggested page and twitter feed -->
       <b-col md="8 mx-auto">
         <b-card class="blank-challenge">
          <b-img
        width="200"
        :src="require('@/assets/images/notificationicon/notification.svg')"
      />
        <b-card-text class="mt-2">
          <h3 class="large">All Caught Up</h3>
         No new notifications available at this moment.
        </b-card-text>
        <p class="mt-3 mb-4"><b-link >See Previous Notifications</b-link></p>
         <b-button :to="{name:'notificationall'}"
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="primary"
        size="lg"
      >
      Start New Challenge
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


