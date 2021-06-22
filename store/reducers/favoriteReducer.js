import { ADD_FAVORITE_CATEGORIES, ADD_FAVORITE_PRODUCTS } from "../types";

const initialState = {
    categories: [],
    products: []
}

function favoriteReducer(state = initialState, action){
    let {type, data} = action;
    switch(type){
        case ADD_FAVORITE_CATEGORIES: {
            return Object.assign({...state}, {categories: data.categories});
        }
        case ADD_FAVORITE_PRODUCTS: {
            return Object.assign({...state}, {products: data.products});
        }
        default : {
            return state;
        }
    }
}

export default favoriteReducer;