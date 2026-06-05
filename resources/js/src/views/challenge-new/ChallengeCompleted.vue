<template>


    <!-- profile info  -->
    <section id="profile-info">
      
      <b-row class="match-height"> 
        <!-- about suggested page and twitter feed -->
       <b-col md="8 mx-auto">
         <b-card class="blank-challenge">      
          <b-img
        size="lg"
        :src="require('@/assets/images/challengepic/thumb.png')"
      />
        <b-card-text class="mt-2">
          <h2>Well done! </h2>
         <p>Congratulations Jogging is part of your life now</p>

        </b-card-text>
         <b-button class="mt-2" :to="{name:'completeddetail'}"
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="primary"
      >
       View Details
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


