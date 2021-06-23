import Vue from 'vue'
import App from './Notes.vue'
import store from '@/store'
import vuetify from '@/plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
