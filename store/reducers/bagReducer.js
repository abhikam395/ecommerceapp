import { ADD_BAG_PRODUCTS } from "../types";

const initialState = {
    products: []
}

function bagReducer(state = initialState, action){
    let {type, data} = action;
    switch(type){
        case ADD_BAG_PRODUCTS: {
            return Object.assign({...state}, {products: data.products})
        }
        default : {
            return state;
        }
    }
}

export default bagReducer;