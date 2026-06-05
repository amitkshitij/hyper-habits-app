<template>


    <!-- profile info  -->
    <section id="profile-info">
      
      <b-row class="match-height"> 
        <!-- about suggested page and twitter feed -->
       <b-col md="8 mx-auto">
         <b-card class="blank-challenge challengeuser rules text-left">                   
             <b-row>
             <b-col md="8">
             <h2>Challenge Title</h2>
             <p>Provide name for your challenge</p>   
    <div class="icon-search-wrapper mx-auto">
      <b-form-group>
        <b-input-group class="input-group-merge">       
          <b-form-input
            id="icons-search"
            v-model="seachQuery"
            size="lg"
            placeholder="Enter suitable title"
          />
        </b-input-group>
      </b-form-group>
    </div>
      <b-button :to="{name:'icon'}"
                variant="primary"               
                >Continue</b-button>
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


