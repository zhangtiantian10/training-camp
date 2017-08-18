import React from 'react';
import {render} from "react-dom";
import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers/index';
import Student from './containers/student_container';
import TaskCard from './containers/taskCard';
import studentMiddleware from './middlewares/student_middleware';
import taskcardMiddleware from './middlewares/taskCard';

import Week from './containers/Week';


import weekMiddle from './middlewares/week';

const createStoreWithMiddleware = applyMiddleware(studentMiddleware, weekMiddle,taskcardMiddleware)(createStore);

const store = createStoreWithMiddleware(reducers);

render(<Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={Student}/>
        <Route path="/week" component={Week}/>
        <Route path="taskcard" component={TaskCard}/>
    </Router>
</Provider>, document.getElementById("content"));