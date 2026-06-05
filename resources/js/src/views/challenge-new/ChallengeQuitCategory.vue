<template>


    <!-- profile info  -->
    <section id="profile-info">
      
      <b-row class="match-height"> 
        <!-- about suggested page and twitter feed -->
       <b-col md="8 mx-auto">
         <b-card class="blank-challenge challengeuser rules">
             <h2>Select Quit Category</h2>
             <p>Focus on the problem you want to solve</p>
       
       <b-row class="match-height mt-2"> 
           <b-col md="4">
               <b-card class="rules-loop">
                   <b-link :to="{name:'selectquit'}"> 
        <b-img        
        :src="require('@/assets/images/challengepic/quit-icon1.png')"
        size="60"
      />
        <b-card-text>
          <h4>Alcohal</h4>         
          32 Challenges
        </b-card-text>
        </b-link>
        </b-card>
           </b-col>
                 <b-col md="4">
               <b-card class="rules-loop">
                   <b-link :to="{name:'selectquit'}"> 
        <b-img        
        :src="require('@/assets/images/challengepic/quit-icon2.png')"
        size="60"
      />
        <b-card-text>
          <h4>Smoking</h4>       
          23 Challenges  
        </b-card-text>
        </b-link>
        </b-card>
           </b-col>
                 <b-col md="4">
               <b-card class="rules-loop">
                   <b-link :to="{name:'selectquit'}">
        <b-img        
        :src="require('@/assets/images/challengepic/quit-icon3.png')"
        size="60"
      />
        <b-card-text>
          <h4>Tobacco</h4>         
          75 Challenges
        </b-card-text>
        </b-link>
        </b-card>
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


