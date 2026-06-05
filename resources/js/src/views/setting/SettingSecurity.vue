<template>

       <div class="whatsnew">
            <h2>Security</h2>
          <p>Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée.</p>
   

    <div class="media-list media-bordered wnewlist">    
   
      <b-media right-align
        vertical-align="top"
        class="text-left">
        <template #aside>
         <b-form-checkbox
        checked="true"
        name="check-button"
        switch
        inline
      >        
      </b-form-checkbox>       
        </template>
        <h4 class="media-heading">
      Two Factor Authentication
        </h4>
          <b-card-text>
           OFF
          </b-card-text>
    
      </b-media>
      <b-media right-align
        vertical-align="top"
        class="text-left">
        <template #aside>
        <b-form-checkbox
        checked="true"
        name="check-button"
        switch
        inline
      >        
      </b-form-checkbox>
        </template>
        <h4 class="media-heading">
       (**)****41
        </h4>
        <b-card-text>
       Email authentication
          </b-card-text>

      </b-media>
      <b-media right-align
        vertical-align="top"
        class="text-left">
        <template #aside>
      <b-form-checkbox
        checked="false"
        name="check-button"
        switch
        inline
      >        
      </b-form-checkbox>
        </template>
        <h4 class="media-heading">
      (**)****steve577
        </h4>
        <b-card-text>
      Email authentication
          </b-card-text>
           
      </b-media>
      
    </div>
</div>
</template>

<script>

import { BMedia, BImg, BCardText, BCard, BFormCheckbox  } from 'bootstrap-vue'

export default {
  components: {
    
    BImg,
    BMedia,    
    BCardText,
    BCard,
    BFormCheckbox,

  },
  data() {
    return {
      codeLeftAlign,
    }
  },
}
</script>
