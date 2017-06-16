// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import Filters from './filters'
import VueI18n from 'vue-i18n'
import ElementUI from 'element-ui'
import locales from './locales'
import Cookies from 'js-cookie'
import VueBus from 'vue-bus'

import { $apis, $util, $document, $auth } from 'helper'
Vue.prototype.$apis = $apis
Vue.prototype.$util = $util
Vue.prototype.$auth = $auth
Vue.prototype.$document = $document

import $types from 'store/types'
Vue.prototype.$types = $types

import 'element-ui/lib/theme-default/index.css'
Vue.use(VueI18n)
Vue.use(ElementUI)
Vue.use(VueBus)

/* inject i18n */
const browserLanguage = (window.navigator.language || window.navigator.browserLanguage).split('-')[0]
const lang = Cookies.get('lang') || (browserLanguage in locales ? browserLanguage : 'en')
Vue.config.lang = lang
Object.keys(locales).forEach(lang => {
  Vue.locale(lang, locales[lang])
})

import Icon from 'components/Icon/Icon.vue'
Vue.component('icon', Icon)

import AsideList from 'components/AsideList'
Vue.component('aside-list', AsideList)

// Public Filter
for (let key in Filters) {
  Vue.filter(key, Filters[key])
}

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
