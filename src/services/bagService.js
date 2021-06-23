import { FAVORITECATEGORIES } from "../../utils/dummyData"

export function getBagProducts(){
    return new Promise((resolve, reject) => {
        resolve(FAVORITECATEGORIES)
    })
}