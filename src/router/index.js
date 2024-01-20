import VueRouter from 'vue-router'
import Vue from 'vue'
import Login from '@/pages/login'
import Main from '@/pages/main'
import Loading from '../pages/loading'

Vue.use(VueRouter)


let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function (location, onComplete, onReject) {
  if (onComplete && onReject) {
    originPush.call(this, location, onComplete, onReject)
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    )
  }
}
VueRouter.prototype.replace = function (location, onComplete, onReject) {
  if (onComplete && onReject) {
    originReplace.call(this, location, onComplete, onReject)
  } else {
    originReplace.call(
      this,
      location,
      () => {},
      () => {}
    )
  }
}

let router = new VueRouter({
  routes: [
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/main',
      component: Main,
    },
    {
      path: '/loading',
      component: Loading,
    },
    {
      path: '*',
      redirect: '/main',
    },
  ],
})

export default router
