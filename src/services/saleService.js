import axios from 'axios'
import authService from './authService'
const URL = 'https://iytbez709a.execute-api.us-east-2.amazonaws.com/v1'

const save = (creditCard) => {
    const token = authService.getAuthenticationToken()

    return axios.post(`${URL}/sales`, creditCard, {
        headers: { Authorization: token }
    })
}

export default {
    save
}