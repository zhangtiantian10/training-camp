import React from 'react';
import {render} from "react-dom";
import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers/index';
import Student from './containers/student';
import TaskCard from './containers/taskCard';
import studentMiddleware from './middlewares/student';
import taskcardMiddleware from './middlewares/taskCard';
import getAllTaskcardMiddleware from './middlewares/getAllTadkcard';
import Nav from './containers/nav'

import Week from './containers/Week';


import weekMiddle from './middlewares/week';

const createStoreWithMiddleware = applyMiddleware(studentMiddleware, weekMiddle,taskcardMiddleware,getAllTaskcardMiddleware)(createStore);

const store = createStoreWithMiddleware(reducers);

render(<Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={Student}/>
        <Route path="/week" component={Week}/>
        <Route path="taskcard" component={TaskCard}/>
        <Route path="/nav" component={Nav}></Route>
    </Router>
</Provider>, document.getElementById("content"));