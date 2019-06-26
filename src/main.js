import Vue from 'vue'
import App from './App.vue'
import {routes} from './routes'
import VueRouter from 'vue-router'
import store from './store/index'
import { ClientTable} from 'vue-tables-2';


Vue.use(VueRouter)
Vue.use(ClientTable);


Vue.config.productionTip = false

const router = new VueRouter({
  routes,
  mode:'history'
})
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
