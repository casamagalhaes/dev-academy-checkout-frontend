import { productService } from "@/services";

const state = {
  product: {
    name: "",
    brand: "",
    description: "",
    price: ""
  },

  products: []
};

const getters = {
  totalValue(state) {
    return state.products.reduce((total, product) => {
      return total + product.quantity * product.price;
    }, 0);
  }
};
const actions = {
  fetchAllProducts({ commit }) {
    return productService.getAll().then(res => {
      const products = res.data.map(product => ({ ...product, quantity: 0 }));
      commit("setProducts", products);
    });
  },

  saveProduct({ state }) {
    return productService.save(state).then(res => console.log(res));
  },

  deleteProductById({ state }) {
    return productService.deleteById(state).then(res => console.log(res));
  }
};
const mutations = {
  setProducts(state, payload) {
    state.products = payload;
  },
  decreaseProductQuantity(state, productId) {
    const product = state.products.find(product => product.id === productId);
    if (product.quantity > 0) product.quantity--;
  },
  increaseProductQuantity(state, productId) {
    const product = state.products.find(product => product.id === productId);
    product.quantity++;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
