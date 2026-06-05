<template>
  <b-card>
    <b-row class="pb-50">

      <!-- text and button -->
      <b-col
        sm="12"        
      >
        <h3 class="mb-1">Profile Overview</h3>
<div class="overview-list">
<div>Profile completion</div>  
<div><span>20% Done</span> <font-awesome-icon icon="fa-solid fa-circle-check" /></div>  
</div>

<div class="overview-list">
<div>Profile photo</div>  
<div><span>Pending</span> <font-awesome-icon icon="fa-solid fa-triangle-exclamation" /></div>  
</div>

<div class="overview-list">
<div>1st 21 days challenge</div>  
<div><span>Pending</span> <font-awesome-icon icon="fa-solid fa-triangle-exclamation" /></div>  
</div>

<div class="overview-list">
<div>1st 90 days challenge</div>  
<div><span>Pending</span> <font-awesome-icon icon="fa-solid fa-triangle-exclamation" /></div>  
</div>

<div class="overview-list">
<div>First award</div>  
<div><span>Pending</span> <font-awesome-icon icon="fa-solid fa-triangle-exclamation" /></div>  
</div>

<div class="overview-list">
<div>Profile verification</div>  
<div><span>Pending</span> <font-awesome-icon icon="fa-solid fa-triangle-exclamation" /></div>  
</div>


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
