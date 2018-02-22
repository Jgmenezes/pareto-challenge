import { CREATE_CARD_1 } from './actionTypes';

export function createCard(textAreaValue) {
    return {
        type: CREATE_CARD_1,
        payload: textAreaValue
    }
}