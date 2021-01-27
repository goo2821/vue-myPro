import Vue from 'vue'
import App from './App.vue'
import router from './routes/index.js'
import store from './store/index.js'
import VueCookie from 'vue-cookie'
import { BootstrapVue, BootstrapVueIcons, LayoutPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(LayoutPlugin);
Vue.use(VueCookie);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')

/*
window.addEventListener("beforeunload", function(event){
  console.log("원래 것");
  event.returnValue="나와라 뚝딱";
})
window.onbeforeunload = function(e) {
  console.log("test");
  e.returnValue="test";
}
*/