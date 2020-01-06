import {combineReducers} from 'redux';
import categoryReducer from './categoryReducer';
import eventReducer from './eventReducer'
import userReducer from './userReducer'
import orderReducer from './orderReducer'

export default combineReducers({
    categoryReducer,
    eventReducer,
    userReducer,
    orderReducer
});