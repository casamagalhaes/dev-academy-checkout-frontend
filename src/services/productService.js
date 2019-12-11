import axios from 'axios'
const URL = 'https://v4swljsb00.execute-api.us-east-1.amazonaws.com/v1'

const getAll = () => {
    return axios.get(`${URL}/unauth/products/mock`)
}

export default {
    getAll
}