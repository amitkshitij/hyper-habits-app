<template>
  <div class="auth-wrapper auth-v1 px-2 rg-flow">
    
    <div class="auth-inner py-2 text-center">
      <h2>Welcome</h2>
      <!-- Register v1 -->
      <b-card class="mb-0">
        <b-link class="brand-logo" :to="{name:'auth-register-flow-v6'}">   
          
         <b-img
            :src="require('@/assets/images/rgicon/rg-icon5.png')"
            blank-color="#ccc"
            width="150"
            alt="placeholder"
             
          />             
        </b-link>
        <b-card-text>
            <h3>Take a Challenge. Be the Change.</h3>
            <p>Challenger App is based on science, action oriented and easy yet powerful lifestyle app which helps you build great habits and quit the ones which are stopping you to be the best version of you.</p>
        </b-card-text>
        <!-- social buttons -->
      </b-card>
      <b-button class="mt-2"
              variant="primary"
              :to="{name:'auth-register-flow-v6'}"
              type="submit"
            >
   Gazab App Hai
            </b-button>
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
  BImg,

} from 'bootstrap-vue'



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
    BImg,

 },
  

}
</script>

<style lang="scss">
@import '~@core/scss/vue/pages/page-auth.scss';
</style>
