import React, { Component } from 'react';
import { connect } from 'react-redux';

import axios from '../../axios-orders.js';

import Fragment from '../../hoc/fragment/fragment.hoc';
import Burger from '../../components/burger/burger/burger.component';
import BuildControls from '../../components/burger/burger/build-controls/build-controls.component';
import Modal from '../../components/UI/modal/modal.component';
import OrderSummary from '../../components/burger/order-summary/order-summary.component';
import Spinner from '../../components/UI/spinner/spinner.component.jsx';
import WithErrorHandler from '../../hoc/with-error-handler/with-error-handler.jsx';
import * as actionTypes from '../../store/actions';

class BurgerBuilder extends Component {
  state = {
    purchaseMode: false,
    loading: false,
    error: false,
  };

  componentDidMount() {
    //   axios
    //     .get('https://brgr-queen-default-rtdb.firebaseio.com/ingredients.json')
    //     .then((response) => {
    //       this.setState({ ingredients: response.data });
    //     })
    //     .catch((error) => {
    //       this.setState({ error: true });
    //     });
  }

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0;
  }

  // addIngredientHandler = (type) => {
  //   const oldCount = this.state.ingredients[type];
  //   const updatedCount = oldCount + 1;
  //   const updatedIngredients = {
  //     ...this.state.ingredients,
  //   };
  //   updatedIngredients[type] = updatedCount;
  //   const priceAddition = INGREDIENT_PRICE[type];
  //   const oldPrice = this.state.totalPrice;
  //   const newPrice = oldPrice + priceAddition;
  //   this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
  //   this.updatePurchaseState(updatedIngredients);
  // };

  // removeIngredientHandler = (type) => {
  //   const oldCount = this.state.ingredients[type];
  //   if (oldCount <= 0) {
  //     return;
  //   }
  //   const updatedCount = oldCount - 1;
  //   const updatedIngredients = {
  //     ...this.state.ingredients,
  //   };
  //   updatedIngredients[type] = updatedCount;
  //   const priceDeduction = INGREDIENT_PRICE[type];
  //   const oldPrice = this.state.totalPrice;
  //   const newPrice = oldPrice - priceDeduction;
  //   this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
  //   this.updatePurchaseState(updatedIngredients);
  // };

  purchaseHandler = () => {
    this.setState({ purchaseMode: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchaseMode: false });
  };

  purchaseContinueHandler = () => {
    //alert('CONTINUE!');
    // this.setState({ loading: true });
    // const order = {
    //   ingredients: this.state.ingredients,
    //   price: this.state.totalPrice,
    //   customer: {
    //     name: 'asd asd',
    //     address: {
    //       street: 'street1',
    //       country: 'spain with silent s',
    //       zipCode: '123231',
    //     },
    //     email: 'pain@spain.es',
    //   },
    //   deliveryMethod: 'spanish',
    // };
    // axios
    //   .post('/orders.json', order)
    //   .then((response) => {
    //     this.setState({ loading: false, purchaseMode: false });
    //   })
    //   .catch((error) => {
    //     this.setState({ loading: false, purchaseMode: false });
    //   });

    // const queryParams = [];
    // for (let i in this.state.ingredients) {
    //   queryParams.push(
    //     encodeURIComponent(i) +
    //       '=' +
    //       encodeURIComponent(this.state.ingredients[i])
    //   );
    // }
    // queryParams.push('price=' + this.state.totalPrice);
    // const queryString = queryParams.join('&');

    // this.props.history.push({
    //   pathname: '/checkout',
    //   search: '?' + queryString,
    // });
    this.props.history.push('/checkout');
  };
  render() {
    const disableInfo = {
      ...this.props.ings,
    };
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }
    let orderSummary = null;

    let burger = this.state.error ? (
      <p>Ingredients cant be loaded! Try again Later</p>
    ) : (
      <Spinner />
    );
    if (this.props.ings) {
      burger = (
        <Fragment>
          <Burger ingredients={this.props.ings} />
          <BuildControls
            ingredientAdded={this.props.onIngredientAdded}
            ingredientRemoved={this.props.onIngredientRemoved}
            disabled={disableInfo}
            purchasable={this.updatePurchaseState(this.props.ings)}
            order={this.purchaseHandler}
            price={this.props.price}
          />
        </Fragment>
      );
      orderSummary = (
        <OrderSummary
          ingredients={this.props.ings}
          price={this.props.price}
          purchaseCancelled={this.purchaseCancelHandler}
          purchaseContinued={this.purchaseContinueHandler}
        />
      );

      if (this.state.loading) {
        orderSummary = <Spinner />;
      }
    }

    return (
      <Fragment>
        <Modal
          show={this.state.purchaseMode}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.ingredients,
    price: state.totalPrice,
  };
};

const mapStateDispatchToProps = (dispatch) => {
  return {
    onIngredientAdded: (ingName) =>
      dispatch({
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: ingName,
      }),
    onIngredientRemoved: (ingName) =>
      dispatch({
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: ingName,
      }),
  };
};

export default connect(
  mapStateToProps,
  mapStateDispatchToProps
)(WithErrorHandler(BurgerBuilder, axios));
