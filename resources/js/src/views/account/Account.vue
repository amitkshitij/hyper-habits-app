<template>
  <div
    v-if="Object.keys(profileData).length"
    id="user-profile"
  >
    <profile-header :header-data="profileData.header" />
    <!-- profile info  -->
    <section id="profile-info">
      <b-row>
        <b-col lg="12 mx-auto">
      <b-row class="match-height"> 
        <!-- about suggested page and twitter feed -->
       <b-col md="12">
      <account-suggested-pages />
    </b-col>
        <!--/ about suggested page and twitter feed -->

        
        <!--/ latest photos suggestion and polls -->        
        <!--/ load more  -->
      </b-row>

      </b-col>
      </b-row>
    </section>
    <!--/ profile info  -->
  </div>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'
import AccountSuggestedPages from './AccountSuggestedPages.vue'



/* eslint-disable global-require */
export default {
  components: {
    BRow,
    BCol,

    
    AccountSuggestedPages,

    
  },
  data() {
    return {
      profileData: {},
    }
  },
  created() {
    this.$http.get('/notification/data').then(res => {
      this.profileData = res.data
    })
  },
}
/* eslint-disable global-require */
</script>

<style lang="scss" >
@import '~@core/scss/vue/pages/page-profile.scss';
</style>
