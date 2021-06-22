import { ADD_HOME_BANNER, ADD_NEW_PRODUCTS, ADD_SALE_PRODUCTS } from "../types";

const initalState = {
    saleProducts: [],
    newProducts: [],
    banner: {
        title: null,
        image: null
    }
}

function homeReducer(state = initalState, action){
    let {type, data} = action;
    switch(type){
        case ADD_NEW_PRODUCTS: {
            return Object.assign({...state}, {newProducts: data.products})
        }
        case ADD_SALE_PRODUCTS: {
            return Object.assign({...state}, {saleProducts: data.products})
        }
        case ADD_HOME_BANNER: {
            return Object.assign({...state}, {banner: data.banner})
        }
        default: return state;
    };
}

export default homeReducer;