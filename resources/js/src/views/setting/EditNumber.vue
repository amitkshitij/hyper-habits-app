<template>
  <b-form @submit.prevent>
      <b-row class="mt-2">
          <b-col cols="12">

    <b-row class="edit-profile">
      <b-col cols="6">
        <b-form-group
          label="Old Number"
          label-for="h-number"
          
        >
          <b-form-input
            id="h-number"
              type="number"
            placeholder="Old Number"
            size="lg"
          />
        </b-form-group>
      </b-col>
       <b-col cols="6">     
      </b-col>
       <b-col cols="6">
        <b-form-group
          label="New Number"
          label-for="h-number"
          
        >
          <b-form-input
            id="h-number"
              type="number"
            placeholder="New Number"
            size="lg"
          />
        </b-form-group>
      </b-col>
       <b-col cols="6">
        <b-form-group
          label="Retype New Number"
          label-for="h-number"
          
        >
          <b-form-input
            id="h-number"
              type="number"
            placeholder="Retype New Number"
            size="lg"
          />
        </b-form-group>
      </b-col>
      
     
        

      <!-- submit and reset -->
      <b-col>
<b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          variant="primary btn-pink"          
          size="lg"
          class="mt-1"
        >
         Change
        </b-button> 
      </b-col>
    </b-row>
</b-col>
      </b-row>
  </b-form>
</template>

<script>
import {
  BRow, BCol, BFormGroup, BFormInput, BFormCheckbox, BForm, BButton, BFormTextarea,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BFormCheckbox,
    BForm,
    BButton,
    BFormTextarea,
  },
  directives: {
    Ripple,
  },
}
</script>

  