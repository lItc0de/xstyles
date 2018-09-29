import Vue from 'vue';
import Router from 'vue-router'; // eslint-disable-line
import Home from '@/views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/components/:component',
      name: 'Readme',
      component: () => import('@/views/Readme'),
    },
  ],
});
