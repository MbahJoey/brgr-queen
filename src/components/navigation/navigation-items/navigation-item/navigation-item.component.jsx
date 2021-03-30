import React from 'react';
import { NavLink } from 'react-router-dom';

import './navigation-item.styles.css';

const NavigationItem = (props) => (
  <li className='NavigationItem'>
    <NavLink to={props.link} exact activeClassName='active'>
      {props.children}
    </NavLink>
  </li>
);

export default NavigationItem;
