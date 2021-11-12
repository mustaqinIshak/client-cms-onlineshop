import { userService } from '../services';
import { history } from '../helpers/helpers';

function login(username, password) {
    return dispatch => {
        let apiEndpoint = 'user/login';
        let payload = {
            email: username,
            password: password
        }
        userService.post(apiEndpoint, payload)
        .then((response) => {
            if(response === undefined) {
                const data = {
                    auth: false,
                    message: 'server is down'
                }
                dispatch(failLogin(data))
            }
            else if(!response.data.auth) {
                console.log(response.data)
                dispatch(failLogin(response.data))
            }
            else if (response.data.user.token) {
                localStorage.setItem('token', response.data.user.token)
                localStorage.setItem('auth', response.data.auth)
                localStorage.setItem('username', response.data.user.name)
                localStorage.setItem('accLevel', response.data.user.accesslevel)
                dispatch(setUserDetails(response.data))
                history.push('/home')
            }
        })
    }
}

function logout() {
    return dispatch => {
        localStorage.removeItem('auth')
        localStorage.removeItem('token')
        dispatch(logOutUser())
        history.push('/')
    }
}

export function setUserDetails(user) {
    return {
        type: "LOGIN_SUCCESS",
        auth: user.auth,
        token: user.token,
        user: user.user
    }
}

export function failLogin(data) {
    return {
        type: "LOGIN_FAILL",
        data: data
    }
}

export function logOutUser() {
    return {
        type: "LOGOUT_SUCCESS",
        auth: false,
        token: ''
    }
}

export const userActions = {
    login,
    logout
}