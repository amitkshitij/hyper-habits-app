<template>
  <b-card class="card quote">
    <b-row class="pb-50">

      <!-- text and button -->
      <b-col
        sm="12" 
        white       
      >
<h3 class="mb-2">Quote of the day</h3>
<p>When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.</p>
<span>Helen Keller</span>
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
