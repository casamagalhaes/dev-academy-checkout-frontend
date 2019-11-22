import { checkoutService } from "@/services";

const state = {
  creditCardForm: {
    cardNumber: "",
    cardHolder: "",
    expirationMonth: 1,
    expirationYear: 2019,
    cvvCode: ""
  }
};

const getters = {};

const actions = {
  saveSale({ state }) {
    return checkoutService.save(state.creditCardForm).then(response => {
      console.log(response.data);
    });
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
