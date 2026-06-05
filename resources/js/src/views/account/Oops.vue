<template>


    <!-- profile info  -->
    <section id="profile-info">
      
      <b-row class="match-height"> 
        <!-- about suggested page and twitter feed -->
       <b-col md="8 mx-auto">
         <b-card class="blank-challenge">
          <b-avatar
        size="lg"
       :src="require('@/assets/images/account/delete.svg')"
      />
        <div class="mt-2 mb-2">
          <h3>Oops! This profile might have been deleted by user or the admin for some reason</h3>         
        </div>
         <b-button 
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="primary"
        size="lg"
      >
        Go To Dashboard
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
import { BRow, BCol, BCardText, BButton, BImg, BAvatar, BCard, } from 'bootstrap-vue'


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

    

    
  },
}
/* eslint-disable global-require */
</script>


