import React from 'react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import {createBrowserHistory} from 'history';
import reducers from '../redux/reducers/rootReducer';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
const history = createBrowserHistory();

const ProviderMock = (props) => (
  <Provider store={store}>
    <Router history={history}>{props.children}</Router>
  </Provider>
);

export default ProviderMock;
