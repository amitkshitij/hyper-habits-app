<template>  
<b-form @submit.prevent>

    <h2> How are we doing?</h2>
    <p>Report a bug or suggest ways to make Challenger App better</p>   
          <b-row>
    <b-col cols="8">
  <b-row>
  <b-col cols="12">
      <b-form-group
          label="Feedback"
          label-for="Feedback"
          label-cols-md="12"
        >
              <b-form-textarea
      id="textarea-default"
      placeholder="Textarea"
      rows="6"
    />
        </b-form-group>

        
  </b-col>
  
      <!-- submit and reset -->
      <b-col offset-md="12">

    <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          variant="primary btn-pink"          
          size="lg"
          class="mt-1"
        >
           Give Feedback
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
