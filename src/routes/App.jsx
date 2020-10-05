import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "../components/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Results from "../pages/Results";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";

import "../assets/styles/globales.scss";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Main" component={Home} />
        <Route exact path="/results" component={Results} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);
export default App;
