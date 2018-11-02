import Vue from 'vue';
import 'highlight.js/styles/atom-one-dark.css'; // eslint-disable-line import/no-extraneous-dependencies
import '@mdi/font/css/materialdesignicons.min.css';

import XStyles from '@/components';
import installFilters from '@/filters';
import App from './App.vue';
import router from './routes';
import './registerServiceWorker';
import './style.styl';

Vue.config.productionTip = false;
Vue.use(XStyles);
installFilters(Vue);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
