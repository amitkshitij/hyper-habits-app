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
        <h2>Login</h2>
        <p>New on our platform? <b-link :to="{name:'auth-register-flow-v2'}">create an account</b-link></p>
           <validation-observer ref="registerForm">
          <b-form
            class="auth-register-form mt-2"
            @submit.prevent="validationForm"
          >
            <!-- username -->
            <b-form-group
              label="Phone Number"
              label-for="phonenumber"
            >
              <validation-provider
                #default="{ errors }"
                name="Phone Number"
                rules="required"
              >
                <b-form-input
                  id="phonenumber"
                   size="lg"
                  v-model="username"
                  :state="errors.length > 0 ? false:null"
                  name="register-username"
                  placeholder="Phone Number"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-form>
           </validation-observer>
        <!-- social buttons -->
          <b-button class="mt-2"
              variant="success"
              :to="{name:'auth-register-flow-v2'}"
              type="submit"
               size="lg"
               block
            >
           Login
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
