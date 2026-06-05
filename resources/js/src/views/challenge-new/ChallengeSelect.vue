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

             <b-row class="mt-3">
               <b-col>
                <p><b-link :to="{name:'completeddetail'}" style="margin:10px 10px; ">When Both Challenges Completed</b-link></p>
                <p><b-link :to="{name:'challengerunning'}" style="margin:10px 10px;">21 Day When Challenges Are Already Active</b-link></p>
                <p><b-link :to="{name:'challengerunning90day'}" style="margin:10px 10px;">90 Day When Challenges Are Already Active</b-link></p>
                <p><b-link :to="{name:'open'}" style="margin:10px 10px;">21 Days Challenge option is Active</b-link></p>
                <p><b-link :to="{name:'open90day'}" style="margin:10px 10px;">90 Days Challenge Option is Active</b-link></p>                
                <p><b-link :to="{name:'challengefailed'}" style="margin:10px 10px;">21 Days Failed Attempts Logic</b-link></p>
                <p><b-link :to="{name:'challenge90dayfailed'}" style="margin:10px 10px;">90 Days Failed Attempts Logic</b-link></p>
                 
               </b-col>
             </b-row>

                          <b-row class="mt-5">
             <b-col md="12">
             <h3>Health</h3>
             <p>4229 people are taking about these challenges</p>   
               </b-col>  
   <b-col md="4">
               <b-card class="rules-loop health">
                  
        <b-img        
        :src="require('@/assets/images/challengepic/health-icon1.svg')"
        size="60"
      />        
          <h4>7 Minutes Workout</h4>         
          <b-card-text>
       7.4k participated
        </b-card-text>

        </b-card>
           </b-col>
                 <b-col md="4">
               <b-card class="rules-loop health">
                  
        <b-img        
        :src="require('@/assets/images/challengepic/health-icon2.svg')"
        size="60"
      />
          <h4>Hit The Gym</h4>       
          <b-card-text>
         4.3k participated 
        </b-card-text>

        </b-card>
           </b-col>
                 <b-col md="4">
               <b-card class="rules-loop health">
                 
        <b-img        
        :src="require('@/assets/images/challengepic/health-icon3.svg')"
        size="60"
      />
          <h4>Yoga Everyday</h4>         
             <b-card-text>
          2.7k participated
        </b-card-text>
 
        </b-card>
           </b-col>
             </b-row>
             <b-row class="mt-5">
             <b-col md="12">
             <h3>Trending</h3>
             <p>Top 3 challenges in your city</p>   
               </b-col>  
   <b-col md="4">
               <b-card class="rules-loop health">
                  
        <b-img        
        :src="require('@/assets/images/challengepic/trending-icon1.svg')"
        size="60"
      />
        
          <h4>7 Minutes Workout</h4>         
          <b-card-text>
       7.4k participated
        </b-card-text>

        </b-card>
           </b-col>
                 <b-col md="4">
               <b-card class="rules-loop health">
               
        <b-img        
        :src="require('@/assets/images/challengepic/trending-icon2.svg')"
        size="60"
      />        
          <h4>Hit The Gym</h4>       
          <b-card-text>
         4.3k participated 
        </b-card-text>

        </b-card>
           </b-col>
                 <b-col md="4">
               <b-card class="rules-loop health">
     
        <b-img        
        :src="require('@/assets/images/challengepic/trending-icon3.svg')"
        size="60"
      />        
          <h4>Yoga Everyday</h4>         
          <b-card-text>
          2.7k participated
        </b-card-text>

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
               
        <b-img        
        :src="require('@/assets/images/challengepic/all-icon1.svg')"
        size="60"
      />
          <h4>Burn some calories</h4>         
<b-card-text>
       7.4k participated
        </b-card-text>

        </b-card>
           </b-col>
                 <b-col md="4">
               <b-card class="rules-loop health">
           
        <b-img        
        :src="require('@/assets/images/challengepic/all-icon2.svg')"
        size="60"
      />        
          <h4>Morning walk</h4>       
          <b-card-text>
         4.3k participated 
        </b-card-text>
 
        </b-card>
           </b-col>
                 <b-col md="4">
               <b-card class="rules-loop health">
                 
        <b-img        
        :src="require('@/assets/images/challengepic/all-icon3.svg')"
        size="60"
      />
        
          <h4>Family Time</h4>         
          <b-card-text>
          2.7k participated
        </b-card-text>
   
        </b-card>
           </b-col>
           <b-col md="4">
               <b-card class="rules-loop health">
                
        <b-img        
        :src="require('@/assets/images/challengepic/all-icon4.svg')"
        size="60"
      />
        
          <h4>Burn some calories</h4>         
          <b-card-text>
       7.4k participated
        </b-card-text>

        </b-card>
           </b-col>
                 <b-col md="4">
               <b-card class="rules-loop health">
                  
        <b-img        
        :src="require('@/assets/images/challengepic/all-icon5.svg')"
        size="60"
      />
        
          <h4>Morning walk</h4>       
          <b-card-text>
         4.3k participated 
        </b-card-text>
     
        </b-card>
           </b-col>
                 <b-col md="4">
               <b-card class="rules-loop health">
                  
        <b-img        
        :src="require('@/assets/images/challengepic/all-icon6.svg')"
        size="60"
      />
        
          <h4>Family Time</h4>  
          <b-card-text>       
          2.7k participated
        </b-card-text>

        </b-card>
           </b-col>
   <b-col md="12"  class="mt-2 text-center" >
               <b-spinner label="Loading..." />
            </b-col>

            <b-col md="12" class="mt-2">
                <b-button variant="" :to="{name:'custom'}"
                block                                     
                size="lg"                
                class="custom-btn" 

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


