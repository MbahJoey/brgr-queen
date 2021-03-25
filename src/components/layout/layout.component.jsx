import React from 'react';

import Fragment from '../../hoc/fragment/fragment.hoc';
import Toolbar from '../navigation/toolbar/toolbar.component';

import './layout.styles.css';

const Layout = (props) => (
  <Fragment>
    <Toolbar/>
    <main className='content'>{props.children} </main>
  </Fragment>
);

export default Layout;
