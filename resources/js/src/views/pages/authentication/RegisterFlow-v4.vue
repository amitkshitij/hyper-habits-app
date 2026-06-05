<template>
  <div class="auth-wrapper auth-v1 px-2 rg-flow">
    
    <div class="auth-inner py-2 text-center">
      <h2>Track and build good habits</h2>
      <!-- Register v1 -->
      <b-card class="mb-0">
        <b-link class="brand-logo" :to="{name:'auth-register-flow-v5'}">   
          
         <b-img
            :src="require('@/assets/images/rgicon/rg-icon4.png')"
            blank-color="#ccc"
            width="150"
            alt="placeholder"
             
          />   
        </b-link>
        <!-- social buttons -->
      </b-card>
      <b-button class="mt-2"
              variant="primary"
              :to="{name:'auth-register-flow-v5'}"
              type="submit"
            >
             Get Started
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
