<template>
<section>
<b-row class="match-height">
  <b-col lg="6"
        md="12">
   <div class="award">    
   <div class="d-flex justify-content-between align-items-start">
         
        <div class="d-flex user-left">
                <b-img
            :src="require('@/assets/images/account/leaderboard.png')"
            blank-color="#ccc"
            width="65"
            alt="placeholder"
             rounded="circle"
             right-align
          />
            <div class="mb-1">
              <h3 class="mb-0">
              Hi Mohan
              </h3>
              <span class="card-text">9899005522</span>
            </div>
           
          </div>

           <div class="d-flex flex-wrap user-right">
              <div><p>Status <feather-icon icon="AlertCircleIcon" /> </p> <span><feather-icon icon="AlertTriangleIcon" /> Unverified</span></div>
              <div><p>Rank <feather-icon icon="AlertCircleIcon" /> </p> <span><feather-icon icon="AwardIcon" /> 12,578</span></div>
              <div><p>Level <feather-icon icon="AlertCircleIcon" /> </p> <span><feather-icon icon="AwardIcon" /> <b-link :to="{name:'seeker'}">Seeker</b-link></span></div>
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
</b-row>

<b-row class="match-height">
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
     <div class="text-center mb-3">
      <b-avatar
          size="80"
          variant="light"
          :src="require('@/assets/images/account/leaderboard.png')"
        />
        <i>
          <b-img
          size="24"
          variant="light"
          :src="require('@/assets/images/account/flag.svg')"
          
        />
        </i>
  
    <h3 class="mt-2">Mohan Sharma</h3>
    <h6 class="text-muted">
 3 habtis
    </h6>    
    </div>

    <!-- follower projects rank -->
    <div class="d-flex justify-content-around align-items-center">
      <div>
        <h6 class="text-muted">
     New Delhi 
        </h6>
        <h3 class="mb-0">
   128
        </h3>
      </div>
      <div>
        <h6 class="text-muted">
       India
        </h6>
        <h3 class="mb-0">
        1,252
        </h3>
      </div>
      <div>
        <h6 class="text-muted">
         Global
        </h6>
        <h3 class="mb-0">
        54,547
        </h3>
      </div>
    </div>
    <!--/ follower projects rank -->
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
    </div>
  </b-card>
</div>
</b-col>
</b-row>
</section>
</template>

<script>
import { BMedia, BImg, BCardText, BCard, BBadge, BAvatar, BButton, BCol, BRow, BLink,  } from 'bootstrap-vue'

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
    
    
    
  },
  data() {
    return {
      codeLeftAlign,
      
    }
  },
}
</script>
