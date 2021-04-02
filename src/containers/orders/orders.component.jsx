import React, { Component } from 'react';
import { connect } from 'react-redux';

import Order from '../../components/burger/order-summary/order.component';
import axios from '../../axios-orders.js';
import WithErrorHandler from '../../hoc/with-error-handler/with-error-handler';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/spinner/spinner.component';

class Orders extends Component {
  componentDidMount() {
    this.props.onFetchOrders(this.props.token);
  }

  render() {
    let orders = <Spinner />;
    if (!this.props.loading) {
      orders = this.props.orders.map((order) => (
        <Order
          key={order.id}
          ingredients={order.ingredients}
          price={order.price}
        />
      ));
    }
    return <div key={this.props.key}>{orders}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
    token: state.auth.token
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchOrders: (token) => dispatch(actions.fetchOrders(token)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithErrorHandler(Orders, axios));
