<template>
  <b-card class="s-rate">
    <b-row class="pb-50">

      <!-- text and button -->
      <b-col
        sm="12"        
      >
<h3 class="mb-2">Success Report</h3>
   <b-img
                    
          :src="require('@/assets/images/dashboard/report.png')"
          
        /> 

        <p>This box shows your success ratio in compare to the number of challenges taken since you joined</p>
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
