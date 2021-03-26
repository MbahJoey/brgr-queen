import React, { Component } from 'react';

import axios from '../../axios-orders.js';

import Fragment from '../../hoc/fragment/fragment.hoc';
import Burger from '../../components/burger/burger/burger.component';
import BuildControls from '../../components/burger/burger/build-controls/build-controls.component';
import Modal from '../../components/UI/modal/modal.component';
import OrderSummary from '../../components/burger/order-summary/order-summary.component';
import Spinner from '../../components/UI/spinner/spinner.component.jsx';
import WithErrorHandler from '../../hoc/with-error-handler/with-error-handler.jsx';

const INGREDIENT_PRICE = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 4,
    purchasable: false,
    purchaseMode: false,
    loading: false,
    error: false,
  };

  componentDidMount() {
    axios
      .get('https://brgr-queen-default-rtdb.firebaseio.com/ingredients.json')
      .then((response) => {
        this.setState({ ingredients: response.data });
      })
      .catch((error) => {
        this.setState({ error: true });
      });
  }

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchasable: sum > 0 });
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  purchaseHandler = () => {
    this.setState({ purchaseMode: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchaseMode: false });
  };

  purchaseContinueHandler = () => {
    //alert('CONTINUE!');
    this.setState({ loading: true });
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: 'asd asd',
        address: {
          street: 'street1',
          country: 'spain with silent s',
          zipCode: '123231',
        },
        email: 'pain@spain.es',
      },
      deliveryMethod: 'spanish',
    };
    axios
      .post('/orders.json', order)
      .then((response) => {
        this.setState({ loading: false, purchaseMode: false });
      })
      .catch((error) => {
        this.setState({ loading: false, purchaseMode: false });
      });
  };
  render() {
    const disableInfo = {
      ...this.state.ingredients,
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
    if (this.state.ingredients) {
      burger = (
        <Fragment>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            disabled={disableInfo}
            purchasable={this.state.purchasable}
            order={this.purchaseHandler}
            price={this.state.totalPrice}
          />
        </Fragment>
      );
      orderSummary = (
        <OrderSummary
          ingredients={this.state.ingredients}
          price={this.state.totalPrice}
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
export default WithErrorHandler(BurgerBuilder, axios);
