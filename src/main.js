import Vue from "vue";
import axios from "axios";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import filters from "./filters";
import authService from "./services/authService";

axios.defaults.baseURL= process.env.VUE_APP_API_URL;

Vue.config.productionTip = false;

authService.authenticate();

filters(Vue);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
