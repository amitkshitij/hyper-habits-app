<template>

       <div class="whatsnew">
            <h2>Notification Setting</h2>
          
   
<div><h3 class="mt-3">General Settings</h3>
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
     Date & Time of Challenges
Hold a white paper in your hand write your name date on it with pen.
        </h4>          
    
      </b-media>
     

      
    </div>
<h3 class="mt-3">Challenge Settings</h3>
<div class="media-list media-bordered wnewlist">  
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
Show “Enable Notifications” Settings
        </h4>      
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
All Log Reminders
        </h4>              
          </b-media>
</div>


<h3 class="mt-3">Quotes Notifications</h3>
<div class="media-list media-bordered wnewlist mt-2">  
 <b-row class="mt-2">
          <b-col lg="12">
  <b-form-radio
        v-model="Selected"
        name="some-radio9"
        value="e"
        class="custom-control-primary"
      >
      Daily, 11 AM
      </b-form-radio>
        <b-form-radio
        v-model="Selected"
        name="some-radio9"
        value="f"
        class="custom-control-primary"
      >
    Every Mon, 9:45 AM
      </b-form-radio>
          <b-form-radio
        v-model="Selected"
        name="some-radio9"
        value="g"
        class="custom-control-primary"
      >
  Every Mon, Thu 8 AM
      </b-form-radio>
          </b-col>
      </b-row>
</div>


<h3 class="mt-3">Tips Notifications</h3>
<div class="media-list media-bordered wnewlist mt-2">  
 <b-row class="mt-2">
          <b-col lg="12">
  <b-form-radio
        v-model="Selected"
        name="some-radio9"
        value="e"
        class="custom-control-primary"
      >
      Daily, 11 PM
      </b-form-radio>
        <b-form-radio
        v-model="Selected"
        name="some-radio9"
        value="f"
        class="custom-control-primary"
      >
    Every Mon, 9:45 PM
      </b-form-radio>
          <b-form-radio
        v-model="Selected"
        name="some-radio9"
        value="g"
        class="custom-control-primary"
      >
  Every Mon, Thu 4 PM
      </b-form-radio>
        <b-form-radio
        v-model="Selected"
        name="some-radio9"
        value="g"
        class="custom-control-primary"
      >
Every Mon, Thu 8 AM
      </b-form-radio>
        <b-form-radio
        v-model="Selected"
        name="some-radio9"
        value="g"
        class="custom-control-primary"
      >
  Disappear tips after 24 HRS
      </b-form-radio>
          </b-col>
      </b-row>
</div>
</div>

</div>
</template>

<script>

import { BMedia, BImg, BCardText, BCard, BFormRadio, BFormCheckbox  } from 'bootstrap-vue'

export default {
  components: {
    
    BImg,
    BMedia,    
    BCardText,
    BCard,
    BFormCheckbox,
    BFormRadio,

  },
  data() {
    return {
      codeLeftAlign,
    }
  },
}
</script>
