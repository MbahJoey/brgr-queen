import React from 'react';

import './navigation-item.styles.css';

const NavigationItem = (props) => (
  <li className='NavigationItem'>
    <a href={props.link} className={`${props.active} ? 'active' : 'null'`}>
      {props.children}
    </a>
  </li>
);

export default NavigationItem;
