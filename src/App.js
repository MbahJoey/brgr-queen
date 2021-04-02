import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './components/layout/layout.component';
import BurgerBuilder from './containers/burgerBuilder/burger-builder.component';
import Checkout from './containers/checkout/checkout.component';
import Orders from './containers/orders/orders.component';
import Auth from './containers/auth/auth.component';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path='/checkout' component={Checkout} />
            <Route path='/orders' component={Orders} />
            <Route path='/auth' component={Auth} />
            <Route path='/' exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
