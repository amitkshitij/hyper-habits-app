<template>
<div>
   <b-card class="card upgrade"      
        >  <div class="overlay-up">
            <b-img                        
          :src="require('@/assets/images/dashboard/offer.png')"
          
        />                 
        </div>       
        <div class="off">          
          <span>OFFER</span>
          <h3 class="mt-1 mb-1">Get 12 months for the price of 6.</h3>
          <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="success"           
          size="lg" :to="{name:'pages-pricing'}" 
        >
         Upgrade Now
        </b-button>
      
        </div>
          <b-card-text style="padding:0 16px;">
    12 months at ₹499, then ₹999 / yearly
        </b-card-text>
      </b-card>
      </div>
</template>

<script>
import {
  BCard, BRow, BCol, BButton, BImg, BCardText,
} from 'bootstrap-vue'


export default {
  components: {    
    BCard,
    BRow,
    BCol,
    BButton,
    BImg,    
    BCardText,
  },

}
</script>
