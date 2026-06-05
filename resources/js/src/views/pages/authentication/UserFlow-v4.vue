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
        <h2>Full name</h2>        
           <validation-observer ref="registerForm">
          <b-form
            class="auth-register-form mt-2"
            @submit.prevent="validationForm"
          >
            <!-- username -->
            <b-form-group
              label="First Name"
              label-for="firstname"
            >
              <validation-provider
                #default="{ errors }"
                name="First Name"
                rules="required"
              >
                <b-form-input
                  id="firstname"
                   size="lg"
                  v-model="username"
                  :state="errors.length > 0 ? false:null"
                  name="register-username"
                  placeholder="First Name"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
              <b-form-group
              label="Last Name"
              label-for="lastname"
            >
              <validation-provider
                #default="{ errors }"
                name="Last Name"
                rules="required"
              >
                <b-form-input
                  id="lastname"
                   size="lg"
                  v-model="lastname"
                  :state="errors.length > 0 ? false:null"
                  name="register-lastname"
                  placeholder="Last Name"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-form>
           </validation-observer>
        <!-- social buttons -->
          <b-button class="mt-2"
              variant="success"
              :to="{name:'auth-user-v5'}"
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
