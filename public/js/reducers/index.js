import {combineReducers} from 'redux';

import student from './student-reducer'
import week from './week';

export default combineReducers({
    student,
    week
});