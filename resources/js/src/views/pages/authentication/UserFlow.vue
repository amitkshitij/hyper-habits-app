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
  <div class="auth-wrapper auth-v1 rg-flow userflow">
    <div class="auth-inner py-2 text-left match-height">
            <!-- Register v1 -->
      <b-card class="mb-0">     
         <b-img
            :src="require('@/assets/images/rgicon/rg-icon6.svg')"
            blank-color="#ccc"
            width="200"
            alt="placeholder"
             
          />             
        <!-- social buttons -->
         <b-card-text>
            <h3>Take a Challenge. <br> Be the Change.</h3>
            <p>To give everyone the power to be the best version of themseleves by working on their habits & lifestyle, scientifically.</p>
        </b-card-text>
         
          <b-button class="mt-1"
              variant="success"
              :to="{name:'auth-user-v1'}"
              type="submit"
                 size="lg"
            >
       Get Started
            </b-button>
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
  BCard,
  BLink,
  BCardTitle,
  BCardText,
  BForm,
  BButton,
  BFormInput,
  BImg,

} from 'bootstrap-vue'
import VuexyLogo from '@core/layouts/components/Logo.vue'


export default {
  components: {
    VuexyLogo,
    // BSV
    BCard,
    BLink,
    BCardTitle,
    BCardText,
    BForm,
    BButton,
    BFormInput,
    BImg,
 },
  

}
</script>

<style lang="scss">
@import '~@core/scss/vue/pages/page-auth.scss';
</style>
