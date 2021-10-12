import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  
  // 挂在在vue实例中，这样就可以通过this.$store的方式获取对象
  store,
  render: h => h(App)
})
