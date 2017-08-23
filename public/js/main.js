import React from 'react';
import {render} from "react-dom";
import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers/index';
import Student from './containers/student';
import TaskCard from './containers/taskCard';
import TaskScore from "./containers/task-Score";
import studentMiddleware from './middlewares/student';
import taskcardMiddleware from './middlewares/taskCard';
import getAllTaskcardMiddleware from './middlewares/getAllTadkcard';
import Week from './containers/Week';
import WeekScore from './containers/Week-Score';
import TotalScore from './containers/total-score';
import totalScoreMiddleware from './middlewares/total-score';

import weekMiddle from './middlewares/week';
import weekScoreMiddle from './middlewares/week-score';

const createStoreWithMiddleware = applyMiddleware(studentMiddleware, weekMiddle, taskcardMiddleware, getAllTaskcardMiddleware, weekScoreMiddle,totalScoreMiddleware)(createStore);

const store = createStoreWithMiddleware(reducers);

render(<Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={Student}/>
        <Route path="/week" component={Week}/>
        <Route path="taskcard" component={TaskCard}/>
        <Route path="/weekScore" component={WeekScore}/>
        <Route path="/taskScore" component={TaskScore}/>
        <Route path="/totalScore" component={TotalScore}/>
    </Router>
</Provider>, document.getElementById("content"));