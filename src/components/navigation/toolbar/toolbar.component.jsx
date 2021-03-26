import React from 'react';
import Logo from '../../logo/logo.component';
import NavigationItems from '../navigation-items/navigation-items.component';
import DrawerToggle from '../side-drawer/drawer-toggle/drawer-toggle.component';

import './toolbar.styles.css';

const Toolbar = (props) => (
  <header className='Toolbar'>
    <DrawerToggle clicked={props.drawerToggleClicked}/>
    <div className='LogoTool'>
      <Logo />
    </div>
    <nav className='DesktopOnly'>
      <NavigationItems />
    </nav>
  </header>
);

export default Toolbar;
