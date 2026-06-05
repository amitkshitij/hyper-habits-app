<template>
  <section id="dashboard-analytics">

<b-row>
  
<b-col lg="8" md="12" class="mx-auto">
  <b-row class="match-height">
      <b-col
        lg="6"
        md="12"
      >
        <dashboard-congratulation :data="data.congratulations" />        
      </b-col>
      <b-col
        lg="6"
        sm="6"
      >
     <b-card
    v-if="data"
    text-variant="center"
    class="card date-user" style="padding:1.5rem;"
  >
<b-row>
      <b-col md="6" style="padding-right:12px;">
    <div class="box-one">
     <i>  <b-img
          width="35"
          variant="light"
          :src="require('@/assets/images/account/box-icon1.svg')"
          
        /></i>
      <h2>0</h2>
      <p>Good habits <br> built</p>
    </div>
      </b-col>
      <b-col md="6" style="padding-left:12px;">
     <div class="box-one box-two">
     <i>  <b-img
          width="35"
          variant="light"
          :src="require('@/assets/images/account/box-icon2.svg')"
          
        /></i>
      <h2>0</h2>
      <p>Quit <br> bad habits</p>
    </div>
      </b-col>
      <b-col md="6" style="padding-right:12px;">          
   <div class="box-one box-three">
     <i>  <b-img
          width="35"
          variant="light"
          :src="require('@/assets/images/account/box-icon3.svg')"
          
        /></i>
      <h2>0</h2>
      <p>Habits to <br> lifestyle</p>
    </div>
      </b-col>
      <b-col md="6" style="padding-left:12px;">
<div class="box-one box-four" >
     <i>  <b-img
          width="35"
          variant="light"
          :src="require('@/assets/images/account/box-icon4.svg')"
          
        /></i>
      <h2>0</h2>
      <p>Award <br /> earned</p>
    </div>
      </b-col>
    </b-row>
     </b-card>
      </b-col>
      
    </b-row>    
<b-row class="match-height">
    <b-col
        lg="12"
        sm="12"
      >    
        <dashboard-overall-success />        
      </b-col>  
</b-row>
 <b-row class="match-height">
   <!-- <b-col
        lg="6"
        sm="6"
      >
           <b-card    
    class="card text-center no-active" style="padding:1.5rem;"
  >
    <i> <b-img          
          width="90"          
          :src="require('@/assets/images/dashboard/d-logo.svg')"          
        />
        </i>
    <h2 class="mb-1 mt-50">
    No active challenge 
at this moment
    </h2>
       <b-button
        variant="primary" >
      +  Start New Challenge
    </b-button>
           </b-card>
      </b-col> -->
       <b-col
        lg="4"
        sm="6"
      >
       <dashboard-success-report />
      </b-col>
            
      <b-col
        lg="4"
        sm="6"
      >
       
           <dashboard-success-rate />
      </b-col>
        <b-col
        lg="4"
        sm="6"
      >
<dashboard-tip-of-day />    
      </b-col>
    
 </b-row>

<b-row class="match-height">
 
      <b-col
        lg="6"
        sm="6"
      >
      <dashboard-profile-overview />
      </b-col>
        <b-col
        lg="6"
        sm="12"
      >
        <dashboard-poll-week />
      </b-col>
 
    </b-row>

<b-row class="match-height">
      <!-- <b-col
        lg="6"
        sm="12"
      >
<dashboard-tip-of-day />    
      </b-col> -->
     
<b-col
        lg="12"
        sm="12"
      >
<dashboard-quote />
    
      </b-col>
</b-row>



<b-row class="match-height">
      
      <b-col
        lg="6"
        sm="6"
      >
      <dashboard-award />

      </b-col>
      <b-col
        lg="6"
        sm="12"
      >
<dashboard-leaderboard />    
      </b-col>
</b-row>


<!-- 
    <b-row class="match-height">
      <b-col lg="6">      
        <dashboard-avg-sessions :data="data.avgSessions" />      
      </b-col>
      <b-col lg="6">
        <dashboard-support-tracker :data="data.supportTracker" />
      </b-col>
    </b-row>

    <b-row class="match-height">
      <b-col lg="4">
        <dashboard-timeline :data="data.timeline" />
      </b-col>
      <b-col lg="4">
        <dashboard-sales-radar-chart :data="data.salesChart" />
      </b-col>
      <b-col lg="4">
        <dashboard-app-design :data="data.appDesign" />
        
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12">
        <invoice-list />
      </b-col>
    </b-row> -->
    
</b-col>
  </b-row> 
  </section>
</template>

<script>
import { BRow, BCol, BImg, BButton, } from 'bootstrap-vue'

import StatisticCardWithAreaChart from '@core/components/statistics-cards/StatisticCardWithAreaChart.vue'
import { kFormatter } from '@core/utils/filter'
import InvoiceList from '@/views/apps/invoice/invoice-list/InvoiceList.vue'
import DashboardCongratulation from './DashboardCongratulation.vue'
import DashboardAvgSessions from './DashboardAvgSessions.vue'
// import DashboardSupportTracker from './DashboardSupportTracker.vue'
// import DashboardTimeline from './DashboardTimeline.vue'
// import DashboardSalesRadarChart from './DashboardSalesRadarChart.vue'
// import DashboardAppDesign from './DashboardAppDesign.vue'
import DashboardOverallSuccess from './DashboardOverallSuccess.vue'
import DashboardProfileOverview from './DashboardProfileOverview.vue'
import DashboardSuccessReport from './DashboardSuccessReport.vue'
import DashboardSuccessRate from './DashboardSuccessRate.vue'
import DashboardPollWeek from './DashboardPollWeek.vue'
import DashboardQuote from './DashboardQuote.vue'
import DashboardTipOfDay from './DashboardTipOfDay.vue'
import DashboardAward from './DashboardAward.vue'
import DashboardLeaderboard from './DashboardLeaderboard.vue'


export default {
  components: {
    BRow,
    BCol,
    DashboardCongratulation,
    DashboardAvgSessions,
    // StatisticCardWithAreaChart,
    // DashboardSupportTracker,
    DashboardOverallSuccess,
    DashboardProfileOverview,
    // DashboardTimeline,
    // DashboardSalesRadarChart,
    // DashboardAppDesign,
    // InvoiceList,
    DashboardSuccessRate,
    DashboardSuccessReport,
    DashboardPollWeek,
    DashboardQuote,
    DashboardTipOfDay,
    DashboardAward,
    DashboardLeaderboard,
    
    
    BImg,
    BButton,
  },
  data() {
    return {
      data: {},
    }
  },
  created() {
    // data
    this.$http.get('/dashboard/data')
      .then(response => { this.data = response.data })
  },
  methods: {
    kFormatter,
  },
}
</script>
