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
    
    <div class="auth-inner py-2 match-height">
      
      <!-- Register v1 -->
      <b-card class="mb-0">
        <h2>Gender</h2>                   
        <!-- social buttons -->
        <b-row>
 <b-col md="6">
<b-link :to="{name:'auth-user-v6'}" >
<b-card class="rules-loop gender-loop">
       <b-img
            :src="require('@/assets/images/rgicon/girl.svg')"
            blank-color="#ccc"
            width="70"
            alt="placeholder"
             
          /> 
<b-card-text>
<h4>Female</h4>             
</b-card-text>
</b-card>        
</b-link>
</b-col>
<b-col md="6">
<b-link :to="{name:'auth-user-v6'}">
<b-card class="rules-loop gender-loop">
       <b-img
            :src="require('@/assets/images/rgicon/boy.svg')"
            blank-color="#ccc"
            width="70"
            alt="placeholder"
             
          /> 
<b-card-text>
<h4>Male</h4>       
</b-card-text>
</b-card>   
</b-link>             
</b-col>
</b-row>
<b-card-text><em> By continuing, you agree to our <b-link>Terms & Conditions</b-link></em></b-card-text>
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
  

} from 'bootstrap-vue'

import VuexyLogo from '@core/layouts/components/Logo.vue'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
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
  

 },
  

}
</script>

<style lang="scss">
@import '~@core/scss/vue/pages/page-auth.scss';
</style>
