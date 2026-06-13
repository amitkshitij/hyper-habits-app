<template>
  <p class="clearfix mb-0">
    <span class="float-md-left d-block d-md-inline-block mt-25">
      © Copyright {{ new Date().getFullYear() }}
      <span class="d-none d-sm-inline-block"> All rights Reserved with</span>
      <b-link
        class="ml-25"
        href="https://1.envato.market/pixinvent_portfolio"
        target="_blank"
      >21 By 90 Technologies Pvt Ltd</b-link>      
    </span>

    <span class="float-md-right d-none d-md-block">Hyper Habits Admin Panel 
      <feather-icon
        icon="HeartIcon"
        size="21"
        class="text-danger stroke-current"
      />
    </span>
  </p>
</template>

<script>
import { BLink } from 'bootstrap-vue'

export default {
  components: {
    BLink,
  },
}
</script>
