<template>

  <b-row class="match-height setting">
      <b-col lg="12">
      <setting-tab />
    </b-col> 
  </b-row>

</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'


import SettingContent from './SettingContent.vue'
import SettingTab from './SettingTab.vue'


export default {
  components: {
    BCol,
    BRow,
    SettingContent,
    SettingTab,

    
  },
}
</script>
