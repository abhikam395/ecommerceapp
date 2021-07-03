import { BANNER, DATA } from "../../utils/dummyData"

export function getSaleProducts(){
    return new Promise((resolve, reject) => {
        resolve(DATA);
    })
}

export function getNewProducts(){
    return new Promise((resolve, reject) => {
        resolve(DATA);
    })
}

export function getHomeBanner(){
    return new Promise((resolve, reject) => {
        resolve(BANNER);
    })
}
