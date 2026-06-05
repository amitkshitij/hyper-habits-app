<template>
<section>


<b-row class="match-height">
  <b-col lg="8 mx-auto">
    <div class="award">    
    <h2>Leaderboard</h2>     
    <p>Your rank among people taking challenge</p>


   <b-card class="leaderboard mt-5">
     <div class="leaderboard-inner">
     <div class="text-center mb-3 top-user">
      <b-avatar
          size="80"
          variant="light"
          :src="require('@/assets/images/account/leader.jpg')"
        />
        <i>
          <b-img
          size="24"
          variant="light"
          :src="require('@/assets/images/account/flag.svg')"
          
        />
        </i>
  
    <h3 class="mt-1">Pramila (You)</h3>   
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
     <div class="text-center mt-2 leader-list">
        <ul>
          <li> <i class="fas fa-mountains"></i>  18 challenges</li>
          <li> <i class="fas fa-trophy"></i> 6 awards</li>
        </ul>
      </div>
      </div>
      <div class="text-center mt-2" style="color:$pink; font-size:18px;"><b-link :to="{name:'leaderboardhowitwork'}" >How it works?</b-link></div>

    <!--/ follower projects rank -->

  </b-card>

  <b-tabs class="tab-fill mt-5"
      fill
      pills
      
    >
      <b-tab
        title="Global"
        active
      >
      <div class="">
<b-card class="leaderboard">
    <!-- follower projects rank -->

  
    <!--/ follower projects rank -->
<div class="global mb-3">
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
    </div>
  </b-card>
    </div>
      <global-content />
               
      </b-tab>
      <b-tab title="Country">
<div class="global mb-3">
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
    </div>
 
       <country-content />
      
      </b-tab>
  
      <b-tab title="City">   
    <div class="global mb-3">
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
    </div>
        <city-content />               
      </b-tab>
    </b-tabs>
</div>
</b-col>
</b-row>
</section>
</template>

<script>
import { BMedia, BImg, BCardText, BCard, BBadge, BAvatar, BButton, BCol, BRow, BLink, BTabs, BTab,  } from 'bootstrap-vue'
import GlobalContent from './GlobalContent.vue'
import CityContent from './CityContent.vue'
import CountryContent from './CountryContent.vue'
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
    GlobalContent,
    CountryContent,
    CityContent,
    

  },
  data() {
    return {
      codeLeftAlign,
      
    }
  },
}
</script>
