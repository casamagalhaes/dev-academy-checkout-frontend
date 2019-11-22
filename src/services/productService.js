import axios from 'axios'
import authService from './authService'
const URL = 'https://sgdpps197d.execute-api.us-east-1.amazonaws.com/v1'


const save = (products) => {
    const token = authService.getAuthenticationToken()

    return axios.post(`${URL}/products`, products, {
        headers: { Authorization: token }
    })
}

const getAll = () => {
    const token = authService.getAuthenticationToken()

    return axios.get(`${URL}/unauth/products`,{
        headers: { Authorization: token }
    })
}

const getById = (productId) => {
    const token = authService.getAuthenticationToken()
    
    return axios.get(`${URL}/unauth/products/`, productId,{
        headers: { Authorization: token }
    })
}

export default {
    save,
    getById,
    getAll
}