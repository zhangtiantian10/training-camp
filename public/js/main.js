import React from 'react';
import {render} from "react-dom";
import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers/index';

import Hello from './containers/hello';
import Week from './containers/Week';

import helloMiddle from './middlewares/hello';
import weekMiddle from './middlewares/week';

const createStoreWithMiddleware = applyMiddleware(helloMiddle, weekMiddle)(createStore);

const store = createStoreWithMiddleware(reducers);

render(<Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={Hello}/>
        <Route path="/week" component={Week}/>
    </Router>
</Provider>, document.getElementById("content"));