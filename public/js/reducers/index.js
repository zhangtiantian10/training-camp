import {combineReducers} from 'redux';

import student from './student-reducer'
import week from './week';
import taskcard from './taskcard';

export default combineReducers({
    student,
    week,
    taskcard
});