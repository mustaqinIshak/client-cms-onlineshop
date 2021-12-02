const initialState = {
    brands: [
        {
            id: '0000',
            name: 'brand name',
            country: 'default',
            consigment: 15,
            action: 'no action'
        }
    ]
}

const brandReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_ALL_BRAND':
            return {
                ...state,
                brands: action.brands
            }
        case 'FAILL_FETCH_BRAND':
            return {
                ...state,
                message: action.message
            }
        case 'FETCH_RESULT_BRAND' :
            return {
                ...state,
                result: action.brand
            }
        case 'NO_RESULT_BRAND': 
            return {
                ...state
            }
        case 'CREATE_BRAND_SUCCESS':
            return {
                ...state,
                status: action.result,
                message: action.message
            }
        case 'CREATE_BRAND_FAILL': 
            return {
                ...state,
                status: action.result,
                error_message: action.message
            }
        default:
            return state
    }
}

export default brandReducer