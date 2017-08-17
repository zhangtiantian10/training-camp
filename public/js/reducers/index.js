import {combineReducers} from 'redux';
import hello from './hello';
import week from './week';

export default combineReducers({
    hello,
    week
});