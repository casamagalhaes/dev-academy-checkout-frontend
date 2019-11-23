import Vue from "vue";
import Vuex from "vuex";
import product from "./modules/product";
import checkout from "./modules/checkout";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    product,
    checkout
  }
});
