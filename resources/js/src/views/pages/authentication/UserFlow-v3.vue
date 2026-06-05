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
  <div class="auth-wrapper auth-v1 px-2 rg-flow login-flow m-otp">
    
    <div class="auth-inner py-2 match-height">
      
      <!-- Register v1 -->
      <b-card class="mb-0">
        <h2>Set Location</h2>        
           <validation-observer ref="registerForm">
          <b-form
            class="auth-register-form mt-2"
            @submit.prevent="validationForm"
          >
            <!-- username -->
             <b-form-group
              label="Country"
              label-for="country"
            >
             <select class="form-select" aria-label="Default select example">
  <option selected>Country</option>
  <option value="1">India</option>
  <option value="2">Uganda</option>
  <option value="3">Turkey</option>
  <option value="4">United Kingdom</option>
  <option value="5">Tuvalu</option>
</select>
            </b-form-group>
               <b-form-group
              label="City"
              label-for="City"
            >
             <select class="form-select" aria-label="Default select example">
  <option selected>City</option>
  <option value="1">Delhi</option>
  <option value="2">Bangalore</option>
  <option value="3">Hyderabad</option>
  <option value="4">Ahmedabad</option>
  <option value="5">Chennai</option>

</select>
            </b-form-group>        
          </b-form>
           </validation-observer>
        
          <b-button class="mt-2"
              variant="success"
              :to="{name:'auth-user-v4'}"
              type="submit"
               size="lg"
               block
            >
            Continue           
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
  BFormGroup,
  BInputGroup,
  BInputGroupAppend,
  BFormCheckbox,

} from 'bootstrap-vue'

import VuexyLogo from '@core/layouts/components/Logo.vue'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
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
  BFormGroup,
  BInputGroup,
  BInputGroupAppend,
  BFormCheckbox,
    ValidationProvider,
    ValidationObserver,

 },
  

}
</script>

<style lang="scss">
@import '~@core/scss/vue/pages/page-auth.scss';
</style>
