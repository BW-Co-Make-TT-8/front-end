import { combineReducers } from 'redux';
import { loginReducer as loginState } from './loginReducer';

export const rootReducer = combineReducers({
    loginState
})