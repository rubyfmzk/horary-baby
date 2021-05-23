import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import VueScrollTo from 'vue-scrollto'
Vue.use(VueScrollTo)

import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
