/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule Root
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Link, browserHistory,IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import configureStore from '../store/configureStore';


import Dashboard from './Dashboard';

import App from './App';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store)
var shallowCompare = require('react-addons-shallow-compare');


export default class Root extends Component {
  
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path='/' component={App}>
            <IndexRoute component={Dashboard} pageName="Dashboard" pageDescription="Admin Application Dashboard." />
            
            {/*<Route path='/form/exemplo' component={FormExemplo} pageName="Form Exemplo" pageDescription="Form examplo" />*/}

          </Route>
          {/*<Route path='/landing' component={Landing} />*/}
        </Router>
      </Provider>
    );
  }
}