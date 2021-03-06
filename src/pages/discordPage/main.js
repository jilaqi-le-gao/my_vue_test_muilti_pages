import Vue from 'vue'
import App from './discordPage.vue'
import store from '@/store'
import vuetify from '@/plugins/vuetify'
import HighchartsVue from "highcharts-vue";

Vue.config.productionTip = false
Vue.use(HighchartsVue);

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
