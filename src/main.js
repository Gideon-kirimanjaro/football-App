<<<<<<< HEAD
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import TextField from "./components/UI/TextField";

Vue.config.productionTip = false;
Vue.component("text-container", TextField);
=======
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
>>>>>>> 13ce7fae2295ad5dc97dff2db26c805ac2012dd9

new Vue({
  router,
  store,
  vuetify,
<<<<<<< HEAD
  render: (h) => h(App),
}).$mount("#app");
=======
  render: h => h(App)
}).$mount('#app')
>>>>>>> 13ce7fae2295ad5dc97dff2db26c805ac2012dd9
