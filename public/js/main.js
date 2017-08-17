import React from 'react';
import {render} from "react-dom";
import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers/index';

import Hello from './containers/hello';

const store = createStore(reducers);

render(<Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={Hello}/>
    </Router>
</Provider>, document.getElementById("content"));