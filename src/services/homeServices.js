import { BANNER, DATA } from "../../utils/dummyData"

export function getSaleProducts(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(DATA);
        }, 10000)
    })
}

export function getNewProducts(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(DATA);
        }, 1000)
    })
}

export function getHomeBanner(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(BANNER);
        }, 1000)
    })
}
