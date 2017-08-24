import {combineReducers} from 'redux';

import student from './student'
import week from './week';
import taskcard from './taskcard';
import getAllTaskcard from './getAllTaskcard';
import weekScore from './week-score';
import totalScore from './total-score';

export default combineReducers({
    student,
    week,
    taskcard,
    getAllTaskcard,
    weekScore,
    totalScore
});