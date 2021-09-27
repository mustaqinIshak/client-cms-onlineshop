import axios from 'axios'
import config from '../config/config'

function post(apiEndpoint, payload) {
    return axios.post(config.baseUrl+apiEndpoint, payload)
    .then((response) => {
        return response
    })
    .catch((err) => {
        console.log(err)
    })
}

export const userService = {
    post
}