import { DATA, FAVORITECATEGORIES } from "../../utils/dummyData"

export function getFavoriteCategories(){
    return new Promise((resolve, reject) => {
        resolve(FAVORITECATEGORIES)
    })
}

export function getFavoriteProducts(){
    return new Promise((resolve, reject) => {
        resolve(FAVORITECATEGORIES);
    })
}