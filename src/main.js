import Vue from 'vue'
import App from './App'
import uView from 'uview-ui'
import store from './store/index.js'
import mixin from './utils/mixin.js'
import {router,RouterMount} from './router.js'  //路径换成自己的
Vue.use(router)

Vue.config.productionTip = false;
Vue.prototype.$store = store;
Vue.use(uView);
Vue.use(mixin);
App.mpType = 'app';
const app = new Vue({
  store,
  ...App
})
// 引入请求封装，将app参数传递到配置中
require('./utils/request')(app)

// #ifdef H5
	RouterMount(app,router,'#app')
// #endif

// #ifndef H5
	app.$mount(); //为了兼容小程序及app端必须这样写才有效果
// #endif
