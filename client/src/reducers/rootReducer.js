import { combineReducers } from "redux"
import authReducer from "./authReducer"
import brandReducer from "./brandReducer"


const rootReducer = combineReducers({
    auth : authReducer,
    brand: brandReducer,
    
})

export default rootReducer