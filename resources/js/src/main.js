import Vue from 'vue'
import { ToastPlugin, ModalPlugin } from 'bootstrap-vue'
import VueCompositionAPI from '@vue/composition-api'

import i18n from '@/libs/i18n'
import router from './router'
import store from './store'
import App from './App.vue'

// Global Components
import './global-components'

// 3rd party plugins
import '@axios'
import '@/libs/acl'
import '@/libs/portal-vue'
import '@/libs/clipboard'
import '@/libs/toastification'
import '@/libs/sweet-alerts'
import '@/libs/vue-select'
import '@/libs/tour'

// Axios Mock Adapter
import '@/@fake-db/db'

// BSV Plugin Registration
Vue.use(ToastPlugin)
Vue.use(ModalPlugin)

// Composition API
Vue.use(VueCompositionAPI)

// Feather font icon - For form-wizard
// * Shall remove it if not using font-icons of feather-icons - For form-wizard
require('@core/assets/fonts/feather/iconfont.css') // For form-wizard

// import core styles
require('@core/scss/core.scss')

// import assets styles
require('@/assets/scss/style.scss')
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faEye, faCircle,  faBell, faUser, faGear, faBullseye, faCircleUser, faCartShopping, faComment, faDashboard, faGauge, faCircleCheck, faTriangleExclamation, faPlus, faRightFromBracket, faIndianRupeeSign, faCircleQuestion,  } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, } from '@fortawesome/free-brands-svg-icons'



library.add(faUserSecret, faCircle,  faBell, faEye, faUser, faGear, faBullseye, faCircleUser, faCartShopping, faComment, faDashboard,faGauge, faCircleCheck, faTriangleExclamation, faPlus,  faRightFromBracket, faIndianRupeeSign, faCircleQuestion,)
library.add(faFacebook, faTwitter)




Vue.component('font-awesome-icon', FontAwesomeIcon)




Vue.config.productionTip = false

// Catch Vue errors
Vue.config.errorHandler = (err, vm, info) => {
  console.error('[Vue Error]', err, info)
}

// Catch router navigation errors
router.onError(err => {
  console.error('[Router Error]', err)
  // Force hide loading screen on navigation error
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) appLoading.style.display = 'none'
})

// Fallback: hide loading screen after 4 seconds if router never fires afterEach
setTimeout(() => {
  const appLoading = document.getElementById('loading-bg')
  if (appLoading && appLoading.style.display !== 'none') {
    console.warn('[App] Loading screen stuck — forcing hide. Check console for errors.')
    appLoading.style.display = 'none'
  }
}, 4000)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
