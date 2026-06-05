<template>
  <div v-if="options">
    <!-- collapse -->
    <app-collapse
      id="faq-payment-qna"
      accordion
      type="margin"
      class="mt-2"
    >

      <app-collapse-item
        v-for="( data,index) in options.qandA"
        :key="index"
        :title="data.question"
      >
        {{ data.ans }}
      </app-collapse-item>

    </app-collapse>

    <!--/ collapse -->
  </div>
</template>

<script>
import { BAvatar } from 'bootstrap-vue'
import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'

export default {
  components: {
    BAvatar,
    AppCollapseItem,
    AppCollapse,
  },
  props: {
    options: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
