import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueTouch from 'vue-touch'
import store from '@/store'

Vue.config.productionTip = false
Vue.use(VueTouch, {name:'v-touch'})

new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate() {
    Vue.prototype.$bus = this
  },
}).$mount('#app')
