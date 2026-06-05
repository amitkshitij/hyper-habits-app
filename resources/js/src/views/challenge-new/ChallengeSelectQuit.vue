<template>


    <!-- profile info  -->
    <section id="profile-info">
      
      <b-row class="match-height"> 
        <!-- about suggested page and twitter feed -->
       <b-col md="8 mx-auto">
         <b-card class="blank-challenge challengeuser rules text-left">                   
             <b-row>
             <b-col md="8">
             <h2>Select Challenge</h2>
             <p>Focus on the problem you want to solve</p>   
    <div class="icon-search-wrapper mx-auto">
      <b-form-group>
        <b-input-group class="input-group-merge">
          <b-input-group-prepend is-text>
            <feather-icon icon="SearchIcon" />
          </b-input-group-prepend>
          <b-form-input
            id="icons-search"
            v-model="seachQuery"
            size="lg"
            placeholder="Search Icons..."
          />
        </b-input-group>
      </b-form-group>
    </div>

        </b-col>   
        <b-col md="12">
            <ul class="search-list">
                <li>
                    <a href="#">Wellness</a><a href="#">Sleep</a><a href="#">Gym</a><a href="#">Kids</a><a href="#">Finances</a>
                </li>
            </ul>
        </b-col> 
             </b-row>

                          <b-row class="mt-5">
             <b-col md="12">
             <h3>Trending</h3>
             <p>217 people are taking about these challenges</p>   
               </b-col>  
   <b-col md="4">
               <b-card class="rules-loop health">
                   <b-link :to="{name:'open'}"> 
        <b-img        
        :src="require('@/assets/images/challengepic/quit-icon1.png')"
        size="60"
      />
        <b-card-text>
          <h4>Quit Alcohal</h4>         
      7.4k participated
        </b-card-text>
        </b-link>
        </b-card>
           </b-col>
                 <b-col md="4">
               <b-card class="rules-loop health">
                   <b-link :to="{name:'open'}"> 
        <b-img        
        :src="require('@/assets/images/challengepic/quit-icon2.png')"
        size="60"
      />
        <b-card-text>
          <h4>Quit Smoking</h4>       
         4.3k participated 
        </b-card-text>
        </b-link>
        </b-card>
           </b-col>
                 <b-col md="4">
               <b-card class="rules-loop health">
                   <b-link :to="{name:'open'}">
        <b-img        
        :src="require('@/assets/images/challengepic/quit-icon3.png')"
        size="60"
      />
        <b-card-text>
          <h4>Quit Tobacco</h4>         
          2.7k participated
        </b-card-text>
        </b-link>
        </b-card>
           </b-col>
             </b-row>
             
             <b-row class="mt-5">
             <b-col md="12">
             <h3>All challenges</h3>
             <p>List of all challlenges, arranged alphabetically</p>   
               </b-col>  
   <b-col md="4">
               <b-card class="rules-loop health">
                   <b-link :to="{name:'open'}"> 
        <b-img        
        :src="require('@/assets/images/challengepic/choose-icon1-challenge.png')"
        size="60"
      />
        <b-card-text>
          <h4>Wake Up on Time</h4>         
       7.4k participated
        </b-card-text>
        </b-link>
        </b-card>
           </b-col>
                 <b-col md="4">
               <b-card class="rules-loop health">
                   <b-link :to="{name:'open'}"> 
        <b-img        
        :src="require('@/assets/images/challengepic/choose-icon2-challenge.png')"
        size="60"
      />
        <b-card-text>
          <h4>No Sugar</h4>       
         4.3k participated 
        </b-card-text>
        </b-link>
        </b-card>
           </b-col>
                 <b-col md="4">
               <b-card class="rules-loop health">
                   <b-link :to="{name:'open'}">
        <b-img        
        :src="require('@/assets/images/challengepic/choose-icon3-challenge.png')"
        size="60"
      />
        <b-card-text>
          <h4>No Credit Card</h4>         
          2.7k participated
        </b-card-text>
        </b-link>
        </b-card>
           </b-col>
           <b-col md="4">
               <b-card class="rules-loop health">
                   <b-link :to="{name:'open'}"> 
        <b-img        
        :src="require('@/assets/images/challengepic/choose-icon4-challenge.png')"
        size="60"
      />
        <b-card-text>
          <h4>No Instagram</h4>         
       7.4k participated
        </b-card-text>
        </b-link>
        </b-card>
           </b-col>
                 <b-col md="4">
               <b-card class="rules-loop health">
                   <b-link :to="{name:'open'}"> 
        <b-img        
        :src="require('@/assets/images/challengepic/choose-icon5-challenge.png')"
        size="60"
      />
        <b-card-text>
          <h4>No Facebook</h4>       
         4.3k participated 
        </b-card-text>
        </b-link>
        </b-card>
           </b-col>
                 <b-col md="4">
               <b-card class="rules-loop health">
                   <b-link :to="{name:'open'}">
        <b-img        
        :src="require('@/assets/images/challengepic/choose-icon6-challenge.png')"
        size="60"
      />
        <b-card-text>
          <h4>Sleep on Time</h4>         
          2.7k participated
        </b-card-text>
        </b-link>
        </b-card>
           </b-col>
   <b-col md="12"  class="mt-2 text-center" >
               <b-spinner label="Loading..." />
            </b-col>

            <b-col md="12" class="mt-2">
                <b-button :to="{name:'custom'}"
                block                
                >+ Add custom challenge</b-button>
            </b-col>
             </b-row>
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
import { BRow, BCol, BCardText, BFormInput, BFormGroup, BButton, BImg, BAvatar, BCard, BInputGroup, BInputGroupPrepend, BSpinner, BLink, } from 'bootstrap-vue'


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
    
    
    
  },
}
/* eslint-disable global-require */
</script>


