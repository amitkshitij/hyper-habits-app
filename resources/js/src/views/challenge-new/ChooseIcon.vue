<template>


    <!-- profile info  -->
    <section id="profile-info">
      
      <b-row class="match-height"> 
        <!-- about suggested page and twitter feed -->
       <b-col md="8 mx-auto">
         <b-card class="blank-challenge challengeuser rules text-left">                   
             <b-row>
             <b-col md="12">
            <h2>Choose Icon</h2>
             <p>Choose a suitable icon to identify challenge</p>   

             <ul class="mt-0 icon-list-loop">
                 <li><a href="#"><span><b-img    
        :src="require('@/assets/images/challengepic/check.svg')"
      /></span> <b-img
        size="lg"
        :src="require('@/assets/images/challengepic/choose-icon1.png')"
      /></a></li>
                 <li><a href="#"><span><b-img    
        :src="require('@/assets/images/challengepic/check.svg')"
      /></span><b-img
        size="lg"
        :src="require('@/assets/images/challengepic/choose-icon2.png')"
      /></a></li>
                 <li><a href="#"><span><b-img    
        :src="require('@/assets/images/challengepic/check.svg')"
      /></span><b-img
        size="lg"
        :src="require('@/assets/images/challengepic/choose-icon3.png')"
      /></a></li>
                 <li><a href="#"><span><b-img    
        :src="require('@/assets/images/challengepic/check.svg')"
      /></span><b-img
        size="lg"
        :src="require('@/assets/images/challengepic/choose-icon4.png')"
      /></a></li>
                 <li><a href="#"><span><b-img    
        :src="require('@/assets/images/challengepic/check.svg')"
      /></span><b-img
        size="lg"
        :src="require('@/assets/images/challengepic/choose-icon5.png')"
      /></a></li>
                 <li><a href="#"><span><b-img    
        :src="require('@/assets/images/challengepic/check.svg')"
      /></span><b-img
        size="lg"
        :src="require('@/assets/images/challengepic/choose-icon6.png')"
      /></a></li>
                 <li><a href="#"><span><b-img    
        :src="require('@/assets/images/challengepic/check.svg')"
      /></span><b-img
        size="lg"
        :src="require('@/assets/images/challengepic/choose-icon7.png')"
      /></a></li>
                 <li><a href="#"><span><b-img    
        :src="require('@/assets/images/challengepic/check.svg')"
      /></span><b-img
        size="lg"
        :src="require('@/assets/images/challengepic/choose-icon8.png')"
      /></a></li>
                 <li><a href="#"><span><b-img    
        :src="require('@/assets/images/challengepic/check.svg')"
      /></span><b-img
        size="lg"
        :src="require('@/assets/images/challengepic/choose-icon9.png')"
      /></a></li>
             </ul>
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


