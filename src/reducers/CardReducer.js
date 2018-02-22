import { CREATE_CARD_1 } from '../actions/actionTypes';
const INITIAL_STATE = { items_1: [] };

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case CREATE_CARD_1:
            return {
                ...state,
                items_1: state.items_1.concat(action.payload)
            }
        default:
            return state;
    }
}