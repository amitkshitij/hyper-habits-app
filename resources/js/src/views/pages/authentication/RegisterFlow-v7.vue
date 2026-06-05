<template>
  <div class="auth-wrapper auth-v1 px-2 rg-flow rg-mobile-card">
    
    <div class="auth-inner py-2 text-center">
     
      <!-- Register v1 -->
      <b-card class="mb-0">
        <!-- <b-link class="brand-logo" :to="{name:'auth-register-flow-v1'}">   
          
         <b-img
            :src="require('@/assets/images/rgicon/rg-icon5.png')"
            blank-color="#ccc"
            width="150"
            alt="placeholder"
             
          />             
        </b-link> -->
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
            
              <b-button class=""
              variant="primary"
              :to="{name:'auth-register-flow-v1'}"
              type="submit"
            >
   Next
            </b-button>
        <!-- social buttons -->
      </b-card>
    
    <!-- /Register v1 -->
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
  BFormGroup,
  BImg,

} from 'bootstrap-vue'
import { ValidationProvider, ValidationObserver } from 'vee-validate'

export default {
  components: {

    // BSV
    BCard,
    BLink,
    BCardTitle,
    BCardText,
    BForm,
    BButton,
    BFormInput,
    BFormGroup,
    BImg,
    ValidationProvider,
    ValidationObserver,

 },
  

}
</script>


<style lang="scss">
@import '~@core/scss/vue/pages/page-auth.scss';
</style>
