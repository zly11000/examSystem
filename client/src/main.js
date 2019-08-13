import Vue from 'vue'
import App from './App.vue'
import router from './router/';
import "./config/element-ui.js"
import 'element-ui/lib/theme-chalk/index.css'
import "./public/_minix.scss";
import "./public/common.scss"
import './plugins/element.js'
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import "./self/index"
import store from "./store/index"
Vue.use(mavonEditor)
Vue.config.productionTip = false
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
