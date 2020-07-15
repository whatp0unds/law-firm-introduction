import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import '@/style/reset.css'
import '@/style/main.css'
import '@/plugins/element'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
