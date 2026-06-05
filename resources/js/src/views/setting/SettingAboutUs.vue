<template>
  <section class="about ">
<h2>About Us</h2>                
    <!-- pricing faq -->
<section class="mt-3 text-center">
<b-row class="match-height">
<b-col lg="6">
    <b-card>
<b-img
            :src="require('@/assets/images/settingicon/bechange.png')"            
            width="200"              
          /> 
          
<h3 class="large mt-2">Be the Change<span>.</span></h3>    
<p>We at Challenger App helps you to improve your lifestyle by fixing your habits, scientifically.</p>

    </b-card>
</b-col>  

<b-col lg="6">
    <b-card>
<b-img
:src="require('@/assets/images/settingicon/mission.png')"            
            width="200"              
          /> 
<h3 class="large mt-2">Our Mission<span>.</span></h3>    
<span>To give everyone the power to be the best version of themseleves by working on their habits & lifestyle with the help of easy yet powerful technologies</span>

    </b-card>
</b-col>  
</b-row>
</section>

<section class="mt-3 text-center">
<h2>Values We Live<span>.</span></h2>    
<p>We want to build a long-lasting, sustainable, and purposeful business with engaged team members and delighted customers </p>
   <div class="row">
              <div class="col-lg-4 col-md-4 mt-4 future-loop">
              <i><b-img :src="require('@/assets/images/settingicon/value-icon1.svg')" /> </i>  
              <p>Obsess over our users</p>
              </div>  
              <div class="col-lg-4 col-md-4 mt-4 future-loop">
                <i><b-img :src="require('@/assets/images/settingicon/value-icon2.svg')" /> </i>  
                <p>Be bold and move fast</p>  
              </div>  
              <div class="col-lg-4 col-md-4 mt-4 future-loop">
                <i><b-img :src="require('@/assets/images/settingicon/value-icon3.svg')" /> </i>  
                <p>Add value to customer's life</p>  
              </div>  
              <div class="col-lg-4 col-md-4 mt-4 future-loop">
                <i><b-img :src="require('@/assets/images/settingicon/value-icon4.svg')" /> </i>  
                <p>Work with respect</p>  
              </div>  
              <div class="col-lg-4 col-md-4 mt-4 future-loop">
                <i><b-img :src="require('@/assets/images/settingicon/value-icon5.svg')" /> </i>  
                <p>Build trust with transparency</p>  
              </div>  
              <div class="col-lg-4 col-md-4 mt-4 future-loop">
                <i><b-img :src="require('@/assets/images/settingicon/value-icon6.svg')" /> </i>  
                <p>Learn by doing</p>  
              </div>  
              </div>

<h3 class="mt-4 mb-2">Take control over your habits & see the new you.</h3>              
      <b-button
         v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          variant="primary btn-pink"          
          size="lg"
          class=""
        >
         Continue
        </b-button>   
</section>
    <!--/ pricing faq -->
  </section>
</template>

<script>
import {
  BFormCheckbox,
  BRow,
  BCol,
  BCard,
  BImg,
  BCardText,
  BListGroup,
  BListGroupItem,
  BButton,
  BBadge,
} from 'bootstrap-vue'


/* eslint-disable global-require */
export default {
  components: {
    BFormCheckbox,
    BButton,
    BCardText,
    BListGroup,
    BListGroupItem,
    BRow,
    BCol,
    BCard,
    BBadge,
    BImg,

  },

  data(){}

}
/* eslint-disable global-require */
</script>


