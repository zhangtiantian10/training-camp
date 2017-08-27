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
import taskScoreMiddleware from "./middlewares/task-Score"
import getAllTaskcardMiddleware from './middlewares/getAllTadkcard';
import Week from './containers/Week';
import WeekScore from './containers/Week-Score';
import Zone from './containers/Zone';
import TotalScore from './containers/total-score';
import Team from './containers/Team';
import totalScoreMiddleware from './middlewares/total-score';

import weekMiddle from './middlewares/week';
import weekScoreMiddle from './middlewares/week-score';
import zoneMiddle from './middlewares/zone';
import teamMiddle from './middlewares/team';

const createStoreWithMiddleware = applyMiddleware(studentMiddleware, weekMiddle, taskcardMiddleware, getAllTaskcardMiddleware, weekScoreMiddle, taskScoreMiddleware, zoneMiddle, totalScoreMiddleware, teamMiddle)(createStore);

const store = createStoreWithMiddleware(reducers);

render(<Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={Student}/>
        <Route path="/week" component={Week}/>
        <Route path="taskcard" component={TaskCard}/>
        <Route path="/weekScore" component={WeekScore}/>
        <Route path="/taskScore" component={TaskScore}/>
        <Route path="/zone" component={Zone}></Route>
        <Route path="/totalScore" component={TotalScore}/>
        <Route path="/team" component={Team}/>
    </Router>
</Provider>, document.getElementById("content"));