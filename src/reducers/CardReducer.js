import { CREATE_CARD_1, CREATE_CARD_2, CREATE_CARD_3 } from '../actions/actionTypes';

const INITIAL_STATE = {items: []};

export const CardReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CREATE_CARD_1:
            return {
                ...state,
                items: action.value
            };
        case CREATE_CARD_2:
            return {
                ...state,
                items: action.value
            };
        case CREATE_CARD_3:
            return {
                ...state,
                items: action.value
            };
        default:
            return state;
    }
}