<template>  
<b-form @submit.prevent class="wnewlist delete-account">

       <h2>Delete Profile</h2>
         <p>Are you sure you want to delete your account? If you delete your account, you will permanently lose access to your account, challenges and everything related to. </p>
         <h4 class="mt-2">Please take a moment to tell us why you want to delete your account:</h4>
         <b-row class="mt-2">
          <b-col lg="12">
  <b-form-radio
        v-model="Selected"
        name="some-radio9"
        value="e"
        class="custom-control-primary"
      >
     I don't need it anymore.
      </b-form-radio>
        <b-form-radio
        v-model="Selected"
        name="some-radio9"
        value="f"
        class="custom-control-primary"
      >
     I was trying, I might be back. 
      </b-form-radio>
          <b-form-radio
        v-model="Selected"
        name="some-radio9"
        value="g"
        class="custom-control-primary"
      >
  I am moving to different app.
      </b-form-radio>
          <b-form-radio
        v-model="Selected"
        name="some-radio9"
        value="h"
        class="custom-control-primary"
      >
   I find it costly.
      </b-form-radio>
          <b-form-radio
        v-model="Selected"
        name="some-radio9"
        value="i"
        class="custom-control-primary"
      >
It doesn't provide what I need.
      </b-form-radio>
          <b-form-checkbox
        v-model="Selected"
        name="some-radio9"
        value="i"
        class="custom-control-primary mt-2"
      >
 Yes, I understand the risk and wish to proceed.
      </b-form-checkbox>
     
      
          </b-col>

          <b-col lg="12 mt-2">
        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          type="submit"
          variant="danger pink"
          class="mr-1"
          size="lg"
        >
         Continue
        </b-button>        
      </b-col>
      </b-row>
          
</b-form>
  
  
</template>

<script>

import {BRow, BCol, BButton, BFormRadioGroup, BFormRadio, BFormCheckbox, } from 'bootstrap-vue'


export default {
  components: {
    BRow, 
    BCol,       
    BButton,
    BFormRadioGroup,
    BFormRadio,
     BFormCheckbox,
  },

data() {
    return {
      Selected: 'e',
      codeColor,
    }
  },
}
</script>
