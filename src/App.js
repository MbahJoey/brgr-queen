import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './components/layout/layout.component';
import BurgerBuilder from './containers/burgerBuilder/burger-builder.component';
import Checkout from './containers/checkout/checkout.component';
import Orders from './containers/orders/orders.component';
import Auth from './containers/auth/auth.component';
import Logout from './containers/auth/logout/logout.component';

import * as actions from './store/actions/index';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path='/checkout' component={Checkout} />
            <Route path='/orders' component={Orders} />
            <Route path='/auth' component={Auth} />
            <Route path='/logout' component={Logout} />
            <Route path='/' exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};

export default connect(null, mapDispatchToProps)(App);
