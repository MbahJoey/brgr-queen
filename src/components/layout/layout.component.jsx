import React from 'react';

import Fragment from '../../hoc/fragment/fragment.hoc';

import './layout.styles.css';

const Layout = (props) => (
  <Fragment>
    <div>Toolbar SideDrawer BackDrop</div>
    <main className='content'>{props.children} </main>
  </Fragment>
);

export default Layout;
