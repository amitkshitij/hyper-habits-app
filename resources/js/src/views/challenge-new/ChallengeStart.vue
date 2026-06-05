<template>


    <!-- profile info  -->
    <section id="profile-info">
      
      <b-row class="match-height"> 
        <!-- about suggested page and twitter feed -->
       <b-col md="8 mx-auto">
         <b-card class="blank-challenge challengeuser rules">
             <h2>Let’s Start</h2>
             <p>Fortunate are those who take the first steps</p>
       
       <b-row class="match-height mt-2"> 
           <b-col md="4"  offset-md="2">
               <b-card class="rules-loop">
                   <b-link :to="{name:'category'}">
        <b-img        
        :src="require('@/assets/images/challengepic/smile.svg')"
        size="60"
      />        
          <h3 class="mb-0">Build good habit</h3>                 
        </b-link>
        </b-card>
           </b-col>
                      <b-col md="4">                          
                           <b-card class="rules-loop" > 
                               <b-link :to="{name:'categoryquit'}">
<b-img
          size="60"
        :src="require('@/assets/images/challengepic/sad.svg')"
      />        
          <h3 class="mb-0">Quit bad habit</h3>                 
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


