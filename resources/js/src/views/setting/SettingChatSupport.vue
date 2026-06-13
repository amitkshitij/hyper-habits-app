<template>
  <section
    v-if="Object.keys(pricing).length"
    id="pricing-plan"
  >
<h2>Hi Pramila</h2>
    <p>Hyper Habits is a simple to use lifestyle app which helps you build great habits & breaking bad ones</p>   
      <b-img   class="mt-1"     
        :src="require('@/assets/images/settingicon/user-chat.png')"
      
      />  
      <div>
       <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          variant="primary btn-pink"          
          size="lg"
          class="mt-2"
        >
        <i><b-img  class="mr-1"    
        :src="require('@/assets/images/settingicon/paper-plane.svg')"
      
      /> </i> Send New Message
        </b-button>  
        </div>




    <!-- pricing faq -->
    <div class="pricing-faq mt-4">
      <h3 class="">
      Frequently Asked Questions
      </h3>      
      <b-row class="">
        <b-col
          lg="12"          
          class="mx-auto"
        >
          <app-collapse
            accordion
            type="margin"
          >

            <app-collapse-item
              v-for="(data,index) in pricing.qandA"
              :key="index"
              :title="data.question"
            >
              {{ data.ans }}
            </app-collapse-item>
          </app-collapse>
        </b-col>
      </b-row>
    </div>
    <!--/ pricing faq -->
  </section>
</template>

<script>
import {
  BFormCheckbox,
  BRow,
  BCol,
  BCard,
  BImg,
  BCardText,
  BListGroup,
  BListGroupItem,
  BButton,
  BBadge,
} from 'bootstrap-vue'
import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'
import Ripple from 'vue-ripple-directive'
/* eslint-disable global-require */
export default {
  components: {
    BFormCheckbox,
    BButton,
    BCardText,
    BListGroup,
    BListGroupItem,
    BRow,
    BCol,
    BCard,
    BBadge,
    BImg,
    AppCollapseItem,
    AppCollapse,
  },
  directives: {
    Ripple,
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

}
/* eslint-disable global-require */
</script>

<style lang="scss">
@import '~@core/scss/vue/pages/page-pricing.scss';
</style>
