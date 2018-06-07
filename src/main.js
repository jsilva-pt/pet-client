import Vue from 'vue'
import App from './App'
import router from './router'
import i18n from './i18n'
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
