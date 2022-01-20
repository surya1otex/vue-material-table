import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/main.css'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
Vue.use(VueMaterial)


axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://192.168.19.106/laravel-jwt-auth/public/api/';


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')