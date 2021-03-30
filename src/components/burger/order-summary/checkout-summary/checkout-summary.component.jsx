import React from 'react';

import Burger from '../../burger/burger.component';
import CustomButton from '../../../UI/custom-button/custom-button.component';

import './checkout-summary.styles.css';

const CheckoutSummary = (props) => {
  return (
    <div className='CheckoutSummary'>
      <h1>Enjoy your meal</h1>
      <div className='burg'>
        <Burger ingredients={props.ingredients} />
      </div>
      <CustomButton btnType='Danger' clicked={props.checkoutCancel}>
        Cancel
      </CustomButton>
      <CustomButton btnType='Success' clicked={props.checkoutContinue}>
        Continue
      </CustomButton>
    </div>
  );
};

export default CheckoutSummary;
