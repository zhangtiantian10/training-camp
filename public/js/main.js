import React from 'react';
import {render} from "react-dom";
import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers/index';

import Hello from './containers/hello';

import helloMiddle from './middlewares/hello';

const createStoreWithMiddleware = applyMiddleware(helloMiddle)(createStore);

const store = createStoreWithMiddleware(reducers);

render(<Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={Hello}/>
    </Router>
</Provider>, document.getElementById("content"));