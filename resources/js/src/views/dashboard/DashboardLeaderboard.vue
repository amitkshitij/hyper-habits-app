<template>
  <b-card class="card d-award">
      <b-row class="pb-50">
       <b-col lg="12"
        md="12">
  <div class="profile-award">    
    <h3 class="mb-1">Leaderboard <b-link :to="{name:'leaderboard'}">View all</b-link></h3>     
    <p>Your rank among people taking challenges around the world</p>
   <div class="border text-center"><b-img
          size="24"
          variant="light"
          :src="require('@/assets/images/dashboard/daward.svg')"
          
        />
        <p>You haven’t gained any award yet</p>
        </div>
        <div class="text-center">
        <b-button variant="primary" :to="{name:'user'}" style="float:none;" class="mt-2" size="lg">            
<font-awesome-icon icon="fa-solid fa-plus" /> Start New Challenge
</b-button>
</div>
  </div>
  </b-col>
    </b-row>

    <!-- progress bar -->

  </b-card>
</template>

<script>
import {
  BCard, BRow, BCol, BButton, BImg, BLink,
} from 'bootstrap-vue'


export default {
  components: {    
    BCard,
    BRow,
    BCol,
    BButton,
    BImg,    
    BLink,
  },

}
</script>
