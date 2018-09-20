import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import App from '@/App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#vuex}}
import store from '@/store'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/vuex}}
import MpvueRouterPatch from 'mpvue-router-patch'

Vue.config.productionTip = false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#vuex}}
App.store = store{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/vuex}}
App.mpType = 'app'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(MpvueRouterPatch)
const app = new Vue(App){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
app.$mount(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
