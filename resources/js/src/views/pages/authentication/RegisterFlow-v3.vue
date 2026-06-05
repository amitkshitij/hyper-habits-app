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
        <h2>Sign up</h2>
        <p>New on our platform? <b-link :to="{name:'auth-register-flow-v1'}"> login to your account</b-link></p>
   <!-- media -->
    <b-media no-body>
      <b-media-aside>
        <b-link>
          <b-img
            :src="require('@/assets/images/portrait/small/avatar-s-11.jpg')"
            blank-color="#ccc"
            width="80"
            alt="placeholder"
              rounded
          /> 
        </b-link>
        <!--/ avatar -->
      </b-media-aside>

      <b-media-body class="ml-75">
        <!-- upload button -->
        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          variant="primary"
          size="sm"
          class="mb-75 mr-75"
          @click="$refs.refInputEl.$el.click()"
        >
          Upload
        </b-button>
        <b-form-file
          ref="refInputEl"
          v-model="profileFile"
          accept=".jpg, .png, .gif"
          :hidden="true"
          plain
          @input="inputImageRenderer"
        />
        <!--/ upload button -->

        <!-- reset -->
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          variant="outline-secondary"
          size="sm"
          class="mb-75 mr-75"
        >
          Reset
        </b-button>
        <!--/ reset -->
        <b-card-text>Allowed JPG, GIF or PNG. Max size of 800kB</b-card-text>
      </b-media-body>
    </b-media>
    <!--/ media -->
           <validation-observer ref="registerForm">
          <b-form
            class="auth-register-form mt-2"
            @submit.prevent="validationForm"
          >
            <!-- username -->
              <b-form-group
                label="First Name"
                label-for="register-firstname"
              >
                <validation-provider
                  #default="{ errors }"
                  name="First Name"
                  rules="required"
                  
                >
                  <b-form-input
                    id="register-firstname"
                    v-model="firstname"
                    name="register-firstname"
                    :state="errors.length > 0 ? false:null"
                    placeholder="john"
                    size="lg"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

                 <!-- username -->
              <b-form-group
                label="Last Name"
                label-for="register-lastname"
              >
                <validation-provider
                  #default="{ errors }"
                  name="Last Name"
                  rules="required"
                  
                >
                  <b-form-input
                    id="register-lastname"
                    v-model="lastname"
                    name="register-lastname"
                    :state="errors.length > 0 ? false:null"
                    placeholder="doe"
                    size="lg"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

      <!-- password -->
              <b-form-group
                label-for="register-password"
                label="New Password"
              >
                <validation-provider
                  #default="{ errors }"
                  name="New Password"
                  rules="required"
                >
                  <b-input-group
                    class="input-group-merge"
                    :class="errors.length > 0 ? 'is-invalid':null"
                    size="lg"
                  >
                    <b-form-input
                      id="register-password"
                      v-model="password"
                      class="form-control-merge"
                      :type="passwordFieldType"
                      :state="errors.length > 0 ? false:null"
                      name="register-password"
                      placeholder="············"
                    />
                    <b-input-group-append is-text>
                      <feather-icon
                        :icon="passwordToggleIcon"
                        class="cursor-pointer"
                        @click="togglePasswordVisibility"
                      />
                    </b-input-group-append>
                  </b-input-group>
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
               <b-form-group label="Date of Birth"
                label-for="register-lastname">          
          <flat-pickr
            v-model="dateDefault"
            class="form-control"
          />
        </b-form-group>
              <!-- email -->
                  <b-form-group label="Gender"
                label-for="register-Gender">
          <v-select
            v-model="selected"
            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
            label="title"
            :options="option"
            class="select-size-lg"
          />
        </b-form-group>

              <!-- email -->
                  <!-- <b-form-group label="Country"
                label-for="register-Country">
     <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
                  </b-form-group> -->
            

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
            Submit           
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
  BFormFile,
  BMedia,
  BMediaAside,

} from 'bootstrap-vue'

import VuexyLogo from '@core/layouts/components/Logo.vue'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { codeVueBasic } from './code'
import flatPickr from 'vue-flatpickr-component'
import vSelect from 'vue-select'


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
    BFormFile,
     BMedia,  
     BMediaAside,  
  BFormGroup,
  BInputGroup,
  BInputGroupAppend,
  BFormCheckbox,
    ValidationProvider,
    ValidationObserver,
    vSelect,
    flatPickr,

 },
   data() {
    return {
       codeVueBasic,
      selected: { title: 'Gender' },
      selected1: {
        title: 'Gender',        
      },
      option: [{ title: 'Gender' }, { title: 'Male' }, { title: 'Female' }],
      books: [
        {
          title: 'Gender',
          
        },
        {
          title: 'Male',
          
        },
        {
          title: 'Female ',
          
        },
        
      ],
    }
  },
   

}
</script>

<style lang="scss">
@import '~@core/scss/vue/pages/page-auth.scss';
@import '~@core/scss/vue/libs/vue-flatpicker.scss';
</style>
