<template>
<section>
  
<b-row class="match-height">
  <b-col lg="8 mx-auto">
    <div class="award pricing">    
    <h3>Full Access</h3>     
    <p>Build the life you always dreamt of</p>     
    <ul>
    <li><feather-icon icon="CheckIcon" /> No. 1 habit tracker in India</li>
    <li><feather-icon icon="CheckIcon" /> Build good & quit bad habits</li>
    <li><feather-icon icon="CheckIcon" /> Unlimited challenges</li>
    <li> <feather-icon icon="CheckIcon" /> Based on science of 21/90 days</li>
    <li><feather-icon icon="CheckIcon" /> & motivational dashboard</li>
    </ul>

<h3 class="mt-3 mb-2">Choose a plan to start</h3>  
<div class="d-flex justify-content-between align-items-center price-loop">
<div class="left-p">
<b-form-checkbox v-model="selected" class="check" value="A"> 30 days</b-form-checkbox>  </div>       
<div class="right-p"> <h3><span>active</span> Free Trial</h3>
<p>Renews 26 Dec (monthly)</p>
</div>         
</div>
<div class="d-flex justify-content-between align-items-center price-loop">
<div class="left-p"><b-form-checkbox v-model="selected" class="check" value="A"> Monthly</b-form-checkbox></div>       
<div class="right-p"> <h3> $2.99</h3>
<p>Billed every month</p>
</div>         
</div>
<div class="d-flex justify-content-between align-items-center price-loop">
<div class="left-p"><b-form-checkbox v-model="selected" class="check" value="A"> Quarterly</b-form-checkbox> </div>       
<div class="right-p"> <h3> $9.99</h3>
<p>Billed every 3 months</p>
</div>         
</div>
<div class="d-flex justify-content-between align-items-center price-loop">
<div class="left-p"><b-form-checkbox v-model="selected" class="check" value="A"> Half Yearly</b-form-checkbox> </div>       
<div class="right-p"> <h3> $14.99</h3>
<p>Billed every 12 months</p>
</div>         
</div>

    <div class="d-flex justify-content-between align-items-center price-loop">
<div class="left-p"><b-form-checkbox v-model="selected" class="check" value="A"> Annual</b-form-checkbox> </div>       
<div class="right-p"> <h3><span class="pink">50% Off</span> $15 <em>$29.99</em></h3>
<p>Billed every 3 months</p>
</div>         
</div>
    <div class="d-flex justify-content-between align-items-center price-loop">
<div class="left-p"><b-form-checkbox v-model="selected" class="check" value="A"> Lifetime</b-form-checkbox>  </div>       
<div class="right-p"> <h3><span class="yellow">25% Off</span> $75  <em>$99.99</em></h3>
<p>One time for a lifetime</p>
</div>         
</div>
<div class="d-flex justify-content-between align-items-center price-loop">
<div class="left-p"><b-form-checkbox v-model="selected" class="check" value="A"> Lifetime Pro</b-form-checkbox> </div>       
<div class="right-p"> <h3>$199.99</h3>
<p>Include future upgrades</p>
</div>         
</div>     
 
</div>

</b-col>
</b-row>

</section>
</template>

<script>
import { BMedia, BImg, BCardText, BCard, BBadge, BAvatar, BButton, BCol, BRow, BLink, BFormCheckbox,  } from 'bootstrap-vue'

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
    BFormCheckbox,
    
    
  },
  data() {
    return {
      codeLeftAlign,
      selected: ['B', 'C'],
      codeCustom, 
    }
     
  },
}
</script>
