import Vuex from 'vuex'
import Vue from 'vue'
import activity from '@/store/activity'
import payment from '@/store/payment'
import setting from '@/store/setting'
import question from '@/store/question'
import earning from '@/store/earning'
import profile from '@/store/profile'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { activity, payment, setting, question, earning, profile },
})
