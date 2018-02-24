const INITIAL_STATE = { itemsCard1: [], itemsCard2: [], itemsCard3: [] };

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'CREATE_CARD':
            return {
                ...state,
                [`itemsCard${action.payload.id[0]}`]: state[`itemsCard${action.payload.id[0]}`].concat(action.payload)
            }
        case 'UPDATE_CARD':
            return {
                ...state,
                [`itemsCard${action.payload.id[0]}`]: state[`itemsCard${action.payload.id[0]}`].map(item => [action.payload].find(o => o.id === item.id) || item)
            }
        case 'DELETE_CARD':
            return {
                ...state,
                [`itemsCard${action.payload[0]}`]: state[`itemsCard${action.payload[0]}`].filter(item => item.id !== action.payload)
            }
        default:
            return state;
    }
}