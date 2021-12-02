import axios from "axios";
import config from "../config/config";

const token = localStorage.getItem('token')
const auth = {
                headers: { 
                    Authorization: 'Bearer'+' '+token 
                }
            }

function get(apiEndpoint) {
    return axios.get(config.baseUrl+apiEndpoint, auth)
    .then((response) => {
        return response
    })
    .catch((error) => {
        return error.response
    })
}

function post(apiEndpoint, payload) {
    return axios.post(config.baseUrl+apiEndpoint, payload, auth)
    .then((response) => {
        return response
    })
    .catch((error) => {
        console.log(error.response.data.message.name.join(','))
        throw Error (error.response.data.message.name.join(',')) 
    })
}

function put(apiEndpoint, payload) {
    return axios.put(config.baseUrl+apiEndpoint, payload, auth)
    .then((response) => {
        return response
    })
    .catch((error) => {
        return error.response
    })
}

function destroy(apiEndpoint) {
    return axios.delete(config.baseUrl+apiEndpoint, auth)
    .then((response) => {
        return response
    })
    .catch((error) => {
        return error.response
    })
}

export const brandService = {
    get,
    post,
    put,
    destroy
}