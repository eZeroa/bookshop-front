import Vue from 'vue'
import App from './App.vue'
import routerConfig from './router/router.config'
import VueRouter from 'vue-router'

import axios from 'axios'
import Qs from 'qs'

Vue.prototype.axios = axios;
Vue.prototype.qs = Qs;

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.use(ViewUI);
Vue.config.productionTip = false;
Vue.use(VueRouter);

routerConfig.mode = 'history';
const router = new VueRouter(routerConfig);

Vue.prototype.serverAddress = 'http://api.0713.ink:7130/suse.bookshop';

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app');
