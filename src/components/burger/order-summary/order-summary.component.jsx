import React from 'react';

import Fragment from '../../../hoc/fragment/fragment.hoc';
import CustomButton from '../../UI/custom-button/custom-button.component';

import './order-summary.styles.css';

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span className='igkey'>{igKey}</span>: {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Total Price: ${props.price.toFixed(2)}</p>
      <p>Continue to checkout?</p>
      <CustomButton btnType='Danger' clicked={props.purchaseCancelled}>
        Cancel
      </CustomButton>
      <CustomButton btnType='Success' clicked={props.purchaseContinued}>
        Continue
      </CustomButton>
    </Fragment>
  );
};

export default OrderSummary;
