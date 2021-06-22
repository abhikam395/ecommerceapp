import { ADD_HOME_BANNER, ADD_NEW_PRODUCTS, ADD_SALE_PRODUCTS } from "../types";

export function addNewProducts(products){
    return {
        type: ADD_NEW_PRODUCTS,
        data: {
            products: products
        }
    }
}

export function addSaleProducts(products){
    return {
        type: ADD_SALE_PRODUCTS,
        data: {
            products: products
        }
    }
}

export function addHomeBanner(banner){
    return {
        type: ADD_HOME_BANNER,
        data: {
            banner: banner
        }
    }
}