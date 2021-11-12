let token = localStorage.getItem('token')
let auth = localStorage.getItem('auth')
let username = localStorage.getItem('username')
let accLevel = localStorage.getItem('accLevel')

const initialState = auth ? {loggedIn: true, auth, token, username, accLevel} 
                    : {}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                loggingin: true,
                auth: action.auth,
                token: action.token,
                user: action.user
            }
        case "LOGIN_FAILL" :
            return {
                ...state,
                auth: action.data.auth,
                message: action.data.message,
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