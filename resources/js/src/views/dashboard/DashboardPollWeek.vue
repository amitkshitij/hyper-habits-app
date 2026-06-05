<template>
  <b-card class="card poll-week">
    <b-row class="pb-50">

      <!-- text and button -->
      <b-col
        sm="12"        
      >
<div class="poll-icon"><b-img :src="require('@/assets/images/settingicon/poll.svg')" /></div>      
<h3 class="mb-2">Weekly Poll</h3>
<span>By Admin · 17 mins ago</span>
<p class="mb-2">Hi, Do you keep your photo on your CV/ Resume?</p>
<ul>
<li><b-form-radio v-model="selected" class="check" value="A"> Yes, I keep a photo</b-form-radio></li>    
<li><b-form-radio v-model="selected" class="check" value="A"> No, I don't prefer photo</b-form-radio></li>    
<li><b-form-radio v-model="selected" class="check" value="A"> I have both with & W/O Pic</b-form-radio></li>    
<li><b-form-radio v-model="selected" class="check" value="A"> I am a poll spoiler 🤣 🤣</b-form-radio></li>    
</ul>
<em>6.5k votes • 2 days 23 hrs left</em>
</b-col>
</b-row>    
<!-- progress bar -->
</b-card>
</template>

<script>
import {
  BCard, BRow, BCol, BButton, BImg, BFormRadio,
} from 'bootstrap-vue'


export default {
  components: {    
    BCard,
    BRow,
    BCol,
    BButton,
    BImg,    
    BFormRadio,
  },

}
</script>
