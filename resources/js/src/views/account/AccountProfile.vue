<template>
<section>


<b-row class="match-height">
  <b-col lg="8 mx-auto">
    <div class="award">    
    <h2>Account Profile</h2>     
    <p>Your rank among people taking challenge <b-link :to="{name:'sorry'}">Sorry</b-link> <b-link :to="{name:'oops'}">Oops</b-link></p>     
   <b-card class="leaderboard">
   <div class="text-center mb-2 mt-2">
      <b-avatar
          size="144"
          variant="light"
          :src="require('@/assets/images/account/leader.jpg')"
        />
        <div class="premium-btn"><b-badge variant="success"><i class="fas fa-crown"></i> Premium</b-badge></div>
  
    <h3 class="mt-2">Pramila Dhyani</h3>
    <h6 class="text-muted">
    <b-img
          size="24"
          variant="light"
          :src="require('@/assets/images/account/flag.svg')"
          
        /> New Delhi, India
    </h6>    
    </div>

    <!-- follower projects rank -->
    <div class="d-flex justify-content-around align-items-center acc-profile">        
        <div class="text-left"><p>Status <i class="fas fa-exclamation-circle" v-b-tooltip.hover.top="'Your profile verification status'" ></i> </p> <span><i class="fas fa-badge-check"></i> Verified</span> </div>              
              <div class="text-left"><p>Level <i class="fas fa-exclamation-circle" v-b-tooltip.hover.top="'Your current level'"></i></p> <span><i class="fas fa-mountains"></i> Challenger</span> </div>
              <div class="text-left"><p>Rank <i class="fas fa-exclamation-circle" v-b-tooltip.hover.top="'Your rank in India'"></i></p> <span><i class="fas fa-trophy"></i> 578</span></div>
    </div>


      <b-row class="mt-3">
      <b-col md="6">
    <div class="box-one">
     <i>  <b-img
          size="24"
          variant="light"
          :src="require('@/assets/images/account/box-icon1.svg')"
          
        /></i>
      <h2>7</h2>
      <p>Good habits built</p>
    </div>
      </b-col>
      <b-col md="6">
     <div class="box-one box-two">
     <i>  <b-img
          size="24"
          variant="light"
          :src="require('@/assets/images/account/box-icon2.svg')"
          
        /></i>
      <h2>3</h2>
      <p>Quit bad habits</p>
    </div>
      </b-col>
      <b-col md="6">          
   <div class="box-one box-three">
     <i>  <b-img
          size="24"
          variant="light"
          :src="require('@/assets/images/account/box-icon3.svg')"
          
        /></i>
      <h2>1</h2>
      <p>Habits to lifestyle</p>
    </div>
      </b-col>
      <b-col md="6">
<div class="box-one box-four" >
     <i>  <b-img
          size="24"
          variant="light"
          :src="require('@/assets/images/account/box-icon4.svg')"
          
        /></i>
      <h2>5</h2>
      <p>Award earned</p>
    </div>
      </b-col>
    </b-row>
    <b-row>
       <b-col lg="12"
        md="12" class="mt-3">
  <div class="profile-award">    
    <h3 class="large">Awards <b-link :to="{name:'award'}">View all</b-link></h3>     
    <p>Showing awards you earned or can earn by taking and completing new challenges</p>

  <div class="d-flex justify-content-around align-items-center mt-3 text-center ">
      <div> 
<b-img width="90"
          variant="light"          
          :src="require('@/assets/images/account/public-award-one.png')"
          
        />
    <h3 class="pink"> Prima</h3>
    <p>24 Nov</p> 
      </div>
      <div>
        <b-img   width="90"
          variant="light"            
          :src="require('@/assets/images/account/public-award-two.png')"
          
        />
        <h3 class="blue">  Starter</h3>
       <p>11 Dec</p> 
      </div>
      <div>
        <b-img   width="90"
          variant="light"
          :src="require('@/assets/images/account/public-award-three.png')"
          
        />
        <h3 class="gray">Starter</h3>
       <p>Up Next...</p> 
      </div>
    </div>
  </div>
  </b-col>
    </b-row>

    <b-row>
      <b-col lg="12"
        md="12" class="mt-3">
    <div class="mt-3">    
    <h3 class="large">Leaderboard <b-link :to="{name:'leaderboard'}">View all</b-link></h3>     
    <p>Your rank among people taking challenges around the world</p>

   <b-card class="leaderboard">


    <!-- follower projects rank -->
    <div class="global mb-2"><b-badge variant="light-danger">Pramila (you)</b-badge>    
    <i><b-img :src="require('@/assets/images/account/polygen.svg')" /></i>
    </div>
    <b-col  lg="10" offset-md="1"
        md="10">
    <div class="d-flex justify-content-around align-items-center border">
      <div>
        <h6 class="text-muted">
     New Delhi 
        </h6>
        <h3 class="mb-0">
   128
        </h3>
      </div>
      <div class="text-center">
        <h6 class="text-muted">
       India
        </h6>
        <h3 class="mb-0">
        1,252
        </h3>
      </div>
      <div class="text-right">
        <h6 class="text-muted">
         Global
        </h6>
        <h3 class="mb-0">
        54,547
        </h3>
      </div>
    </div>
    </b-col>
    <!--/ follower projects rank -->
  </b-card>
</div>
      </b-col>
    </b-row>
    <!--/ follower projects rank -->

  </b-card>
</div>
</b-col>
</b-row>
</section>
</template>

<script>
import { BMedia, BImg, BCardText, BCard, BBadge, BAvatar, BButton, BCol, BRow, BLink, BTabs, BTab, VBTooltip } from 'bootstrap-vue'

export default {
  components: {    
    BImg,
    BMedia,    
    BCardText,
    BCard,
    BBadge,
    BAvatar,
    BButton,
    BCol, 
    BRow,
    BLink,
    BTabs,
    BTab,
    

    
    
    
  },
  data() {
    return {
      codeLeftAlign,
      
    }
  },
     directives: {
    'b-tooltip': VBTooltip,
    
  },

  
}
</script>
