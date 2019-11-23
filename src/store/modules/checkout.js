import { saleService } from "@/services";

const state = {
  sales: [],
  creditCardForm: {
    cardNumber: "",
    cardHolder: "",
    expirationMonth: 1,
    exprationYear: 2019,
    cvvCode: ""
  }
};

const getters = {};
const actions = {
  saveSale({ state }) {
    return saleService.save(state.creditCardForm).then(res => console.log(res));
  },

  getProductById({ state }) {
    return saleService.getById(state).then(res => console.log(res));
  },

  deleteProductById({ state }) {
    return saleService.deleteById(state).then(res => console.log(res));
  }
};
const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
