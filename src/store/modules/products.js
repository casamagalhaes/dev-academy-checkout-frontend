import { productService } from '@/services'

const state = {
    isLoading: false,
    products: []
}

const getters = {
    totalValue(state) {
        return state.products.reduce((total, product) => total + product.quantity * product.price, 0)
    }
}

const actions = {
    fetchAllProducts({ commit }) {
        return productService.getAll().then(response => {
            const products = [...response.data].map(product => ({ ...product, quantity: 0 }))
            commit('setProducts', products)
        })
    },
    fetchByIdProducts({commit}){
        return productService.getById().then(response =>{
            const products = [...response.data].map(product => ({ ...product, quantity: 0 }))
            commit('setProducts', products)
        })
    },
    saveProducts({ state, commit }) {
        commit('setLoading', true)
        return productService.save(state.products).then(response => {
            console.log(response)
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
    setLoading(state, value) {
        state.isLoading = value
    }
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
  