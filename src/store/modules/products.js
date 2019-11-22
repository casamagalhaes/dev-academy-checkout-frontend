import { productService } from '@/services'

const state = {
    isLoading: false,
    product: {},
    products: [],
    productForm: {
        brand: "",
        description:"",
        price: 0,
        name:""
    }
}

const getters = {
    totalValue(state) {
        return state.products.reduce((total, product) => total + product.quantity * product.price, 0)
    }
}

const actions = {
    saveProduct({state, commit}){
        commit('setLoading', true)
        return productService.save(state.productForm).then( response => {
            console.log(response)
        }).finally(() => {
            commit('setLoading', false)
            window.location.reload()
        })
    },
    getById({commit},id){
        commit('setLoading', true)
        return productService.getById(id).then( response => {
            commit('setProduct',response.data)
        }).finally(()=> {
            commit('setLoading', false)
        })
    },
    fetchAllProducts({ commit }) {
        return productService.getAll().then(response => {
            const products = [...response.data].map(product => ({ ...product, quantity: 0 }))
            commit('setProducts', products)
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
    setProduct(state, payload) {
        state.product = payload
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
  