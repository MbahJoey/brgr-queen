import React from 'react';

import NavigationItem from './navigation-item/navigation-item.component';

import './navigation-items.styles.css';

const NavigationItems = (props) => (
  <ul className='NavigationItems'>
    <NavigationItem link='/'>BurgerBuilder</NavigationItem>
    {props.isAuthenticated ? (
      <NavigationItem link='/orders'>Orders</NavigationItem>
    ) : null}
    {!props.isAuthenticated ? (
      <NavigationItem link='/auth'>Authenticate</NavigationItem>
    ) : (
      <NavigationItem link='/logout'>Logout</NavigationItem>
    )}
  </ul>
);

export default NavigationItems;
