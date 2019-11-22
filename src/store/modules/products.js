import { productService } from '@/services'

const state = {
    isLoading: false,
    payload: false,
    products: [],
    productForm: { 
        productName: '',
        productBrand: '',
        productPrice: '',
        productDescription: ''
    },
    id: ''
}

const getters = {
    totalValue(state) {
        return state.products.reduce((total, product) => total + (product.quantity || 1) * product.productPrice, 0)
    }
}

const actions = {
    fetchAllProducts({ commit }) {
        return productService.getAll().then(response => {
            const products = [...response.data].map(product => ({ ...product, quantity: 0 }))
            commit('setProducts', products)
        })
    },
    saveProduct({ state, commit }) {
       commit('setLoading', true)
       return productService.save(state.productForm).then(response => {
           console.log(response)
       }).finally(() => {
           commit('setLoading', false)
       })
    },
    fetchProduct({ commit }, id) {
        return productService.getById(id).then(response => {
            alert("Nome: " + response.data.productName + "\n" + "Preço: " + response.data.productPrice)
            commit('setLoading', true)
        }).finally(() => {
            commit('setLoading', false)
        })
    }
}

const mutations = {
    decreaseProductQuantity(state, productId) {
        const product = state.products.find(product => product.id === productId)
        if (product.quantity > 0)
            product.quantity--
    },
    increaseProductQuantity(state, productId) {
        const product = state.products.find(product => product.id === productId)
        product.quantity++
    },
    setProducts(state, payload) {
        state.products = payload
    },
    setId(state, payload) {
        state.id = payload
    }
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
  