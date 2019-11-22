import { productService } from '@/services'

const state = {
    productForm: {
        name: '',
        description: '',
        price: '',
        brand: ''
    }
}

const getters = {}

const actions = {
    saveProduct({ state }) {
        return productService.save(state.productForm).then(response => {
            console.log(response)
        })
    }
}

const mutations = {}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
  