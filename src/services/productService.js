import axios from 'axios'
const URL = ' https://1fm2sqelwc.execute-api.us-east-1.amazonaws.com/v1/unauth'

const getAll = () => {
    return axios.get(`${URL}/products/mock`)
}

export default {
    getAll
}