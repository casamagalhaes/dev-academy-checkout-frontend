import axios from 'axios'
import authService from './authService'
//const URL = 'https://sgdpps197d.execute-api.us-east-1.amazonaws.com/v1/unauth'
const URL = ' https://cojoyhsrib.execute-api.us-east-1.amazonaws.com/v1'

const getAll = () => {
    const token = authService.getAuthenticationToken()
    return axios.get(`${URL}/products`, {
        headers: { Authorization: token }
    })
}

const getById = ( productId ) => {
    const token = authService.getAuthenticationToken()

    return axios.get(`${URL}/products/${productId}`, {
        headers: { Authorization: token }
    })
}

const save = (product) => {
    const token = authService.getAuthenticationToken()

    return axios.post(`${URL}/products`, product, {
        headers: { Authorization: token }
    })
}

export default {
    getAll,
    getById,
    save
}