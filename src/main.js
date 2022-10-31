import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './mock/mockService'
import 'swiper/css/swiper.min.css'

import Carousel from '@/components/Carousel';
import TypeNav from '@/components/TypeNav';

Vue.config.productionTip = false
Vue.component(Carousel.name, Carousel)
Vue.component(TypeNav.name, TypeNav)

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
