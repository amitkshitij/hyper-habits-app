<template>
<section>
  
<b-row class="match-height">
  <b-col lg="8 mx-auto">
    <div class="award">    
    <h2>Account <b-link :to="{name:'accountprofile'}"><i class="fas fa-eye"></i> View Profile</b-link></h2>         
   <b-card class="leaderboard">
     <div class="text-center mb-3 mt-2">
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
          
        /> 9899005522
    </h6>    
    </div>

    <!-- follower projects rank -->
    <div class="d-flex justify-content-between align-items-center acc-profile">        
        <div class="text-left"><p>Status <i class="fas fa-exclamation-circle" v-b-tooltip.hover.top="'Your profile verification status'" ></i> </p> <span><i class="fas fa-exclamation-triangle"></i> Unverified</span> <span><i class="fas fa-badge-check"></i> <b-link>Verify Now</b-link></span></div>              
              <div class="text-left"><p>Level <i class="fas fa-exclamation-circle" v-b-tooltip.hover.top="'Your current level'"></i></p> <span><i class="fas fa-user"></i> Seeker</span> <span><i class="fas fa-mountains"></i> <b-link :to="{name:'seeker'}">User Levels</b-link></span></div>
              <div class="text-left"><p>Rank <i class="fas fa-exclamation-circle" v-b-tooltip.hover.top="'Your rank in India'"></i></p> <span><i class="fas fa-rocket"></i> 12,578</span> <span><i class="fas fa-clipboard"></i> <b-link  :to="{name:'leaderboard'}">See Leaderboard</b-link></span></div>
    </div>
<b-row>
 <b-col lg="12"  md="12">
      <div class="award trial mt-3">    
   <div class="d-flex">
         
        <div class="d-flex user-left align-items-center">
            <div class="left-trial"><span>28</span>
            <em>DAYS LEFT</em>
            </div>
            <div class="">
              <h6 class="mb-0">
            <span> On Trial</span> Started on 27 Nov 2021
              </h6>
              <span class="card-text">Trial expires on 26 Dec (28 days)</span>
            </div>
           
          </div>     
        </div>
            <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          type="submit"                   
          class="mr-1 light-warning text-center" :to="{name:'pages-pricing'}"
        >
        <i class="fas fa-crown mr-1"></i> See Pricing + Upgrade <i><feather-icon icon="ChevronRightIcon" /></i>
        </b-button>
   </div>
  </b-col>  
</b-row>


<b-row class="match-height">
  <b-col lg="12"
        md="12">
  <div class="mt-3">    
    <h3 class="large">Awards <b-link :to="{name:'award'}">View all</b-link></h3>     
    <p>Showing awards you earned or can earn by taking and completing new challenges</p>

    <div class="media-list award-last">    
      <h4 class="mt-2">Last award gained <span>(1 gained)</span></h4>
      <b-media vertical-align="top">
        <template #aside>
          <i>
          <b-img
            :src="require('@/assets/images/account/1_prima_color.png')"
            blank-color="#ccc"
            width="65"
            alt="placeholder"
             rounded="circle"
          /> 
          </i> 
          <span>25 Dec</span>        
        </template>
      <h3 class="pink">Prima</h3>
      <p>You gained this award by completing 1st 21 days challenge successfully</p>
      </b-media>
        <h4 class="mt-2">Up Next... <span> (11 more to go)</span></h4>
      <b-media vertical-align="top" class="dissable-aw">
        <template #aside>
          <b-img
            :src="require('@/assets/images/account/award.png')"
            blank-color="#ccc"
            width="65"
            alt="placeholder"
             rounded="circle"
          />
        </template>        
      <h3>Starter</h3>  
      <p>On completion of your 1st 90 days challlenge</p>
      </b-media>
    </div>
  </div>
  </b-col>
  <b-col lg="12"
        md="12">
    <div class="mt-3">    
    <h3 class="large">Leaderboard <b-link :to="{name:'leaderboard'}">View all</b-link></h3>     
    <p>Your rank among people taking challenges around the world</p>



   <b-card class="leaderboard">
    <!-- follower projects rank -->
    <div class="global mb-2"><b-badge variant="light-danger">Pramila (you)</b-badge>    
    <i><b-img :src="require('@/assets/images/account/polygen.svg')" /></i>
    </div>
    <b-col  lg="12" 
        md="12">
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
<div class="global">
<div class="mb-3"><b-badge variant="light-danger">Global Top Performers</b-badge>   <i><b-img :src="require('@/assets/images/account/polygen.svg')" /></i> </div>
        <div class="d-flex justify-content-around align-items-center mt-1">                
      <div>
         <em>#2</em>
         <b-avatar
          size="65"
          variant="light"
          :src="require('@/assets/images/account/user.png')"
        />
        <i>
          <b-img
          size="24"
          variant="light"
          :src="require('@/assets/images/account/flag.png')"
          
        />
        </i>
        <h3 class="mb-0">Tanishq</h3>        
        <h6 class="text-muted">18 challenges</h6>                
      </div>
      <div style="margin:-48px 0 0 0">
        <em>#1</em>
         <b-avatar
          size="65"
          variant="light"
          :src="require('@/assets/images/account/user-one.png')"
        />
        <i>
          <b-img
          size="24"
          variant="light"
          :src="require('@/assets/images/account/flag-one.png')"
          
        />
        </i>
         <h3 class="mb-0">Kate</h3>        
        <h6 class="text-muted">U.K.</h6>                
      </div>
      <div>
        <em>#3</em>
         <b-avatar
          size="65"
          variant="light"
          :src="require('@/assets/images/account/user-two.png')"
        />
        <i>
          <b-img
          size="24"
          variant="light"
          :src="require('@/assets/images/account/flag-two.png')"
          
        />
        </i>
         <h3 class="mb-0">Alizeh</h3>        
        <h6 class="text-muted">9 challenges</h6>                
      </div>
    </div>

    <b-button variant="primary mt-2" size="lg">+  Start New Challenge</b-button>
    </div>
  </b-card>
</div>
</b-col>
</b-row>

      <!-- <b-row class="mt-3">
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
    </b-row> -->
    <!-- <b-row>
       <b-col lg="12"
        md="12" class="mt-3">
  <div class="profile-award">    
    <h3>Awards <b-link :to="{name:'award'}">View all</b-link></h3>     
    <p>Showing awards you earned or can earn by taking and completing new challenges</p>

  <div class="d-flex justify-content-around align-items-center mt-3 text-center ">
      <div> 
<b-img width="90"
          variant="light"          
          :src="require('@/assets/images/account/1_prima_color.png')"
          
        />
    <h4> Prima</h4>
    <p>24 Nov</p> 
      </div>
      <div>
        <b-img   width="90"
          variant="light"            
          :src="require('@/assets/images/account/2_starter_color.png')"
          
        />
        <h4> Starter</h4>
       <p>11 Dec</p> 
      </div>
      <div>
        <b-img   width="90"
          variant="light"
          :src="require('@/assets/images/account/6_golda_greyed.png')"
          
        />
        <h4>Starter</h4>
       <p>Up Next...</p> 
      </div>
    </div>
  </div>
  </b-col>
    </b-row> -->

    <!-- <b-row>
      <b-col lg="12"
        md="12" class="mt-3">
    <div class="profile-award">    
    <h3>Leaderboard <b-link :to="{name:'leaderboard'}">View all</b-link></h3>     
    <p>Your rank among people taking challenge</p>

   <b-card class="leaderboard">
    <div class="global"><b-badge variant="light-danger">Pramila (you)</b-badge>   </div>
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
   </b-card>
    </div>
      </b-col>
    </b-row> -->
    <!--/ follower projects rank -->

  </b-card>
</div>
</b-col>
</b-row>
<!-- <b-row class="match-height">
  <b-col lg="6"
        md="12">
   <div class="award">    
   <div class="d-flex justify-content-between align-items-start">
         
        <div class="d-flex user-left">
                <b-img
            :src="require('@/assets/images/account/leader.jpg')"
            blank-color="#ccc"
            width="65"
            alt="placeholder"
             rounded="circle"
             right-align
          />
            <div class="mb-1">
              <h3 class="mb-0">
             Pramila Dhyanipen
              </h3>
              <span class="card-text">9899005522</span>
              <b-link :to="{name:'accountprofile'}">Profile</b-link>
            </div>
           
          </div>

           <div class="user-right">
              <div><p>Status <feather-icon icon="AlertCircleIcon" /> </p> <span><feather-icon icon="AlertTriangleIcon" /> Unverified</span></div>              
              <div><p>Level <feather-icon icon="AlertCircleIcon" /> </p> <span><feather-icon icon="AwardIcon" /> <b-link :to="{name:'seeker'}">Seeker</b-link></span></div>
              <div><p>Rank <feather-icon icon="AlertCircleIcon" /> </p> <span><feather-icon icon="AwardIcon" /> 12,578</span></div>
            </div>
     
        </div>
   </div>
  </b-col>
  <b-col lg="6"
        md="12">
      <div class="award trial">    
   <div class="d-flex">
         
        <div class="d-flex user-left">
            <div class="left-trial"><span>28</span>
            <em>DAYS LEFT</em>
            </div>
            <div class="mb-1">
              <h6 class="mb-0">
            <span> On Trial</span> Started on 27 Nov 2021
              </h6>
              <span class="card-text">Trial expires on 26 Dec (28 days)</span>
            </div>
           
          </div>     
        </div>
            <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          type="submit"   
          variant="warning"       
          class="mr-1 light-warning"
        >
         See Pricing + Upgrade <i><feather-icon icon="ChevronRightIcon" /></i>
        </b-button>
   </div>
  </b-col>
</b-row> -->

<!-- <b-row class="match-height">
  <b-col lg="6"
        md="12">
  <div class="award">    
    <h3>Awards <b-link :to="{name:'award'}">View all</b-link></h3>     
    <p>Showing awards you earned or can earn by taking and completing new challenges</p>

    <div class="media-list">    
      <h4 class="mt-2">Last award gained</h4>
      <b-media vertical-align="top">
        <template #aside>
          <i>
          <b-img
            :src="require('@/assets/images/account/award-completed.png')"
            blank-color="#ccc"
            width="65"
            alt="placeholder"
             rounded="circle"
          /> 
          </i> 
          <span>11 Dec</span>        
        </template>
      <h4 class="blue">Starter</h4>
      <p>You gained this award by completing 1st 90 days challenge successfully</p>
      </b-media>
        <h4 class="mt-2">Up Next...</h4>
      <b-media vertical-align="top" class="dissable-aw">
        <template #aside>
          <b-img
            :src="require('@/assets/images/account/award.png')"
            blank-color="#ccc"
            width="65"
            alt="placeholder"
             rounded="circle"
          />
        </template>        
      <h4>Decaten</h4>  
      <p>On completion of your 10th challlenge</p>
      </b-media>
    </div>
  </div>
  </b-col>
  <b-col lg="6"
        md="12">
    <div class="award">    
    <h3>Leaderboard <b-link :to="{name:'leaderboard'}">View all</b-link></h3>     
    <p>Your rank among people taking challenge</p>

   <b-card class="leaderboard">

    
    <div class="global"><b-badge variant="light-danger">Pramila (you)</b-badge>   </div>
    <div class="d-flex justify-content-around align-items-center">
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
    
<div class="global">
<div><b-badge variant="light-danger">Global Top Performers</b-badge>   </div>
        <div class="d-flex justify-content-around align-items-center">
                
      <div>
         <em>#2</em>
         <b-avatar
          size="65"
          variant="light"
          :src="require('@/assets/images/account/user.png')"
        />
        <i>
          <b-img
          size="24"
          variant="light"
          :src="require('@/assets/images/account/flag.svg')"
          
        />
        </i>
        <h3 class="mb-0">Thanos</h3>        
        <h6 class="text-muted">18 challenges</h6>        
        <h6 class="text-muted">6 awards</h6>        
      </div>
      <div>
        <em>#1</em>
         <b-avatar
          size="65"
          variant="light"
          :src="require('@/assets/images/account/user-one.png')"
        />
        <i>
          <b-img
          size="24"
          variant="light"
          :src="require('@/assets/images/account/flag.svg')"
          
        />
        </i>
         <h3 class="mb-0">Kate</h3>        
        <h6 class="text-muted">27 challenges</h6>        
        <h6 class="text-muted">11 awards</h6> 
      </div>
      <div>
        <em>#3</em>
         <b-avatar
          size="65"
          variant="light"
          :src="require('@/assets/images/account/user-two.png')"
        />
        <i>
          <b-img
          size="24"
          variant="light"
          :src="require('@/assets/images/account/flag.svg')"
          
        />
        </i>
         <h3 class="mb-0">Alizeh</h3>        
        <h6 class="text-muted">9 challenges</h6>        
        <h6 class="text-muted">5 awards</h6> 
      </div>
    </div>

    <b-button variant="primary mt-2">+  Start New Challenge</b-button>
    </div>
  </b-card>
</div>
</b-col>
</b-row> -->
</section>
</template>

<script>
import { BMedia, BImg, BCardText, BCard, BBadge, BAvatar, BButton, BCol, BRow, BLink,  VBTooltip, } from 'bootstrap-vue'

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
    VBTooltip,
    
    
    
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
