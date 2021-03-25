import React from 'react';
import Logo from '../../logo/logo.component';
import NavigationItems from '../navigation-items/navigation-items.component';

import './toolbar.styles.css';

const Toolbar = (props) => (
  <header className='Toolbar'>
    <div>MENU</div>
    <Logo />
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default Toolbar;
