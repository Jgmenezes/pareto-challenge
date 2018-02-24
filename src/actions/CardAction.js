export function createCard(txtAreaObj) {
    return {
        type: 'CREATE_CARD',
        payload: txtAreaObj
    }
}

export function updateCard(newTextAreaObj) {
    return {
        type: 'UPDATE_CARD',
        payload: newTextAreaObj
    }
}

export function deleteCard(cardId) {
    return {
        type: 'DELETE_CARD',
        payload: cardId
    }
}