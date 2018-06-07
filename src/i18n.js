import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default new VueI18n({
  fallbackLocale: 'en-GB',
  locale: 'en-GB',
  messages: {
    'en-GB': require('@/lang/en-GB.json')
  }
})
