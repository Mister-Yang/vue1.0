import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import Vuex from 'vuex';
import goods from './components/goods/goods.vue';
import ratings from './components/ratings/ratings.vue';
import seller from './components/seller/seller.vue';
import store from './vuex/store';

import 'common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuex);
// 2. 定义路由
const routes = [
  { path: '/', component: goods },
  { path: '/goods', name: 'goods', component: goods },
  { path: '/ratings', name: 'ratings', component: ratings },
  { path: '/seller', name: 'seller', component: seller }
];

// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  routes,
  linkActiveClass: 'active'// （缩写）相当于 routes: routes
});

/*eslint-disable */
const app = new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});

/*eslint-enable */
