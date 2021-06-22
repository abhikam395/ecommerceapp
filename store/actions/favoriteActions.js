import { ADD_FAVORITE_CATEGORIES, ADD_FAVORITE_PRODUCTS } from "../types";

export function addFavoriteProducts(products) {
    return {
        type: ADD_FAVORITE_PRODUCTS,
        data: {
            products: products
        }
    }
}

export function addFavoriteCategories(categories){
    return {
        type: ADD_FAVORITE_CATEGORIES,
        data: {
            categories: categories
        }
    }
}