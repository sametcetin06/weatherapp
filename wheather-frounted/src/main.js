import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import VueAxios from 'vue-axios'
import store from 'app-stores'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
