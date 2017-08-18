import {combineReducers} from 'redux';

import student from './student'
import week from './week';
import taskcard from './taskcard';
import getAllTaskcard from './getAllTaskcard';

export default combineReducers({
    student,
    week,
    taskcard,
    getAllTaskcard
});