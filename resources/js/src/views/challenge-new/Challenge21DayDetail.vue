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
        :src="require('@/assets/images/challengepic/gymicon.svg')"
      />
        <b-card-text>
          <h2>Hit The Gym</h2>
          <span>2.8k Participated</span>
          <h4>21 Days Challenge</h4>
         <p>Description - This challenge is already on you list please complete it.  This challenge is already on you list please complete it.  This challenge is already on you list.</p>

        </b-card-text>
         <b-button class="mt-1"  :to="{name:'settime'}"         
        variant="primary"
      >
    Challenger
      </b-button>
      <div>
             <b-button class="mt-1"         
      >
    Dismiss
      </b-button>
      </div>
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


