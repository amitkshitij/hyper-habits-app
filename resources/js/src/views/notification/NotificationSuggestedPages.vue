<template>
  <b-card class="all-notification">     
    <h2>Notifications</h2>
    <h5>Today</h5>
    <div class="media-list media-bordered">    
      <b-media vertical-align="top">
        <template #aside>
          <b-img
            :src="require('@/assets/images/notificationicon/earn.png')"
            blank-color="#ccc"
            width="45"
            alt="placeholder"
             rounded="circle"
          />          
        </template>
        <h4 class="media-heading">
         You earned this award for completing your first ever 21 days challenge
        </h4>
        <b-badge variant="warning">
      Award Earned   
      </b-badge>    
      <span>Just now</span>
      </b-media>
      <b-media vertical-align="top">
        <template #aside>
          <b-img
            :src="require('@/assets/images/notificationicon/challenge.png')"
            blank-color="#ccc"
            width="45"
            alt="placeholder"
             rounded="circle"
          />
        </template>
        <h4 class="media-heading">
         Congrats! You have successfully completed the 21 days meditation challenge
        </h4>
          <b-badge variant="success">
       Challenge Completed
      </b-badge>    
      <span>1 min</span>
      </b-media>   
      
    </div>
    <h5>Yesterday</h5>
    <div class="media-list media-bordered">    
      <b-media vertical-align="top">
        <template #aside>
          <b-img
             :src="require('@/assets/images/notificationicon/failed.png')"
            blank-color="#ccc"
            width="45"
            alt="placeholder"
             rounded="circle"
          />
        </template>
        <h4 class="media-heading">
      Sorry! You have failed completing the meditation challenge
        </h4>
        <b-badge variant="danger">
    Challenge Failed
      </b-badge>    
      <span>17:01 PM</span>
      </b-media>
      <b-media vertical-align="top">
        <template #aside>
          <b-img
             :src="require('@/assets/images/notificationicon/welcome.png')"
            blank-color="#ccc"
            width="45"
            alt="placeholder"
             rounded="circle"
          />
        </template>
        <h4 class="media-heading">
 Welcome Kishore, start your day by adding a new challenge
        </h4>
          <b-badge variant="warning">
     Welcome 
      </b-badge>    
      <span>9:30 AM</span>
      </b-media>    
       <b-media vertical-align="top">
        <template #aside>
          <b-img
             :src="require('@/assets/images/notificationicon/decide.png')"
            blank-color="#ccc"
            width="45"
            alt="placeholder"
             rounded="circle"
          />
        </template>
        <h4 class="media-heading">
Day one or one day, you decide. Proscrasination sucks
        </h4>
          <b-badge variant="success">
     Congratulations 
      </b-badge>    
      <span>8:30 AM</span>
      </b-media>    
    </div>

      <h5>18 Nov </h5>
    <div class="media-list media-bordered">    
        <b-media vertical-align="top">
        <template #aside>
          <b-img
             :src="require('@/assets/images/notificationicon/plan.png')"
            blank-color="#ccc"
            width="45"
            alt="placeholder"
             rounded="circle"
          />
        </template>
        <h4 class="media-heading">
         Plan upgraded. You’re the creator of your own destiny
        </h4>
          <b-badge variant="pink">
   Plan Upgraded
      </b-badge>    
      <span>25 Nov • 2:11 PM</span>
      </b-media>
      

        <div>
<div class="note">
<b-img
:src="require('@/assets/images/notificationicon/loading.png')"
blank-color="#ccc"
width="45"                        
/>        
<b-card-text class="mt-1">Character is simply habit long continued.</b-card-text>
</div>
      
      </div> 
    </div>

    

  </b-card>
</template>

<script>

import { BMedia, BImg, BCardText, BCard, BBadge,  } from 'bootstrap-vue'

export default {
  components: {
    BImg,
    BMedia,    
    BCardText,
    BCard,
    BBadge,
  },
  data() {
    return {
      codeLeftAlign,
    }
  },
}
</script>
