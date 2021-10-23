let token = localStorage.getItem('token')
let auth = localStorage.getItem('auth')

const initialState = auth ? {loggedIn: true, auth, token} 
                    : {}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOGGIN_SUCCESS':
            return {
                loggingin: true,
                auth: action.auth,
                token: action.token
            }
        case "LOGIN_FAILL" :
            return {
                ...state,
                auth: action.data.auth,
                message: action.data.message
            }
        case 'LOGOUT_SUCCESS' :
            return {
                auth: false
            }
        default: 
            return state
    }
}

export default authReducer