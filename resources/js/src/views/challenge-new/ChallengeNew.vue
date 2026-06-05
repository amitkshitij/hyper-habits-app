<template>
  <b-row>
    <b-col lg="8 mx-auto">
      <challenge-new-data />
    </b-col>

  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'

import ChallengeNewData from './ChallengeNewData.vue'

export default {
  components: {    
    BRow,
    BCol,    
    ChallengeNewData,    
    
  },
  
}
</script>
