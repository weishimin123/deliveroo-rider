import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueTouch from 'vue-touch'
import './assets/icon/iconfont.css'

Vue.config.productionTip = false
Vue.use(VueTouch, {name:'v-touch'})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
