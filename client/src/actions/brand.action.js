import { brandService } from "../services/brand.Service";

const apiEndpoint = 'brand'

function showAllBrands() {
    return dispatch => {
        brandService.get(apiEndpoint)
        .then((response) => {
            if(response.data.status === 'Token is Expired') {
                dispatch(faillGetBrands())
            } else {
                dispatch(setAllBrands(response.data))
            }

        })
    }
}

function resultBrand(brand) {
    return dispatch => {
        dispatch(setResultBrand(brand))
    } 
}

function createBrand(brand) {
    return dispatch => {
        brandService.post(apiEndpoint, brand)
        .then(response => {
            console.log(response)
            dispatch(setNewBrand(response.data))
        })
    }
}

function setResultBrand(brand) {
    return {
        type: 'FETCH_RESULT_BRAND',
        brand: brand
    }
}

export function setAllBrands(brands) {
    return {
        type: 'FETCH_ALL_BRAND',
        brands: brands.data
    }
}

export function setNewBrand(result) {
    const message = ''
    if(!result.success){
        return {
                type : 'CREATE_BRAND_FAILL',
                status: result.success,
                message: message
            }
    }
    return {
        type: 'CREATE_BRAND_SUCCESS',
        status: result.success,
        message: result.message,

    }
} 

export function faillGetBrands() {
    return {
        type: 'FAILL_FETCH_BRAND',
        message: 'Please re-login first'
    }
}

export const brandAction = {
    showAllBrands,
    resultBrand,
    createBrand
}