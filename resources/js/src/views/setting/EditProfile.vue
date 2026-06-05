<template>

      
      <!-- Register v1 -->
      <b-card class="mt-2" style="box-shadow:none;">        
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
            <b-row class="edit-profile">
            <b-col cols="6"> 
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
                    placeholder="Pramila"
                    size="lg"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
              </b-col>
            
             <b-col cols="6">
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
                    placeholder="Dhyani"
                   size="lg"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group> 
             </b-col>

              <b-col cols="6">
       <b-form-group
                label-for="Email"
                label="Email"
              >
                <validation-provider
                  #default="{ errors }"
                  name="Email"
                  rules="email"
                >
                  <b-input-group
                    class="input-group-merge"
                    :class="errors.length > 0 ? 'is-invalid':null"
                    size="lg"
                  >
                    <b-form-input
                      id="email"
                      v-model="email"
                      name="email"
                      class="form-control-merge"                      
                      :state="errors.length > 0 ? false:null"
                      placeholder="Email"
                      
                      
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
              </b-col>
              <b-col cols="6">
                       <b-form-group label="Date of Birth"                        
                label-for="register-lastname">          
          <flat-pickr           
            v-model="dateDefault"
            class="form-control"
            size="lg"           
          />
        </b-form-group>
              </b-col>
               <b-col cols="6">
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
               <b-form-group
                label="Company"
                label-for="company"
              >
                <validation-provider
                  #default="{ errors }"
                  name="Company"
                  rules="required"
                  
                >
                  <b-form-input
                    id="company"
                    v-model="company"
                    name="company"
                    :state="errors.length > 0 ? false:null"
                    placeholder="company"
                    size="lg"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group> 
               </b-col>
            <b-col cols="6">
 <label for="textarea-default">Bio</label>
    <b-form-textarea
      id="textarea-default"
      placeholder="Textarea"
      rows="4"
    />

            </b-col>
             </b-row>

          </b-form>
           </validation-observer>
        <!-- social buttons -->
        <b-row>
     <b-col cols="6">
     <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          variant="primary btn-pink"          
          size="lg"
          class="mt-1"
        >
         Save
        </b-button>         
      </b-col>   
            </b-row>       
      </b-card>
  

</template>

<script>
import {
  BCol,
  BRow,
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
  BFormTextarea,

} from 'bootstrap-vue'

import VuexyLogo from '@core/layouts/components/Logo.vue'
import { ValidationProvider, ValidationObserver } from 'vee-validate'

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
    BCol,
    BRow,
    BFormTextarea,
    vSelect,
    flatPickr,

 },
   data() {
    return {
       
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
