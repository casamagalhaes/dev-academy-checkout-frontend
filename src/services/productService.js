import axios from 'axios'
import authService from './authService'
const URL = 'https://mi4usqv9wc.execute-api.us-east-1.amazonaws.com/v1'

const getAll = () => {
    const token = authService.getAuthenticationToken()
    return axios.get(`${URL}/products`, {
        headers: { Authorization: token }
    })
}

const save = (product) => {
    const token = authService.getAuthenticationToken()

    console.log("teste")
    return axios.post(`${URL}/products`, product, {
        headers: { Authorization: token }
    })
}

const getById = (id) => {
    const token = authService.getAuthenticationToken()
    return axios.get(`${URL}/products/${id}`, {
        headers: { Authorization: token }
    })
}

export default {
    getAll, save, getById
}