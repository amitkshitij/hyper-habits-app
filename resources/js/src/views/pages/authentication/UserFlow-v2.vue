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
        <h2>Verify mobile</h2>
        <p>Enter the OTP sent to +91-9899252544</p>
           <validation-observer ref="registerForm">
          <b-form
            class="auth-register-form mt-2"
            @submit.prevent="validationForm"
          >
            <!-- username -->
             <b-form-group
              label="Mobile OTP"
              label-for="mobileotp"
            >
              <validation-provider
               name="Mobileotp"
                rules="required"
              >
<input type="text" maxlength="1" minlength="1"  class="form-control otp-input" placeholder="0">
<input type="text" maxlength="1"  minlength="1" class="form-control otp-input" placeholder="0">
<input type="text" maxlength="1" minlength="1"  class="form-control otp-input" placeholder="0">
<input type="text" maxlength="1" minlength="1"  class="form-control otp-input" placeholder="0">
              </validation-provider>
            </b-form-group>
        <b-card-text> <a href="#">Resend OTP in 29</a> <a href="#">Get OTP Via Call</a></b-card-text>
        <b-link :to="{name:'offer-flow'}" >Offer Flow</b-link>
          </b-form>
           </validation-observer>
        
          <b-button class="mt-2"
              variant="success"
              :to="{name:'auth-user-v3'}"
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
