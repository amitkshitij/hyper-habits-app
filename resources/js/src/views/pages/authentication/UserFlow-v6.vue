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
        <h2>Date of birth</h2>                   
        <!-- social buttons -->
 <b-form-group class="mt-2" label="Date of Birth"
                label-for="register-lastname">          
          <flat-pickr
            v-model="dateDefault"
            class="form-control"
          />
        </b-form-group>

      <b-button class="mt-2"
              variant="success"
              :to="{name:'auth-user-v7'}"
              type="submit"
               size="lg"
               block
            >
           Continue
            </b-button>        
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
  BFormGroup,  
  

} from 'bootstrap-vue'

import VuexyLogo from '@core/layouts/components/Logo.vue'
import flatPickr from 'vue-flatpickr-component'
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
    BFormGroup,
    flatPickr,     
  

 },
  

}
</script>

<style lang="scss">
@import '~@core/scss/vue/pages/page-auth.scss';
@import '~@core/scss/vue/libs/vue-flatpicker.scss';
</style>
