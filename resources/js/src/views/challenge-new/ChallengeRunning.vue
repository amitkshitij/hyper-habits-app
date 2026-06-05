<template>


    <!-- profile info  -->
    <section id="profile-info">
      
      <b-row class="match-height"> 
        <!-- about suggested page and twitter feed -->
       <b-col md="8 mx-auto">
         <b-card class="blank-challenge challengeuser rules text-center">                   
        <b-row class="match-height chellenge-open">
             <b-col md="12">
               <i>
    <b-img
          size="100" width="100"
        :src="require('@/assets/images/challengepic/gymicon.svg')"
      />
      </i>
             <h2>Hit The Gym</h2>
             <p>2.8k Participated</p> 
                <b-alert variant="success" class="" show>
      <div class="alert-body">
        <span>Currently Active - 5 / 21 Days</span>
      </div>
    </b-alert>  
               </b-col>  
   <b-col md="6">
               <b-card class="rules-loop health ">
                   
                         <i> <b-img          
        :src="require('@/assets/images/challengepic/spinner.svg')"
      /></i>
        <b-card-text>
          <h3 class="large">Challenger</h3>         
       <h4>21 Days Challenge</h4>
       <p><span>Build Good Habit</span></p>    
        </b-card-text>        
           <b-button class="mb-1 mt-1" :to="{name:'completeddetail'}"
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant=""
        size="lg"
      >
      Currently Active
      </b-button>
      <p>1st out of 3 attempt is active</p>
        </b-card>        
           </b-col>
  <b-col md="6">
               <b-card class="rules-loop health disabled">
                                          
                                  <i>   <b-img
          size="100" width="100"
        :src="require('@/assets/images/challengepic/lock.svg')"
      /> </i>
        <b-card-text>
          <h3 class="large">Champion</h3> 
          <h4>90 Days Challenge</h4>    
          <span>Make A Lifestyle</span>
        </b-card-text>
         <b-button class="mb-1 mt-1" :to="{name:'completeddetail'}"
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant=""
        size="lg"
      >
       Locked
      </b-button>
      <p>1st out of 3 attempt is active</p>
   
        </b-card>        
           </b-col>
              
             </b-row>


               <div class="media-list award ab-level mt-3 text-left">            
      <b-media vertical-align="top" class="mt-2 award-disabled">        
        <template #aside>
          <b-img
            :src="require('@/assets/images/challengepic/award.png')"
            blank-color="#ccc"
            width="70"
            alt="placeholder"
             rounded="circle"
          />       
          <span>25 Dec</span>             
        </template>        
        <span>Up Next...</span>
      <h3>Prima </h3>
      <p>On successful completion of 1st 21 days challenge</p>
      </b-media>

    <b-button class="mt-2" :to="{name:'completeddetail'}"
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="primary"
        size="lg"
      >
       Select Another Challenge
      </b-button>
    </div>
      </b-card> 
      
       
    </b-col>
        <!--/ about suggested page and twitter feed -->

        
        <!--/ latest photos suggestion and polls -->        
        <!--/ load more  -->
      </b-row>
          
    </section>
    <!--/ profile info  -->

</template>

<script>
import { BRow, BCol, BCardText, BFormInput, BFormGroup, BButton, BImg, BAvatar, BCard, BInputGroup, BInputGroupPrepend, BSpinner, BLink, BMedia, BAlert, } from 'bootstrap-vue'


/* eslint-disable global-require */
export default {
  components: {
    BRow,
    BCol,
    BCardText,
    BButton,
    BImg,
    BAvatar,
    BCard,
    BFormInput, 
    BFormGroup,
    BInputGroup, 
    BInputGroupPrepend,
    BSpinner,
    BLink,
    BMedia,
    BAlert,
    
    
  },
}
/* eslint-disable global-require */
</script>


