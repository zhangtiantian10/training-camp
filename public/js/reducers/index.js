import {combineReducers} from 'redux';

import student from './student'
import week from './week';
import taskcard from './taskcard';
import getAllTaskcard from './getAllTaskcard';
import weekScore from './week-score';
import taskScore from './task-score';
import zone from './zone';
import totalScore from './total-score';

export default combineReducers({
    student,
    week,
    taskcard,
    getAllTaskcard,
    weekScore,
    taskScore,
    zone,
    totalScore
});