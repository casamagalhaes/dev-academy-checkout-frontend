import axios from 'axios'
import authService from './authService'

const URL = 'https://iytbez709a.execute-api.us-east-2.amazonaws.com/v1'

const getAll = () => {
    const token = authService.getAuthenticationToken()

    return axios.get(`${URL}/products/`,{headers: { Authorization: token }})
}

const save = (product) => {
    return axios.post(`${URL}/products`,product,{headers: { Authorization: localStorage.getItem('authenticationToken') }})
}

const getById = (id) => {
    return axios.get(`${URL}/products/${id}`,{headers: { Authorization: localStorage.getItem('authenticationToken') }})
}

export default {
    getAll,
    save,
    getById
}