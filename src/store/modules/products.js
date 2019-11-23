import { productService } from '@/services'

const state = {
    isLoading: false,
    products:[],
    productForm: {
        name: '',
        description: '',
        price: 0,
        brand: ""
    },
    product: {
        name: '',
        description: '',
        price: '',
        brand: ''
    }

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

    getById({commit},id){
        commit('setLoading', true)
        return productService.getById(id).then( response => {
            const product = response.data;
            commit('setProduct', product)
            commit('toggleModal');
        }).finally(()=> {
            commit('setLoading', false)
        })
    },

    saveProduct({ state, commit }) {
        commit('setLoading', true)
        return productService.save(state.productForm).then(response => {
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
        console.log('Deveria ter produtos aqui', payload)
        state.products = payload
    }
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
  