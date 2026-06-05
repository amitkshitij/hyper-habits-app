<template>
<section>
<b-row class="match-height">
  
  <b-col lg="8 mx-auto"
        md="12">
    <div class="award">    
    <h2>User Levels</h2>     
    <p>Your rank among people taking challenge</p>

   <b-card class="leaderboard">
     <div class="text-center mb-3">
    <b-avatar
          size="144"
          variant="light"
          :src="require('@/assets/images/account/leader.jpg')"
        />        
        
  
    <h3 class="mt-2">Pramila Dhyani</h3>
    <div class="premium-btn" style="margin:0px;"><b-badge variant="warning"><i class="fas fa-user"></i> Seeker</b-badge></div>
    </div>

    <!-- follower projects rank -->
    <div class="d-flex justify-content-around align-items-center text-center seeker">
      <div>
        <h3 class="mb-0">7</h3>
        <h6 class="text-muted">21 days</h6>        
        <h6 class="text-muted">challanges</h6>
      </div>
      <div>
        <h3 class="mb-0">4</h3>
        <h6 class="text-muted">91 days</h6>        
        <h6 class="text-muted"> challanges</h6>
      </div>
      <div>
        <h3 class="mb-0">8</h3>
        <h6 class="text-muted">Awards </h6>        
        <h6 class="text-muted">Earned</h6>
      </div>     
      
    </div>
    <div class="seeker mt-3 text-center">
     <p>You just need to complete 3 more <strong>challenges</strong> to gain Challenger level and 1 challenges for <strong>Champion</strong> level</p>
      <b-img                    
          :src="require('@/assets/images/account/seekers.png')"
        />  
      </div> 
        <div class="media-list ab-level mt-3">    
        <h3 class="large">About levels</h3>  
        <p>Here are some details about the levels</p>
      <b-media vertical-align="top" class="mt-2">        
        <template #aside>
          <b-img
            :src="require('@/assets/images/account/seeker-icon1.svg')"
            blank-color="#ccc"
            width="55"
            alt="placeholder"
             rounded="circle"
          />          
        </template>
      <h3>Seeker  <b-badge variant="outline-warning">Student of Life</b-badge>   </h3>
      <p>Welcome aboard, Kishore. Seeker is not a badge perhaps a recognition that you're ready to be the best version of You. Adventure awaits.</p>
      </b-media>
      <b-media vertical-align="top" class="mt-2">
        <template #aside>
          <b-img
            :src="require('@/assets/images/account/seeker-icon2.svg')"
            blank-color="#ccc"
            width="55"
            alt="placeholder"
             rounded="circle"
          />
        </template>
        <h3>Challenger  <b-badge variant="outline-primary">Master of Body</b-badge>   </h3>
      <p>You gain this badge when you complete 10 or more than 10 challenges of 21 days, no conditions applied. Stop living the life you don't like. Bring it on.</p>
      </b-media>
      <b-media vertical-align="top" class="mt-2">
        <template #aside>
          <b-img
            :src="require('@/assets/images/account/seeker-icon3.svg')"
            blank-color="#ccc"
            width="55"
            alt="placeholder"
             rounded="circle"
          />
        </template>
       <h3>Champion  <b-badge variant="outline-pink b-pink">Master of Mind</b-badge>   </h3> 
      <p>You earn this award after completing 5 or more than 5 challenger of 90 days on the app. And that's a huge achievement, a feat can only be done by someone who had conquered the mind.</p>
      </b-media>
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
