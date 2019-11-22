import axios from 'axios'
import authService from './authService'

const URL = 'https://iytbez709a.execute-api.us-east-2.amazonaws.com/v1'

const getAll = () => {
    const token = authService.getAuthenticationToken()

    return axios.get(`${URL}/products/`,{headers: { Authorization: token }})
}

export default {
    getAll
}