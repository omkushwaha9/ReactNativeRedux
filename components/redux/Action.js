import {ADD_TO_CART} from './Constaints'

 export function addToCart(item){
    return{
        type:ADD_TO_CART,
        data:item
    }
}