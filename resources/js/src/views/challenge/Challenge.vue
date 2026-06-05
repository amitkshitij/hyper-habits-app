<template>
  <section id="challenge">
    <b-row class="match-height">
      <b-col
        xl="4"
        md="6"
      >
        <challenge-medal :data="data.congratulations" />
      </b-col>
      <b-col
        xl="8"
        md="6"
      >
        <challenge-statistics :data="data.statisticsItems" />
      </b-col>
    </b-row>

    <b-row class="match-height">
      <b-col lg="4">
        <b-row class="match-height">
          <!-- Bar Chart - Orders -->
          <b-col
            lg="6"
            md="3"
            cols="6"
          >
            <challenge-order-chart :data="data.statisticsOrder" />
          </b-col>
          <!--/ Bar Chart - Orders -->
          <b-col
            lg="6"
            md="3"
            cols="6"
          >
            <challenge-profit-chart :data="data.statisticsProfit" />
          </b-col>
          <b-col
            lg="12"
            md="6"
          >
            <challenge-earnings-chart :data="data.earningsChart" />
          </b-col>
        </b-row>
      </b-col>

      <!-- Revenue Report Card -->
      <b-col lg="8">
        <challenge-revenue-report :data="data.revenue" />
      </b-col>
      <!--/ Revenue Report Card -->
    </b-row>

    <b-row class="match-height">
      <!-- Company Table Card -->
      <b-col lg="8">
        <challenge-company-table :table-data="data.companyTable" />
      </b-col>
      <!--/ Company Table Card -->

      <!-- Developer Meetup Card -->
      <b-col
        lg="4"
        md="6"
      >
        <challenge-meetup :data="data.meetup" />
      </b-col>
      <!--/ Developer Meetup Card -->

      <!-- Browser States Card -->
      <b-col
        lg="4"
        md="6"
      >
        <challenge-browser-states />
      </b-col>
      <!--/ Browser States Card -->

      <!-- Goal Overview Card -->
      <b-col
        lg="4"
        md="6"
      >
        <challenge-goal-overview :data="data.goalOverview" />
      </b-col>
      <!--/ Goal Overview Card -->

      <!-- Transaction Card -->
      <b-col
        lg="4"
        md="6"
      >
        <challenge-transactions :data="data.transactionData" />
      </b-col>
      <!--/ Transaction Card -->
    </b-row>
  </section>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'

import { getUserData } from '@/auth/utils'
import ChallengeMedal from './ChallengeMedal.vue'
import ChallengeStatistics from './ChallengeStatistics.vue'
import ChallengeRevenueReport from './ChallengeRevenueReport.vue'
import ChallengeOrderChart from './ChallengeOrderChart.vue'
import ChallengeProfitChart from './ChallengeProfitChart.vue'
import ChallengeEarningsChart from './ChallengeEarningsChart.vue'
import ChallengeCompanyTable from './ChallengeCompanyTable.vue'
import ChallengeMeetup from './ChallengeMeetup.vue'
import ChallengeBrowserStates from './ChallengeBrowserStates.vue'
import ChallengeGoalOverview from './ChallengeGoalOverview.vue'
import ChallengeTransactions from './ChallengeTransactions.vue'

export default {
  components: {
    BRow,
    BCol,

    ChallengeMedal,
    ChallengeStatistics,
    ChallengeRevenueReport,
    ChallengeOrderChart,
    ChallengeProfitChart,
    ChallengeEarningsChart,
    ChallengeCompanyTable,
    ChallengeMeetup,
    ChallengeBrowserStates,
    ChallengeGoalOverview,
    ChallengeTransactions,
  },
  data() {
    return {
      data: {},
    }
  },
  created() {
    // data
    this.$http.get('/challenge/data').then(response => {
      this.data = response.data

      // ? Your API will return name of logged in user or you might just directly get name of logged in user
      // ? This is just for demo purpose
      const userData = getUserData()
      this.data.congratulations.name = userData.fullName.split(' ')[0] || userData.username
    })
  },
}
</script>

<style lang="scss">
@import '~@core/scss/vue/pages/dashboard-ecommerce.scss';
@import '~@core/scss/vue/libs/chart-apex.scss';
</style>
