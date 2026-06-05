<template>
  <div class="challenges-step challengeuser" style="padding:30px;">
    <h2 class="mb-2">Challenges</h2>
    <b-tabs class="tab-fill"
      fill
      pills
      
    >
      <b-tab
        title="Active"
        active
      >
       <b-img
        width="200"        
        :src="require('@/assets/images/challengepic/ca-user-one.svg')"
      />        
          <h3>No Active Challenges</h3>
        <p>No active challenges found, start
your first challenge now</p>        
         <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="primary"  :to="{ name: 'user'}"
        size="lg"
      >
       <font-awesome-icon icon="fa-solid fa-plus" /> Start New Challenge
      </b-button>
      <em><b>Truly Scientific</b></em>      
      <i><b-img        
        :src="require('@/assets/images/challengepic/midarrow.svg')"
      />      
      </i>
      </b-tab>
      <b-tab title="Completed">
           <b-img
        width="200"         
        :src="require('@/assets/images/challengepic/ca-user-two.svg')"
      />
        
          <h3>No Completed Challenges</h3>
        <p>So far you’ve not completed any 
challenge. Let’s get started.</p>        
         <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="success"  
        size="lg"
      >
        <font-awesome-icon icon="fa-solid fa-plus" /> Start New Challenge
      </b-button>
        <em><b>Truly Scientific</b></em>      
      <i><b-img        
        :src="require('@/assets/images/challengepic/midarrow.svg')"
      /> </i>
      </b-tab>
  
      <b-tab title="Failed">
         <b-img
        width="200" 
        :src="require('@/assets/images/challengepic/ca-user-three.svg')"
      />        
          <h3>No Failed Challenges</h3>
        <p>No failed challenges found, and
that’s a good thing :)</p>
        <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="danger"
        size="lg"
      >
         <font-awesome-icon icon="fa-solid fa-plus" /> Start New Challenge
      </b-button>
       <em><b>Truly Scientific</b></em>      
      <i><b-img        
        :src="require('@/assets/images/challengepic/midarrow.svg')"
      /> </i>
      </b-tab>
    </b-tabs>


  </div>
</template>

<script>

import { BTabs, BTab, BCardText,BButton,BAvatar,BImg, } from 'bootstrap-vue'
import { codeFill } from './code'

export default {
  components: {  
    BCardText,
    BTabs,
    BTab,
    BImg,
    BButton,
    BAvatar,
  },
  data() {
    return {
      codeFill,
    }
  },
}
</script>
