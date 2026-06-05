<template>

<b-row class="match-height">
  <b-col lg="8 mx-auto"
        md="12">
  
  <div class="award all-award">    
        <h2>Awards</h2>         
    <p>Showing awards you earned or can earn by taking and completing new challenges</p>
    <b-link :to="{name:'awardshowitwork'}">How it works?</b-link>
    <div class="aw-score mt-3">
       <div class="global">
         <h3 class="mb-2">Awards Scrorecard</h3>
<b-img
            :src="require('@/assets/images/account/scrorecard.png')"
                                              
                    />   

       </div>
    <div class="d-flex justify-content-around align-items-center mt-3">
      <div>
        <h3 class="mb-0">12</h3>
        <h6 class="text-muted">Total</h6>        
      </div>
      <div class="text-center">
        <h3 class="mb-0">2</h3>
        <h6 class="text-muted">Gained</h6>        
      </div>
      <div class="text-right">
        <h3 class="mb-0">10</h3>
        <h6 class="text-muted">Pending</h6>        
      </div>
    </div>
    </div>
<!-- 
<b-row class="match-height mt-3">
    <b-col lg="6" >
        <div class="aw-left-box"   v-b-tooltip.hover.top="'Tooltip on top!'">
        <h5>Awards earned</h5> 
            <b-img
            :src="require('@/assets/images/account/award-earn.png')"
            blank-color="#ccc"
            width="65"
            alt="placeholder"
             rounded="circle"
                    />   
                    <p></p>
        </div>
    </b-col>
    <b-col lg="6">
         <div class="aw-left-box aw-right-box"   v-b-tooltip.hover.top="'Tooltip on top!'">
        <h5>Up Next</h5>
            <b-img
            :src="require('@/assets/images/account/award.svg')"
            blank-color="#ccc"
            width="65"
            alt="placeholder"
             rounded="circle"
          />   
          <p>Prima</p>
        </div>
    </b-col>
</b-row> -->

    <div class="media-list mt-3">            
      <h3 class="mt-2">Recently gained</h3>
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
          <span>11 Dec</span>        
        </template>
      <h3 class="pink">Prima</h3>
      <p>You gained this award by completing 1st 90 days challenge successfully</p>
      </b-media>
        <b-media vertical-align="top">
        <template #aside>
          <i>
          <b-img
            :src="require('@/assets/images/account/2_starter_color.png')"
            blank-color="#ccc"
            width="65"
            alt="placeholder"
             rounded="circle"
          /> 
          </i> 
          <span>28 Dec</span>        
        </template>
      <h3 class="blue">Starter</h3>
      <p>You gained this award by completing 1st 90 days challenge successfully</p>
      </b-media>
        <b-media vertical-align="top">
        <template #aside>
          <i>
          <b-img
            :src="require('@/assets/images/account/3_hifive_color.png')"
            blank-color="#ccc"
            width="65"
            alt="placeholder"
             rounded="circle"
          /> 
          </i> 
          <span>2 Jan</span>        
        </template>
      <h3 class="warning">Hifive</h3>
      <p>You gained this award by completing your 5th challenges successfully</p>
      </b-media>
        <b-media vertical-align="top">
        <template #aside>
          <i>
          <b-img
            :src="require('@/assets/images/account/4_decaten_color.png')"
            blank-color="#ccc"
            width="65"
            alt="placeholder"
             rounded="circle"
          /> 
          </i> 
          <span>17 Jan</span>        
        </template>
      <h3 class="red">Decaten</h3>
      <p>You gained this award by completing your 10th challenges successfully</p>
      </b-media>
      <div class="next-flow">
        <h3 class="mt-2">Up Next...</h3>
      <b-media vertical-align="top" class="dissable-aw">
        <template #aside>
          <i><b-img
            :src="require('@/assets/images/account/5_silvero_greyed.png')"
            blank-color="#ccc"
            width="65"
            alt="placeholder"
             rounded="circle"
          /> 
          </i>
          <span>25 Challenges</span>
        </template>        
      <h3>Silvero</h3>  
      <p>On completion Of your 25th challenge</p>
      </b-media>  
        <b-media vertical-align="top" class="dissable-aw">
        <template #aside>
          <i><b-img
            :src="require('@/assets/images/account/6_golda_greyed.png')"
            blank-color="#ccc"
            width="65"
            alt="placeholder"
             rounded="circle"
          /></i>
          <span>50 Challenges</span>
        </template>        
      <h3>Golda</h3>  
      <p>On completion Of your 50th challenge</p>
      </b-media>  
        <b-media vertical-align="top" class="dissable-aw">
        <template #aside>
          <i>
          <b-img
            :src="require('@/assets/images/account/7_platimen_greyed.png')"
            blank-color="#ccc"
            width="65"
            alt="placeholder"
             rounded="circle"
          />
          </i>
          <span>75 Challenges</span>
        </template>        
      <h3>Platimen</h3>  
      <p>On completion of your 75th challenge</p>
      </b-media>  
        <b-media vertical-align="top" class="dissable-aw">
          
        <template #aside>
          <i><b-img
            :src="require('@/assets/images/account/8_soldier_greyed.png')"
            blank-color="#ccc"
            width="65"
            alt="placeholder"
             rounded="circle"
          />
          </i>
          <span>100 Challenges</span>
        </template>        
      <h3>Soldier</h3>  
      <p>On completion of your 100th challenge</p>
      </b-media>   
<div class="note" style="background:#ffffff;">
<b-img
:src="require('@/assets/images/account/whiteloading.png')"
blank-color="#ccc"
width="45"                        
/>        
<b-card-text class="mt-1">Man is what he believes.</b-card-text>
</div> 
      </div>  
    </div>
  </div>

  <b-row>
  <b-col> <b-modal class="aw-model"
        id="modal-sm"
      cancel-variant="secondary"
      ok-only
      ok-title="."
      centered
      size="sm"      
    >
     <b-img
            :src="require('@/assets/images/account/award.svg')"
            blank-color="#ccc"
            width="65"
            alt="placeholder"
             rounded="circle"
          />
      <h3>Decaten</h3>
      <h4>10 Challenges</h4>
      <b-card-text>       
Congrats! You earned this award by taking 1st ever 21 days challenge.
sdfsdfsdfds
      </b-card-text>
    </b-modal></b-col> 
</b-row>
  </b-col>
  
</b-row>


</template>



<script>
import { BMedia, BImg, BCardText, BCard, BBadge, BAvatar, BButton, BCol, BRow, BModal, BLink,   } from 'bootstrap-vue'

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
    BModal,
    BLink,
    
    
  },
  data() {
    return {
      codeLeftAlign,
      
    }
  },
}
</script>
