<template>
<section>
  
<b-row class="match-height">
  <b-col lg="8 mx-auto">
    <div class="award pricing">    
      <div class="pp-pic"> <b-img          
          :src="require('@/assets/images/account/pricing-pic.png')"
          
        /></div>
    <h3>Full Access</h3>     
    <p>Build the life you always dreamt of <b-link :to="{name:'pages-pricing-new'}" >New Pricing</b-link></p>     
    <ul>
    <li><i class="fas fa-check"></i> No. 1 habit tracker in India</li>
    <li><i class="fas fa-check"></i> Build good & quit bad habits</li>
    <li><i class="fas fa-check"></i> Unlimited challenges</li>
    <li> <i class="fas fa-check"></i> Based on science of 21/90 days</li>
    <li><i class="fas fa-check"></i> & motivational dashboard</li>
    </ul>

  <!-- <section
    v-if="Object.keys(pricing).length"
    id="pricing-plan"
  >
   
    <div class="text-center">
      <h1 class="mt-5">
        Pricing Plans
      </h1>
      <p class="mb-2 pb-75">
        All plans include 40+ advanced tools and features to boost your product. Choose the best plan to fit your needs.
      </p>
      <div class="d-flex align-items-center justify-content-center mb-5 pb-50">
        <h6 class="mr-1 mb-0">
          Monthly
        </h6>
        <b-form-checkbox
          id="priceSwitch"
          v-model="status"
          name="price-switch"
          value="annually"
          unchecked-value="monthly"
          switch
          @input="tooglePlan"
        />
        <h6 class="ml-50 mb-0">
          Annually
        </h6>
      </div>
    </div>
    
    <b-row class="pricing-card">
      <b-col
        offset-sm-2
        sm="12"
        md="12"
        offset-lg="2"
        lg="12"
        class="mx-auto"
      >
        <b-row>
          <b-col md="4">
            <b-card
              align="center"
            >
       
              <b-img
                v-if="pricing.basicPlan.img"
                :src="pricing.basicPlan.img"
                class="mb-2 mt-5"
                alt="basic svg img"
              />
         
              <h3>{{ pricing.basicPlan.title }}</h3>
              <b-card-text>
                {{ pricing.basicPlan.subtitle }}
              </b-card-text>

              <div class="annual-plan">
                <div class="plan-price mt-2">
                  <sup class="font-medium-1 font-weight-bold text-primary">$</sup>
                  <span class="pricing-basic-value font-weight-bolder text-primary">{{ monthlyPlanShow ? pricing.basicPlan.monthlyPrice:pricing.basicPlan.yearlyPlan.perMonth }}</span>
                  <sub class="pricing-duration text-body font-medium-1 font-weight-bold">/month</sub>
                </div>
                <small
                  v-show="!monthlyPlanShow"
                  class="annual-pricing text-muted"
                >USD {{ pricing.basicPlan.yearlyPlan.totalAnual }} / year</small>
              </div>
            
              <b-list-group class="list-group-circle text-left">
                <b-list-group-item
                  v-for="(data,index) in pricing.basicPlan.planBenefits"
                  :key="index"
                >
                  {{ data }}
                </b-list-group-item>
              </b-list-group>
           
              <b-button
                v-ripple.400="'rgba(40, 199, 111, 0.15)'"
                block
                class="mt-2"
                variant="outline-success"
              >
                Your current plan
              </b-button>
            </b-card>
          </b-col>
          <b-col md="4">
            <b-card
              class="popular"
              align="center"
            >
              <div
                v-show="pricing.standardPlan.popular"
                class="pricing-badge text-right"
              >
                <b-badge
                  variant="light-primary"
                  pill
                >
                  Popular
                </b-badge>
              </div>
        
              <b-img
                v-if="pricing.standardPlan.img"
                :src="pricing.standardPlan.img"
                class="mb-1"
                alt="svg img"
              />
            
              <h3>{{ pricing.standardPlan.title }}</h3>
              <b-card-text>{{ pricing.standardPlan.subtitle }}</b-card-text>

            
              <div class="annual-plan">
                <div class="plan-price mt-2">
                  <sup class="font-medium-1 font-weight-bold text-primary">$</sup>
                  <span class="pricing-basic-value font-weight-bolder text-primary">{{ monthlyPlanShow ? pricing.standardPlan.monthlyPrice:pricing.standardPlan.yearlyPlan.perMonth }}</span>
                  <sub class="pricing-duration text-body font-medium-1 font-weight-bold">/month</sub>
                </div>
                <small
                  v-show="!monthlyPlanShow"
                  class="annual-pricing text-muted"
                >USD {{ pricing.standardPlan.yearlyPlan.totalAnual }} / year</small>
              </div>
         
              <b-list-group class="list-group-circle text-left">
                <b-list-group-item
                  v-for="(data,index) in pricing.standardPlan.planBenefits"
                  :key="index"
                >
                  {{ data }}
                </b-list-group-item>
              </b-list-group>
           
              <b-button
                v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                block
                class="mt-2"
                variant="primary"
              >
                Upgrade
              </b-button>
            </b-card>
          </b-col>
          <b-col md="4">
            <b-card
              align="center"
            >
             
              <b-img
                v-if="pricing.enterprisePlan.img"
                :src="pricing.enterprisePlan.img"
                class="mb-2"
                alt="enterprise svg img"
              />
       
              <h3>{{ pricing.enterprisePlan.title }}</h3>
              <b-card-text>{{ pricing.enterprisePlan.subtitle }}</b-card-text>

            
              <div class="annual-plan">
                <div class="plan-price mt-2">
                  <sup class="font-medium-1 font-weight-bold text-primary">$</sup>
                  <span class="pricing-basic-value font-weight-bolder text-primary">{{ monthlyPlanShow ? pricing.enterprisePlan.monthlyPrice:pricing.enterprisePlan.yearlyPlan.perMonth }}</span>
                  <sub class="pricing-duration text-body font-medium-1 font-weight-bold">/month</sub>
                </div>
                <small
                  v-show="!monthlyPlanShow"
                  class="annual-pricing text-muted"
                >USD {{ pricing.enterprisePlan.yearlyPlan.totalAnual }} / year</small>
              </div>
       

              
              <b-list-group
                v-for="(data,index) in pricing.enterprisePlan.planBenefits"
                :key="index"
                class="list-group-circle text-left"
              >
                <b-list-group-item>
                  {{ data }}
                </b-list-group-item>
              </b-list-group>
             

         
              <b-button
                v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                block
                class="mt-2"
                variant="outline-primary"
              >
                Upgrade
              </b-button>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
    </b-row>    
  </section> -->




<h3 class="mt-3 mb-2">Choose a plan to start</h3>  
<div class="d-flex justify-content-between align-items-center price-loop active">
<div class="left-p">
<b-form-radio v-model="selected" class="check" checked=""  value="A"> 30 days</b-form-radio>  </div>       
<div class="right-p"> <h3><span>active</span> Free Trial</h3>
<p>Renews 26 Dec (monthly)</p>
</div>         
</div>
<div class="d-flex justify-content-between align-items-center price-loop">
<div class="left-p"><b-form-radio v-model="selected" class="check" value="A"> Monthly</b-form-radio></div>       
<div class="right-p"> <h3> $2.99</h3>
<p>Billed every month</p>
</div>         
</div>
<div class="d-flex justify-content-between align-items-center price-loop">
<div class="left-p"><b-form-radio v-model="selected" class="check" value="A"> Quarterly</b-form-radio> </div>       
<div class="right-p"> <h3> $9.99</h3>
<p>Billed every 3 months</p>
</div>         
</div>
<div class="d-flex justify-content-between align-items-center price-loop">
<div class="left-p"><b-form-radio v-model="selected" class="check" value="A"> Half Yearly</b-form-radio> </div>       
<div class="right-p"> <h3> $14.99</h3>
<p>Billed every 12 months</p>
</div>         
</div>

    <div class="d-flex justify-content-between align-items-center price-loop">
<div class="left-p"><b-form-radio v-model="selected" class="check" value="A"> Annual</b-form-radio> </div>       
<div class="right-p"> <h3><span class="pink">50% Off</span> $15 <em>$29.99</em></h3>
<p>Billed every 3 months</p>
</div>         
</div>
<div class="d-flex justify-content-between align-items-center price-loop">
  <div class="popular"><b-img          
          :src="require('@/assets/images/account/popular.png')"
          
        /></div>
<div class="left-p"><b-form-radio v-model="selected" class="check" value="A"> Lifetime</b-form-radio>  </div>       
<div class="right-p"> <h3><span class="yellow">25% Off</span> $75  <em>$99.99</em></h3>
<p>One time for a lifetime</p>
</div>         
</div>
<div class="d-flex justify-content-between align-items-center price-loop">
<div class="left-p"><b-form-radio v-model="selected" class="check" value="A"> Lifetime Pro</b-form-radio> </div>       
<div class="right-p"> <h3>$199.99</h3>
<p>Include future upgrades</p>
</div>         
</div> 
<div class="text-center mt-2 p-subtext">
<p>You’re currently under “Free Trial” plan and won’t be charged untill 26 Jan 2022, then $2.99 under monthly plan. Cancel anytime.</p>
<span>Already a paid member? <b-link> Restore purchase</b-link></span>
<b-card-text class="text-center">
<b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          type="submit" 
          variant=""    
          block              
          class="mt-2" 
        >
        Subscribe 
</b-button>
<p><b-link>Terms of service</b-link>|<b-link>Privacy Policy</b-link></p>
</b-card-text>
</div>    
</div>
</b-col>
</b-row>

</section>
</template>

<script>
import { BMedia, BImg, BCardText, BCard, BBadge, BAvatar, BButton, BCol, BRow, BLink, BFormRadio,  } from 'bootstrap-vue'

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
    BFormRadio,
    
    
  },
  data() {
    return {
      codeLeftAlign,
      selected: ['B', 'C'],
      codeCustom, 
    }
     
  },

   data() {
    return {
      status: 'monthly',
      monthlyPlanShow: true,
      pricing: {},
    }
  },
  created() {
    this.$http.get('/pricing/data').then(res => {
      this.pricing = res.data
    })
  },
  methods: {
    tooglePlan() {
      if (this.status === 'monthly') {
        this.monthlyPlanShow = true
      } else {
        this.monthlyPlanShow = false
      }
    },
  },
}
</script>
<style lang="scss">
@import '~@core/scss/vue/pages/page-pricing.scss';
</style>