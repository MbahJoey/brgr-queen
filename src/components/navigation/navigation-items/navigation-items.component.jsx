import React from 'react';

import NavigationItem from './navigation-item/navigation-item.component';

import './navigation-items.styles.css';

const NavigationItems = (props) => (
  <ul className='NavigationItems'>
    <NavigationItem link='/'>BurgerBuilder</NavigationItem>
    <NavigationItem link='/orders'>Orders</NavigationItem>
  </ul>
);

export default NavigationItems;
