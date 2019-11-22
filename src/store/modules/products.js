import { productService } from "@/services";

const state = {
  products: [],
  product: {
    name: "",
    brand: "",
    description: "",
    price: ""
  }
};

const getters = {
  totalValue(state) {
    return state.products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  }
};

const actions = {
  fetchAllProducts({ commit }) {
    return productService.getAll().then(response => {
      const products = response.data.map(product => ({
        ...product,
        quantity: 0
      }));
      commit("setProducts", products);
    });
  },
  saveProduct({ commit, state }) {
    return productService.save(state.product).then(() => {
      commit("addProduct", { ...state.product, quantity: 0 });
    });
  }
};

const mutations = {
  setProducts(state, payload) {
    state.products = payload;
  },
  addProduct(state, product) {
    state.products.push(product);
    state.product = {
      name: "",
      brand: "",
      description: "",
      price: ""
    }
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
