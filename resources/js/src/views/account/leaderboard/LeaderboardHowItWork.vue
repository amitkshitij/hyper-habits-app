<template>
<section>


<b-row class="match-height">
  <b-col lg="8 mx-auto">
    <div class="award how-it-work">    
    <h2>Take challenges to earn awards</h2>     
    <p>What does it take to get to the top of the leader board? These are some of the things that you have to take care of.</p>
    <div class="media-list mt-2">            
      <b-media vertical-align="top">
        <template #aside>
          <b-img
            :src="require('@/assets/images/account/lhowitworkicon1.svg')"
            blank-color="#ccc"
            width="55"
            alt="placeholder"
             rounded="circle"
          />          
        </template>
     <h3>City Rankings</h3> 
      <p>This shows your and others rankings in your city.</p>
      </b-media>
      <b-media vertical-align="top">
        <template #aside>
          <b-img
            :src="require('@/assets/images/account/lhowitworkicon2.svg')"
            blank-color="#ccc"
            width="55"
            alt="placeholder"
             rounded="circle"
          />
        </template>
       <h3>Country Rankings</h3>  
      <p>See your rankings in India under this section.</p>
      </b-media>
      <b-media vertical-align="top">
        <template #aside>
          <b-img
            :src="require('@/assets/images/account/lhowitworkicon3.svg')"
            blank-color="#ccc"
            width="55"
            alt="placeholder"
             rounded="circle"
          />
        </template>
        <h3>Global Rankings</h3>
      <p>Compare your rank with others globally in realtime.</p>
      </b-media>     
    </div>
</div>
</b-col>
</b-row>
</section>
</template>

<script>
import { BMedia, BImg, BCardText, BCard, BBadge, BAvatar, BButton, BCol, BRow, BLink, BTabs, BTab,  } from 'bootstrap-vue'

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
}
</script>
