import { ADD_BAG_PRODUCTS } from "../types";

export function addBagProducts(products){
    return {
        type: ADD_BAG_PRODUCTS,
        data: {
            products: products
        }
    }
}