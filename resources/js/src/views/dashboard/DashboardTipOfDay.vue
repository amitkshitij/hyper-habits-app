<template>
  <b-card class="card top-off">
    <b-row class="pb-50">

      <!-- text and button -->
      <b-col
        sm="12"        
      >
<div class="poll-icon"><b-img :src="require('@/assets/images/settingicon/tip-icon.svg')" /></div>        
<h3 class="mb-2">Tip of the day</h3>
<span>Managing Reminders</span>
<p>To turn off daily log reminders go to Challenges tab, click one of them, open Challenge Setting and turn of the unwanted reminders.</p>
<b-button variant="warning">
Okay Noted
</b-button>
</b-col>

     
    </b-row>    

    <!-- progress bar -->

  </b-card>
</template>

<script>
import {
  BCard, BRow, BCol, BButton, BImg,
} from 'bootstrap-vue'


export default {
  components: {    
    BCard,
    BRow,
    BCol,
    BButton,
    BImg,    
  },

}
</script>
