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
    
    <div class="auth-inner py-2 match-height text-center">
      
      <!-- Register v1 -->
      <b-card class="mb-0">
        <h2>Set Profile Photo</h2>        
   <!-- media -->
<b-row class="mt-2" >
<b-col md="12" class="profile-pic">
    <b-link>
    <b-img
            :src="require('@/assets/images/portrait/small/avatar-s-11.jpg')"
            blank-color="#ccc"
            width="130"
            alt="placeholder"        
            circle              
          /> 
    </b-link></b-col>
<b-col md="12" class="mt-2">
      <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          variant="primary"
          size="sm"
          class="mb-75"
          @click="$refs.refInputEl.$el.click()"
        >
          Upload photo
        </b-button>
        <b-form-file
          ref="refInputEl"
          v-model="profileFile"
          accept=".jpg, .png, .gif"
          :hidden="true"
          plain
          @input="inputImageRenderer"
        /> 
</b-col>
<b-col md="12">
    <ul class="mt-2 icon-list-loop user-pic-loop">
                 <li><a href="#"> <b-img
        size="md"
        :src="require('@/assets/images/rgicon/userpic1.png')"
      /></a></li>
                 <li><a href="#"><b-img
        size="md"
        :src="require('@/assets/images/rgicon/userpic2.png')"
      /></a></li>
                 <li><a href="#"><b-img
        size="md"
        :src="require('@/assets/images/rgicon/userpic3.png')"
      /></a></li>
                 <li><a href="#"><b-img
        size="md"
        :src="require('@/assets/images/rgicon/userpic4.png')"
      /></a></li>
                 <li><a href="#"><b-img
        size="md"
        :src="require('@/assets/images/rgicon/userpic5.png')"
      /></a></li>
                 <li><a href="#"><b-img
        size="md"
        :src="require('@/assets/images/rgicon/userpic6.png')"
      /></a></li>
                 <li><a href="#"><b-img
        size="md"
        :src="require('@/assets/images/rgicon/userpic7.png')"
      /></a></li>
                 <li><a href="#"><b-img
        size="md"
        :src="require('@/assets/images/rgicon/userpic8.png')"
      /></a></li>
                 <li><a href="#"><b-img
        size="md"
        :src="require('@/assets/images/rgicon/userpic1.png')"
      /></a></li>
             </ul>
</b-col>
</b-row>      

        
        <!-- social buttons -->
          <b-button class="mt-2"
              variant="success"
               :to="{name:'auth-user-v8'}"
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
  BFormFile,  
  

} from 'bootstrap-vue'

import VuexyLogo from '@core/layouts/components/Logo.vue'
import vSelect from 'vue-select'


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
    BFormFile,       
    vSelect,


 },

   

}
</script>

<style lang="scss">
@import '~@core/scss/vue/pages/page-auth.scss';
</style>
