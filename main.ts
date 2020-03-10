import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { dateFormat } from '@/utils/index';
import Global from './global';
Vue.config.productionTip = false
Vue.use(Global);
Vue.use(ElementUI);
Vue.filter('jftime',function(time) {
  let date = new Date(time);
  return dateFormat.formatDate(date, "yyyy.MM.dd");
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
