<template>
<div class="main-top">
  <div class="top-nav">
<b-link class="brand-logo">
<vuexy-logo /> 
</b-link>
<b-button class=""
              variant="outline-success"              
              type="submit"
                 size="md"
            >
             Register 
            </b-button>  
</div>
  <div class="auth-wrapper auth-v1 px-2 rg-flow login-flow" >
    
    <div class="auth-inner py-2 match-height text-left">
      
      <!-- Register v1 -->
      <b-card class="mb-0" style="position:relative;" :img-src="require('@/assets/images/rgicon/promise-bg.png')"
          overlay
          text-variant="white"
          img-alt="card img"
          >  

           <div class="media-list promise-loop">
      <b-media vertical-align="top" >
        <template #aside>
          <b-img
            :src="require('@/assets/images/rgicon/promise-icon1.svg')"
            blank-color="#ccc"
            width="45"
            alt="placeholder"
          />
        </template>        
        <b-card-text class="mb-0">
          Honesty is the <br> best policy
        </b-card-text>
      </b-media>
      <b-media vertical-align="top">
        <template #aside>
          <b-img
            :src="require('@/assets/images/rgicon/promise-icon2.svg')"
            blank-color="#ccc"
            width="45"
            alt="placeholder"
          />
        </template>        
        <b-card-text class="mb-0">
          Honesty is the <br> best policy
        </b-card-text>
      </b-media>
      <b-media vertical-align="top">
        <template #aside>
          <b-img
            :src="require('@/assets/images/rgicon/promise-icon3.svg')"
            blank-color="#ccc"
            width="45"
            alt="placeholder"
          />
        </template>        
        <b-card-text class="mb-0">
          Discipline is <br> Important
        </b-card-text>
      </b-media>
       <h2 class="text-white mt-2">
          I promise
          </h2>
          <b-card-text>
       Building good habit and quitting addictive ones are not easy. Let’s make a promise to self that...
          </b-card-text>
    </div>            
   <!-- media -->         
             
      </b-card>
    
    <!-- /Register v1 -->
    </div>
  </div>
    <div class="foot">
    COPYRIGHT © 2021 21 By 90 Technologies Pvt Ltd , All rights Reserved
  </div>
</div>

</template>

<script>
import {
    BRow,
    BCol,
  BCard,
  BLink,
  BCardTitle,
  BCardText,
  BForm,
  BButton,
  BFormInput,
  BImg,      
  BFormFile, 
  BMedia,
  

} from 'bootstrap-vue'

import VuexyLogo from '@core/layouts/components/Logo.vue'
import vSelect from 'vue-select'


export default {
  components: {
 VuexyLogo,
    // BSV
    BRow,
    BCol,
    BCard,
    BLink,
    BCardTitle,
    BCardText,
    BForm,
    BButton,
    BFormInput,
    BImg,  
    BFormFile,       
    BMedia,
    vSelect,


 },

   

}
</script>

<style lang="scss">
@import '~@core/scss/vue/pages/page-auth.scss';
</style>
