<template>  
<div>
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
          size="md"
        >
         Continue
        </b-button>        
      </b-col>
      </b-row>
          
</b-form> 

<div class="mt-5">
<b-form @submit.prevent class="wnewlist delete-account">

       
         <h3 class="mt-2">Any Suggestion / Feedback?</h3>
         <p>Can you please share to us what was not working? We are fixing bugs as soon as we spot them. If something slipped through our fingers, we’d be so grateful to be aware of it and fix it</p>

         <b-row class="mt-2">
          <b-col lg="12">
    <b-form-group
          label=""
          label-for=""
          label-cols-md="12"
        >
              <b-form-textarea
      id="textarea-default"
      placeholder="Textarea"
      rows="6"
    />
        </b-form-group>
          </b-col>

          <b-col lg="12 mt-2">
        <b-button  
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          type="submit"
          variant="danger pink"
          class="mr-1"
          size="md"
        >
         Continue
        </b-button>  
        <b-button variant=""
        size="md"
        >
Skip
        </b-button>
      </b-col>
      </b-row>
          
</b-form>  </div>



<div class="mt-5">
<b-form @submit.prevent class="wnewlist delete-account">

       
         <h3 class="mt-2">Confirm Deletion</h3>
         <p>Warning: This cannot be undone.</p>

         <b-row class="mt-2">
          <b-col lg="12">
    <b-form-checkbox
        v-model="Selected"
        name="some-radio9"
        value="h"
        class="custom-control-primary"
      >
   Delete all challenges
      </b-form-checkbox>
      <b-form-checkbox
        v-model="Selected"
        name="some-radio9"
        value="h"
        class="custom-control-primary"
      >
   Delete my account info
      </b-form-checkbox>
      <b-form-checkbox
        v-model="Selected"
        name="some-radio9"
        value="h"
        class="custom-control-primary"
      >
   Delete my billing records
      </b-form-checkbox>
          </b-col>

          <b-col lg="12 mt-2">
        <b-button  
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          type="submit"
          variant="danger pink"
          class="mr-1"
          size="md"
        >
         Yes! Continue
        </b-button>  
        <b-button variant=""
          class="mr-1"
        size="md"
        >
No, I don’t want to delete.
        </b-button>
        <b-button variant=""
        size="md"
        >
Contact support team
        </b-button>
      </b-col>
      </b-row>
          
</b-form>  </div>




<div class="mt-5">
<b-form @submit.prevent class="wnewlist delete-account">

       
         <h3 class="mt-2">Final step!</h3>
         <p>To delete your account forever, please type “Challenger” in the box below, Keep in mind that you will lose your account and this action cannot be undone.</p>

         <b-row class="mt-2">
          <b-col lg="12">
 <b-form-input
            id="h-number"
              type="Hyper Habits "
            placeholder="Hyper Habits "
            size="lg"
          />
          </b-col>

          <b-col lg="12 mt-2">
        <b-button  
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          type="submit"
          variant="danger pink"
          class="mr-1"
          size="md"
        >
    Delete My Account
        </b-button>  
        <b-button variant=""
          class="mr-1"
        size="md"
        >
No, I don’t want to delete.
        </b-button>
        <b-button variant=""
        size="md"
        >
Contact support team
        </b-button>
      </b-col>
      </b-row>
          
</b-form>  </div>



<div class="mt-5">
<div  class="wnewlist delete-account text-center">

           <b-img     
        :src="require('@/assets/images/settingicon/goodbye.png')"
      
      /> 
         <h3 class="mt-1">We’re really sorry to see you go,  thanks for giving Hyper Habits a try!</h3>
         <h3 style="color:#FF7070;" class="mt-3">We wish you a healthy, wealthy and happy life.</h3>
         <div class="dismiss mt-3"><p> <b-img class="mr-1"
            :src="require('@/assets/images/settingicon/check.svg')"                        
          />Account Deleted</p>  <span>Dismiss</span></div>
</div>  </div>
 </div>
</template>



<script>

import {BRow, BCol, BButton, BFormRadioGroup, BFormRadio, BFormCheckbox, BFormGroup, BFormTextarea, BFormInput, BImg, } from 'bootstrap-vue'


export default {
  components: {
    BRow, 
    BCol,       
    BButton,
    BFormRadioGroup,
    BFormRadio,
    BFormCheckbox,
    BFormGroup,
    BFormTextarea,
    BFormInput,
    BImg,
  },

data() {
    return {
      Selected: 'e',
      codeColor,
    }
  },
}
</script>
