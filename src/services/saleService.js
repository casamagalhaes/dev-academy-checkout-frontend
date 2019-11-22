import axios from 'axios'
import authService from './authService'
const URL = 'https://9i361htw3l.execute-api.us-east-1.amazonaws.com/v1'

const save = (creditCard) => {
    const token = authService.getAuthenticationToken()

    return axios.post(`${URL}/sales`, creditCard, {
        headers: { Authorization: token }
    })
}

export default {
    save
}