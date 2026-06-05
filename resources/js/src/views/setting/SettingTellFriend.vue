<template>

       <div class="">
        <h2>Tell A Friend</h2>
        <p>Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée.</p>
<div class=" text-center tell-friend">
<b-img
            :src="require('@/assets/images/settingicon/frame.svg')"
            
            alt="placeholder"
            
          />

<h3>Invite your fiends and get 7 days free trail on every friend.</h3>
<p>What is 2FA require a security key or code in addition to your password.
</p>
             <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          variant="primary btn-pink"          
          size="lg"
          class="mr-1 mt-2 mb-2"
        >
         Invite
        </b-button> 

        <h3>Social share</h3>
        <p>Let's share this app to your friend</p>
   
<div class="social auth-footer-btn d-flex justify-content-center">
            <b-button
              variant="facebook"
              href="javascript:void(0)"
            >
              <feather-icon icon="FacebookIcon" />
            </b-button>
            <b-button
              variant="twitter"
              href="javascript:void(0)"
            >
              <feather-icon icon="TwitterIcon" />
            </b-button>
            <b-button
              variant="google"
              href="javascript:void(0)"
            >
              <feather-icon icon="MailIcon" />
            </b-button>
            <b-button
              variant="github"
              href="javascript:void(0)"
            >
              <feather-icon icon="GithubIcon" />
            </b-button>
          </div>

         <p class="mt-2">Or share your referral link</p>
<div class="text-center">
            <div class="d-flex justify-content-center   mt-2">

      <!-- form input -->
      <b-form-group class="mb-0 mr-1">
        <b-form-input
          v-model="message"
        />
      </b-form-group>

      <!-- button -->
      <b-button
        v-clipboard:copy="message"
        v-clipboard:success="onCopy"
        v-clipboard:error="onError"
        v-ripple.400="'rgba(186, 191, 199, 0.15)'"
        variant="primary"
      >
        Copy!
      </b-button>
    </div>
    </div>
    </div>
</div>
</template>

<script>

import { BImg, BCardText, BButton, BFormRadioGroup, BFormInput,   } from 'bootstrap-vue'

export default {
  components: {
    
    BImg,    
    BCardText,
    BButton,
    BFormRadioGroup,
    BFormInput,
    

  },
  data() {
    return {
      codeLeftAlign,
    }
  },
}
</script>
