<template>
  <b-card
    v-if="data"
    text-variant="center"
    class="card card-congratulations" style="background:#ffffff;"
  >
    <!-- images -->
    <b-img
      :src="require('@/assets/images/elements/decore-left.png')"
      class="congratulations-img-left"
    />
    <b-img
      :src="require('@/assets/images/elements/decore-right.png')"
      class="congratulations-img-right"
    />
    <!--/ images -->

    <b-img 
    width="120"
    rounded
    circle   
                   
          :src="require('@/assets/images/dashboard/user.jpg')"
          
        /> 
    <h2 class="mb-1 mt-1">
      Hi, {{ data.name }}.
    </h2>
    <b-card-text class="m-auto">
      Wed <em>•</em> 17 Nov 2021 <em>•</em> 19:47 PM
    </b-card-text>
    <b-button class="mt-2" size="lg" :to="{name:'user'}"  v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="primary" >
    <font-awesome-icon  icon="fa-solid fa-plus" />  Start New Challenge
    </b-button>
  </b-card>
</template>

<script>
import {
  BCard, BImg, BAvatar, BCardText, BButton,
} from 'bootstrap-vue'

export default {
  components: {
    BCard,
    BAvatar,
    BImg,
    BCardText,
    BButton,

  },
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
