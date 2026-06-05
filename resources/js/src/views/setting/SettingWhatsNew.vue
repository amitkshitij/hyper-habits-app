<template>

       <div class="whatsnew">
            <h2>What's New</h2>          
              <div class="media-list media-bordered wnewlist">    
      <b-media vertical-align="top">
        <template #aside>
          <b-img
            :src="require('@/assets/images/settingicon/wnewicon1.svg')"
            blank-color="#ccc"
            width="55"
            alt="placeholder"
             rounded="circle"
          />          
        </template>
        <h3 class="media-heading">
         Shop Launched
        </h3>
        <b-badge variant="warning">
       This is a brand new tab from where you can buy select books, planner and simialr product which might helps you to build a better life.
      </b-badge>          
      </b-media>
      <b-media vertical-align="top">
        <template #aside>
          <b-img
            :src="require('@/assets/images/settingicon/wnewicon2.svg')"
            blank-color="#ccc"
            width="55"
            alt="placeholder"
             rounded="circle"
          />
        </template>
        <h3 class="media-heading">
         Other Features
        </h3>
        <b-badge variant="success">
        <ul>
        <li><i>⋅</i> Now you can archive challenges      
        </li>
        <li><i>⋅</i> Clear current plan status</li>
        <li><i>⋅</i> Improved Start New Channel journey</li>
        <li><i>⋅</i> Reduced app size from 25 MB to 12 MB</li>
        </ul> 
      </b-badge>    
      </b-media>
      <b-media vertical-align="top">
        <template #aside>
          <b-img
            :src="require('@/assets/images/settingicon/wnewicon3.svg')"
            blank-color="#ccc"
            width="55"
            alt="placeholder"
             rounded="circle"
          />
        </template>
        <h3 class="media-heading">
        Bug Fixes
        </h3>
          <b-badge variant="blue">
       We polished a few things, fixed bugs & made performance improvements to make Challenger experience bettter
      </b-badge>        
      </b-media>
    <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          variant="primary btn-pink"          
          size="lg"
          class="mt-2"
        >
          Okay, Got it
        </b-button>     

    </div>
</div>
</template>

<script>

import { BMedia, BImg, BCardText, BCard, BButton,  } from 'bootstrap-vue'

export default {
  components: {
    
    BImg,
    BMedia,    
    BCardText,
    BCard,
    BButton,

  },
  data() {
    return {
      codeLeftAlign,
    }
  },
}
</script>
