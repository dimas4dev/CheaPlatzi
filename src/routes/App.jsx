import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Layout from '../components/Layout';
import Home from '../pages/Home';
import Results from '../pages/Results';

import '../assets/styles/globales.scss';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/results' component={Results} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
