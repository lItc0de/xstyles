import Vue from 'vue';
import 'highlight.js/styles/atom-one-dark.css'; // eslint-disable-line import/no-extraneous-dependencies

import XStyles from '@/components';
import App from './App.vue';
import router from './routes';
import './registerServiceWorker';
import './style.styl';

Vue.config.productionTip = false;
Vue.use(XStyles);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
