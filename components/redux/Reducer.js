import { ADD_TO_CART } from './Constaints';
const initialState = [];

export const reducer = (state = initialState, Action) => {
    switch (Action.type) {
        case ADD_TO_CART:
            return[
                ...state,
                Action.data
            ]
            default:
                return state
}
}