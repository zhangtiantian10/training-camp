import React from 'react';
import {render} from "react-dom";
import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers/index';
import Student from './containers/student_container';
import studentMiddleware from './middlewares/student_middleware';


const createStoreWithMiddleware = applyMiddleware(studentMiddleware)(createStore);

const store = createStoreWithMiddleware(reducers);

render(<Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={Student}/>
    </Router>
</Provider>, document.getElementById("content"));