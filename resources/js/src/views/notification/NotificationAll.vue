<template>
  <div
    v-if="Object.keys(profileData).length"
    id="user-profile"
  >
    <profile-header :header-data="profileData.header" />
    <!-- profile info  -->
    <section id="profile-info">
      <b-row>
        <b-col lg="8 mx-auto">
      <b-row class="match-height"> 
        <!-- about suggested page and twitter feed -->
       <b-col md="12">
      <notification-suggested-pages />
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
import NotificationSuggestedPages from './NotificationSuggestedPages.vue'
import NotificationTimelineCard from './NotificationTimelineCard.vue'

/* eslint-disable global-require */
export default {
  components: {
    BRow,
    BCol,

    
    NotificationSuggestedPages,
    NotificationTimelineCard,
    
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
