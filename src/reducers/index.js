import { combineReducers } from 'redux';
import CardReducer  from './CardReducer';

export const Reducers = combineReducers({
    cardState: CardReducer
});