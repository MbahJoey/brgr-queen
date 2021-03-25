import React from 'react';

import NavigationItem from './navigation-item/navigation-item.component';

import './navigation-items.styles.css';

const NavigationItems = (props) => (
  <ul className='NavigationItems'>
    <NavigationItem link='/' active>BurgerBuilder</NavigationItem>
    <NavigationItem link='/' active>Checkout</NavigationItem>
  </ul>
);

export default NavigationItems;
