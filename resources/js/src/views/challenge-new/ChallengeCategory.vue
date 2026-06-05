<template>


    <!-- profile info  -->
    <section id="profile-info">
      
      <b-row class="match-height"> 
        <!-- about suggested page and twitter feed -->
       <b-col md="8 mx-auto">
         <b-card class="blank-challenge challengeuser rules">
             <h2>Select Category</h2>
             <p>Focus on the problem you want to solve</p>
       
       <b-row class="match-height mt-2"> 
           <b-col md="4">
               <b-card class="rules-loop">
                   <b-link :to="{name:'select'}"> 
        <b-img        
        :src="require('@/assets/images/challengepic/categoryicon/category-icon1.svg')"
        size="60"
      />
        <b-card-text>
          <h3>Wellness</h3>         
          32 Challenges
        </b-card-text>
        </b-link>
        </b-card>
           </b-col>
                 <b-col md="4">
               <b-card class="rules-loop">
                   <b-link :to="{name:'select'}"> 
        <b-img        
        :src="require('@/assets/images/challengepic/categoryicon/category-icon2.svg')"
        size="60"
      />
        <b-card-text>
          <h3>Finances</h3>       
          23 Challenges  
        </b-card-text>
        </b-link>
        </b-card>
           </b-col>
                 <b-col md="4">
               <b-card class="rules-loop">
                   <b-link :to="{name:'select'}">
        <b-img        
        :src="require('@/assets/images/challengepic/categoryicon/category-icon3.svg')"
        size="60"
      />
        <b-card-text>
          <h3>Lifestyle</h3>         
          75 Challenges
        </b-card-text>
        </b-link>
        </b-card>
           </b-col>
                 <b-col md="4"  offset-md="2">
               <b-card class="rules-loop">
                   <b-link :to="{name:'select'}">
        <b-img        
        :src="require('@/assets/images/challengepic/categoryicon/category-icon4.svg')"
        size="60"
      />
        <b-card-text>
          <h3>Health</h3>         
          18 Challenges
        </b-card-text>
        </b-link>
        </b-card>
           </b-col>
                 <b-col md="4">
               <b-card class="rules-loop">
                   <b-link :to="{name:'select'}"> 
        <b-img        
        :src="require('@/assets/images/challengepic/categoryicon/category-icon5.svg')"
        size="60"
      />
        <b-card-text>
          <h3>Food</h3>         
          36 Challenges
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


