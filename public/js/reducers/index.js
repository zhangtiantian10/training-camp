import {combineReducers} from 'redux';

import student from './student'
import week from './week';
import taskcard from './taskcard';
import getAllTaskcard from './getAllTaskcard';
import weekScore from './week-score';
<<<<<<< HEAD
import totalScore from './total-score';
=======
import taskScore from './task-score';
>>>>>>> 19663664ef86cdb0fc5ef4a15d278cfffd04c351

export default combineReducers({
    student,
    week,
    taskcard,
    getAllTaskcard,
    weekScore,
<<<<<<< HEAD
    totalScore
=======
    taskScore
>>>>>>> 19663664ef86cdb0fc5ef4a15d278cfffd04c351
});