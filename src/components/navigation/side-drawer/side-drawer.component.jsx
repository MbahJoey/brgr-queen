import React from 'react';
import Fragment from '../../../hoc/fragment/fragment.hoc';

import Logo from '../../logo/logo.component';
import Backdrop from '../../UI/backdrop/backdrop.component';
import NavigationItems from '../navigation-items/navigation-items.component';

import './side-drawer.styles.css';

const SideDrawer = (props) => {
  return (
    <Fragment>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={`SideDrawer ${props.open ? 'Open' : 'Close'}`}>
        <div className='LogoSide'>
          <Logo />
        </div>
        <nav>
          <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
      </div>
    </Fragment>
  );
};

export default SideDrawer;
