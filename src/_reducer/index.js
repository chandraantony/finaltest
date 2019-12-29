import {combineReducers} from 'redux';
import categoryReducer from './categoryReducer';
import eventReducer from './eventReducer'

export default combineReducers({
    categoryReducer,
    eventReducer
});