<template>  
<b-form @submit.prevent>

    <h2>Rating</h2> 
    <p>Tap a star to rate our app</p>      
          <b-row>
    <b-col cols="12">
  <b-row>
    <b-col cols="12"> 
    <b-form-rating style="padding-left:0px; font-size:30px;"
      id="rating-inline"
      inline
      no-border
      variant="warning"
      value="4"
    />
    </b-col>
      <!-- submit and reset -->
      <b-col offset-md="12">
           <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          variant="primary btn-pink"          
          size="lg"
          class="mt-2"
        >
        Submit
        </b-button> 

      </b-col>
  </b-row>
    </b-col>
          </b-row>
</b-form>
  
  
</template>

<script>

import {BRow, BCol, BFormGroup, BFormInput,  BFormRating, BCardText, BFormTextarea, BButton, } from 'bootstrap-vue'


export default {
  components: {
    BRow, 
    BCol,
    BFormRating,
    BCardText,
    BFormTextarea,
    BFormGroup, BFormInput, 
    BButton,
  },
  data() {
    return {
      codeInline,
    }
  },
}
</script>
