import { productService } from "@/services";

const state = {
  products: [],
  formProduct: {
    name: "",
    brand: "",
    price: "",
    description: ""
  },
  productActive: {
    name: "",
    brand: "",
    price: "",
    description: ""
  },
  isLoading: false
};

const getters = {
  totalValue(state) {
    return state.products.reduce(
      (total, product) => total + product.quantity * product.price,
      0
    );
  }
};

const actions = {
  fetchAllProducts({ commit }) {
    return productService.getAll().then(response => {
      const products = [...response.data].map(product => ({
        ...product,
        quantity: 0
      }));
      commit("setProducts", products);
    });
  },
  async saveProduct({ state, commit }) {
    commit("setLoading", true);
    const { data } = await productService.save(state.formProduct);
    commit("setProduct", data);
    commit("setLoading", false);
  },
  async getProductById({ commit }, id) {
    commit("setLoading", true);
    const { data } = await productService.getById(id);
    commit("setProductActive", data);
    commit("setLoading", false);
  }
};

const mutations = {
  decreaseProductQuantity(state, productId) {
    const product = state.products.find(product => product.id === productId);
    if (product.quantity > 0) product.quantity--;
  },
  increaseProductQuantity(state, productId) {
    const product = state.products.find(product => product.id === productId);
    product.quantity++;
  },
  setProducts(state, payload) {
    state.products = payload;
  },
  setProduct(state, payload) {
    state.products.push({ ...payload, quantity: 0 });
  },
  setProductActive(state, payload) {
    state.productActive = payload;
  },
  setLoading(state, payload) {
    state.isLoading = payload;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
