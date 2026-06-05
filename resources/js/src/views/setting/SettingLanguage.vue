<template>

       <div class="whatsnew">
            <h2>Language</h2>          
                  <b-row class="match-height mt-2 textcenter"> 
           <b-col md="4"  offset-md="2">
               <b-card class="rules-loop">
                   <b-link :to="{name:'category'}">
        <b-img        
        :src="require('@/assets/images/settingicon/english.svg')"
        size="60"
      />        
          <h3 class="mb-0">English</h3>                 
          <p>United States</p>
        </b-link>
        </b-card>
           </b-col>
                      <b-col md="4">                          
                           <b-card class="rules-loop"> 
                               <b-link :to="{name:'categoryquit'}">
<b-img
          size="60"
        :src="require('@/assets/images/settingicon/hindi.svg')"
      />        
          <h3 class="mb-0">हिन्दी</h3>                 
          <p>भारत</p>
        </b-link>
         </b-card>
           </b-col>

       </b-row>
</div>
</template>

<script>

import { BRow, BCol, BMedia, BImg, BCardText, BCard, BButton, BLink,  } from 'bootstrap-vue'

export default {
  components: {    
    BImg,
    BMedia,    
    BCardText,
    BCard,
    BButton,
    BRow, 
    BCol,
    BLink,

  },
  data() {
    return {
      codeLeftAlign,
    }
  },
}
</script>
